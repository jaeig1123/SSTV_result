package com.example.sstv.user.restController;

import com.example.sstv.common.Data;
import com.example.sstv.common.NodeCookie;
import com.example.sstv.common.Search;
import com.example.sstv.fan.Service.FanService;
import com.example.sstv.user.CoinHistroy;
import com.example.sstv.user.Service.UserService;
import com.example.sstv.user.User;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.*;

@RestController
@RequestMapping("/user/*")
public class userRestController {
    @Autowired
    private UserService userService;
    @Autowired
    private FanService fanService;
    @Value("${redirectUrl}")
    private String redirectUrl;

    @Autowired
    public userRestController(UserService userService) {
        this.userService = userService;}

    @PostMapping(value="addUser")
    public Data addUser(@RequestBody User user){
        userService.addUser(user);
        Data data = new Data("success", "(일반)회원가입 완료");
        return data;
    }

    @GetMapping(value="naverLogin")
    public Data naverLogin(@RequestParam(value = "code", required = false) String code, HttpSession session, HttpServletResponse response, HttpServletRequest request) throws Exception {

        String access_Token ="";
        access_Token = userService.getAccessToken(code);
        System.out.println("token 발급 완료! :: " +access_Token);

        //회원 정보 받아오기(from 네이버)
        Map<String, Object> userInfo = userService.getUserInfo(access_Token);
        System.out.println("userInfo..! :: "+userInfo);
        String snsUserId = (String)userInfo.get("userId");
//        System.out.println(snsUserId);
//        //snsUserId로 회원 전체정보 가져오고 blackList 추가
        User info = userService.getUser(snsUserId);
        info.setBlackList((fanService.getBlackList(snsUserId)));
//
//        System.out.println("세션에 저장될 정보는 :: "+info);
//
//        //세션에 유저정보 저장 후, 메인화면으로 redirect.
        session.setAttribute("user", info);

//        response.sendRedirect(redirectUrl);
//        String redirectUrlWithUserId = redirectUrl + "?sns=" + snsUserId;
//        response.sendRedirect(redirectUrlWithUserId);

//        User user = (User)session.getAttribute("user");
//
//        System.out.println("snsUser 세션에 저장 완료 : "+user);
//        printSessionAttributes(session);

        Data data = new Data("success", info, "로그인성공..");
        return data;
    }

    // 회원 정보 조회
    @GetMapping(value="getUser/{userId}")
    public Data getUser(@PathVariable String userId) {
        System.out.println("회원 정보 조회");
        User userInfo = null;
        if(userService.getUser(userId) != null) {
            userInfo = userService.getUser(userId);
            userInfo.setFollowList(fanService.getFollowList(userId));
        }
        System.out.println("팔로우 리스트 추가");
        Data data = new Data("success", userInfo);
        return data;
    }

    @PostMapping(value="login")
    public Data login(@RequestBody User user , HttpSession session, HttpServletResponse response){
        System.out.println("여기는 ! Login RestController");
        Data data = null;

        //DB에 저장된 user정보 info로 가져오고 blackList 정보 추가
        User info = userService.getUser(user.getUserId());
        info.setBlackList(fanService.getBlackList(info.getUserId()));
        System.out.println(info.getUserId());
        System.out.println("blackList CHECK :: " +fanService.getBlackList(info.getUserId()));

        //아이디 패스워드 일치 불일치 여부에 따라 다른 결과 리턴..
        if(user.getPassword().equals(info.getPassword())){
            //회원 정보&블랙리스트 세션에 저장
            System.out.println("아이디 패스워드 일치");
            session.setAttribute("user", info);
            //로그인되며, 회원탈퇴 절차 취소
            userService.removeUserCancle(info.getUserId());
            printSessionAttributes(session);
            data = new Data("success", info);
        }else{
            System.out.println("아이디 패스워드 불일치");
            data = new Data("fail","");
        }

        return data;
    }

    public static void printSessionAttributes(HttpSession session) {
        System.out.println("Session ID: " + session.getId());

        Enumeration<String> attributeNames = session.getAttributeNames();
        while (attributeNames.hasMoreElements()) {
            String attributeName = attributeNames.nextElement();
            Object attributeValue = session.getAttribute(attributeName);
            System.out.println(attributeName + " : " + attributeValue);
        }
    }

    @GetMapping(value = "login")
    public Data loginSessionCheck(HttpSession session, @RequestParam(value = "sessionId", required = false) String sessionId, HttpServletRequest request) {
        System.out.println("로그인 세션 가져오기");
        User user = (User) session.getAttribute("user");
        System.out.println("세션에 저장된 정보는 :: "+user);
        Data data = new Data("success", user);

        return data;
    }


//    @GetMapping(value="snsLogin")
//    public Data snsLoginSessionCheck(HttpSession session){
//        User user = (User) session.getAttribute("snsUser");
//        System.out.println("세션 유지중인 유저 :: " + user);
//        Data data = new Data ("success",user);
//
//        return data;
//    }

    @GetMapping(value = "logout")
    public Data logout(HttpSession session){
        System.out.println("logout.. BYEBYE!");
        session.invalidate();

        Data data = new Data("success", "logout");
        return data;
    }

    @GetMapping(value = "removeUserStart")
    public Data removeUserStart(HttpSession session){
        User user = (User)session.getAttribute("user");
        String userId = user.getUserId();
        System.out.println("removeUser Start :: "+userId);
        userService.removeUserStart(userId);

        Data data = new Data("success", userId);
        return data;
    }

    @PostMapping(value="updateUser")
    public Data updateUser(@RequestBody User user){
        System.out.println("updateUser..!"+user);
        userService.updateUser(user);
        System.out.println(user);
        Data data = new Data("success", user);
        return data;
    }

    @GetMapping(value="checkUserId/{userId}")
    public Data checkUserId(@PathVariable String userId){
        System.out.println("아이디 Check :: "+userId);
        String isEnabled;
        if (userService.checkUserId(userId) == true){
            isEnabled = "useOk";
        }else{
            isEnabled = "useNo";
        }
        System.out.println("사용 가능 여부는 ?? "+isEnabled);
        Data data = new Data("success", isEnabled);
        return data;
    }

    @GetMapping(value="checkUserNickname/{userNickname}")
    public Data checkUserNickname(@PathVariable String userNickname){
        System.out.println("닉네임 Check :: "+userNickname);
        String isEnabled;
        if (userService.checkUserNickname(userNickname) == true){
            isEnabled = "useOk";
        }else{
            isEnabled = "useNo";
        }
        System.out.println("사용 가능 여부는 ?? "+isEnabled);
        Data data = new Data("success", isEnabled);
        return data;
    }

    @PostMapping (value="findId")
    public Data findId(@RequestBody String phone) throws Exception {
        System.out.println("phone..? "+phone);
        //json 형식으로 받아온 data 처리
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(phone);
        String phoneNum = jsonNode.get("phone").asText();
        System.out.println("phone :: "+phoneNum);

        String userId = userService.findId(phoneNum).getUserId();

        if(userService.getUser(userId).getUserType() == 1) {
            System.out.println("해당 회원은 sns회원");
            userId = null;
        }

        System.out.println("userService.findId(phone) :: " +userId);

        Data data = new Data("success", userService.findId(phoneNum).getUserId());
        return data;
    }

    @GetMapping (value="checkId/{phone}")
    public Data checkId(@PathVariable String phone) throws Exception {
        //전달되는 값 유효한 값으로 파싱.
        String phoneNum = phone.replace("=","");
        System.out.println("phone :: "+phoneNum);
        String userId = "";

        //입력받은 휴대폰 번호로 회원 유무 체크 & 회원 유형 체크
        if (userService.findId(phoneNum) != null ) {
            userId = userService.findId(phoneNum).getUserId();
            if (userService.getUser(userId).getUserType() == 1) {
                System.out.println("해당 회원은 sns회원");
                userId = "snsUser";
            }
        } else {
            userId = "";
        }

        System.out.println("userService.findId(phone) :: " +userId);

        Data data = new Data("success", userId);
        return data;
    }

    @PostMapping (value="findPasswd")
    public Data findPasswd(@RequestBody User user){
        System.out.println("비밀번호 찾기");

            userService.findPasswd(user);

        Data data = new Data("success", user);
        return data;
    }

    @PostMapping (value="sendSMS")
    public Data sendSMS(@RequestBody String phone, HttpSession session , HttpServletRequest request) throws NoSuchAlgorithmException, InvalidKeyException, JsonProcessingException {
        //json 형식으로 받아온 data 처리
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(phone);
        String phoneCheck = jsonNode.get("phone").asText();
        System.out.println("phoneCheck :: "+phoneCheck);

        //인증번호 랜덤한 6자리 생성
        Random random = new Random();
        int min = 100000; // 최소값 (6자리)
        int max = 999999; // 최대값 (6자리)
        int randomNumber = random.nextInt(max - min + 1) + min;
        String rand = String.valueOf(randomNumber);
        //랜덤번호 인증을 위해 session에 값 저장 (3분)
        session.setAttribute("randCode",rand);
        session.setMaxInactiveInterval(180);

        //문자 발송
        userService.sendSMS(phoneCheck, rand, request);
        Data data = new Data("success", "문자 전송 완료");
        return data;
    } //RequestBody-json으로 받아오니 원하는 값만 받아오지 않았음({"phone":"010~~~~"})으로 받아와서 Request Param으로 수정

    @PostMapping (value="phoneCheck")
    public Data phoneCheck(@RequestBody String code, HttpSession session) throws JsonProcessingException {
        System.out.println(code);
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(code);
        String smsCode = jsonNode.get("code").asText();
        System.out.println("smsCode :: "+smsCode);
        System.out.println("sessionCode :: "+session.getAttribute("randCode"));
        String success = "";

        if (session != null && session.getAttribute("randCode") != null) {
            String smsRand = (String) session.getAttribute("randCode");
            if (smsRand.equals(smsCode)) {
                session.removeAttribute("randCode");
                System.out.println("인증 번호 일치.");
                success = "success";
            }else{
                success = "fail";
            }
        }
            System.out.println("인증 성공 여부 ::"+success);
            Data data = new Data("success",success);
            return data;
    }
    @PostMapping ( value="addCoinHistory")
    public Data addCoinHistory(@RequestBody CoinHistroy coinHistroy){
        System.out.println("코인 사용 내역 등록 완료"+coinHistroy.getCoin());
        userService.addCoinHistory(coinHistroy);
        Data data = new Data("success", "코인 사용내역 등록 완료.");
        return data;
    }

    @GetMapping ( value="getCoinHistory/{userId}")
    public Data getCoinHistory(@PathVariable String userId){
        System.out.println(userId);
        Data data = new Data("success", userService.getCoinHistory(userId));
        return data;
    }

    @GetMapping (value="kakaoLogin")
    public Data kakaoLogin(@RequestParam(value = "code", required = false) String code,HttpSession session,HttpServletRequest request , HttpServletResponse response) throws Exception {
        System.out.println(code);
        //발급 받아온 접근 token
        String access_token = userService.getkakaoToken(code);
        System.out.println("access_token :: "+access_token);
        Map<String, Object> kakaoUserInfo = userService.getKakaoInfo(access_token);
        String snsUserId = (String)kakaoUserInfo.get("userId");
        System.out.println(snsUserId);
        User info = userService.getUser(snsUserId);
        info.setBlackList(fanService.getBlackList(snsUserId));

        System.out.println("세션에 저장될 정보는 :: "+info);
//
        session.setAttribute("user", info);
//        response.sendRedirect(redirectUrl);
//        String redirectUrlWithUserId = redirectUrl + "?sns=" + snsUserId;
//        response.sendRedirect(redirectUrlWithUserId);

//        String currentSessionId = session.getId();
//        // 리다이렉션 URL에 세션 아이디를 파라미터로 추가
//        String redirectUrlWithSessionId = redirectUrl + "?sessionId=" + currentSessionId;
//
//        // URL 재작성을 수행하여 컨텍스트 경로를 포함한 절대 경로로 리다이렉션
//        String redirectUrlWithContext = request.getContextPath() + redirectUrl;
//        response.sendRedirect(redirectUrlWithContext);
//        RequestDispatcher dispatcher = request.getRequestDispatcher(redirectUrl); // 전달할 페이지 경로
//        dispatcher.forward(request, response);

        Data data = new Data("success",info,"로그인 성공..");
        return data;
    }

    @PostMapping (value = "uploadFile")
    public Data uploadFile(@RequestParam("file") MultipartFile file , @RequestParam String userId) throws IOException{
        String originalFilename = file.getOriginalFilename();
        String filename = originalFilename.substring(originalFilename.lastIndexOf("."));
        String profilePhoto = userId + filename;
        
        System.out.println("저장될 파일 명 :: "+profilePhoto);
        
        //파일정보를 유저 DB에 저장
        User user = new User();
        user.setUserId(userId);
        user.setProfilePhoto(profilePhoto);

        userService.updateUser(user);
        userService.fileUpload(file, profilePhoto);

        Data data = new Data("success", "fileUpload 성공");
        return data;

    }

    @GetMapping(value="searchUser/{searchKeyword}")
    public Data getSearchUser(@PathVariable String searchKeyword) {
        Map<String, Object> map = userService.getSearchUser(searchKeyword);

        Data data = new Data("success", map.get("list"));
        return data;
    }


}
