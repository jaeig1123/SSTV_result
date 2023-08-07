package com.example.sstv.fan.restController;

import com.example.sstv.common.Data;
import com.example.sstv.common.Search;
import com.example.sstv.fan.Fan;
import com.example.sstv.user.Service.UserService;
import com.example.sstv.fan.Service.FanService;
import com.example.sstv.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/fan/*")
public class fanRestController {
    @Autowired
    private FanService fanService;
    @Autowired
    private UserService userService;

    @Autowired
    public fanRestController(FanService fanService, UserService userService) {
        this.fanService = fanService;
        this.userService = userService;
    }

    @PostMapping(value="addFollow")
    public Data addFollow(@RequestBody Fan fan){
        System.out.println("팔로우 추가 요청 :: "+fan.getFollowUser());
        String result = "";
        //중복된 회원 등록 불가.. 중복회원 없을 경우 등록
        if(fanService.getFollowList(fan.getUserId()).contains(fan.getFollowUser())){
            result = "fail";
            System.out.println("등록 실패");
        }else{
            fanService.addFollow(fan);
            result = "success";
            System.out.println("등록 성공");
        }
        Data data = new Data(result, "");
        return data;
    }

    @PostMapping(value="addBlacklist")
    public Data addBlacklist(@RequestBody Fan fan){
        System.out.println("블랙리스트 등록 요청"+fan.getBlackUser());
        String result = "";
        //중복된 회원 등록 불가.. 중복회원 없을 경우 등록
        if(fanService.getBlackList(fan.getUserId()).contains(fan.getBlackUser())){
            result = "fail";
            System.out.println("등록 실패");
        }else{
            fanService.addBlacklist(fan);
            result = "success";
            System.out.println("등록 성공");
        }
        Data data = new Data(result, "");
        return data;
    }

    @GetMapping(value="getFollow/{userId}")
    public Data getFollow(@PathVariable String userId){
        System.out.println("getFollow의 userId :: "+userId);
        //follow 유저의 id List
        List<String> followList = fanService.getFollowList(userId);
        List<User> followUserList = new ArrayList<>();
        System.out.println("팔로우 회원 아이디:: "+followList);
        //내가 좋아하는 유저들의 정보
        for (int i = 0; i< followList.size(); i++){
            if( followList != null){
                String id = followList.get(i);
                followUserList.add(userService.getUser(id));
            }
        }
        System.out.println();
        Data data = new Data("success", followUserList);
        return data;
    }
    @GetMapping(value="getFollowing/{followUser}")
    public Data getFollowing(@PathVariable String followUser){
        System.out.println("follwing User GET :: ");
        List<String> followingList = fanService.getFollowingList(followUser);
        List<User> followingUserList = new ArrayList<>();
        System.out.println("나를 좋아하는 회원들은 누구지? 출력해보자!"+followingList);
        //나를 좋아요 누른 유저들 정보
        for (int i = 0; i< followingList.size(); i++){
            if( followingList != null){
                String follower = followingList.get(i);
                followingUserList.add(userService.getUser(follower));
            }
        }

        Data data = new Data("success", followingUserList);
        return data;
    }
    
    // 블랙리스트 목록 조회
    @GetMapping(value="getBlackList/{userId}")
    public Data getBlackList(@PathVariable String userId){
        System.out.println("blacklist 컨트롤러 :: ");
        List<String> blackIdList = fanService.getBlackList(userId);
        List<User> blackUserList = new ArrayList<>();
        System.out.println("블랙리스트의 정보를 출력해보자!"+blackIdList);
        //list에 담긴 id로 회원 정보를 조회
        for (int i = 0; i< blackIdList.size(); i++){
            if( blackIdList != null){
                String blackUser = blackIdList.get(i);
                blackUserList.add(userService.getUser(blackUser));
            }
        }

        Data data = new Data("success", blackUserList);
        return data;
    }
    
    //블랙리스트 보유자 조회
    @GetMapping(value="getBlackListOwner/{blackUser}")
    public Data getBlackListOwner(@PathVariable String blackUser){
        fanService.getBlackListOwner(blackUser);
        System.out.println(fanService.getBlackListOwner(blackUser));
        Data data = new Data("success",fanService.getBlackListOwner(blackUser));
        return data;
    }

    @PostMapping(value="removeFollow")
    public Data removeFollow(@RequestBody Fan fan){
        System.out.println("userId :: "+fan.getUserId()+" FollowUser :: "+fan.getFollowUser());
        fanService.removeFollow(fan);
        Data data = new Data("success", "follow 취소 완료");
        return data;
    }

    @PostMapping(value="removeFollower")
    public Data removeFollower(@RequestBody Fan fan){
        System.out.println("userId :: "+fan.getUserId()+" FollowUser :: "+fan.getFollowUser());
        fanService.removeFollower(fan);
        Data data = new Data("success", "follower 취소");
        return data;
    }

    @PostMapping(value="removeBlacklist")
    public Data removeBlacklist(@RequestBody Fan fan){
        System.out.println("userId :: "+fan.getUserId()+" balckUser :: "+fan.getBlackUser());
        fanService.removeBlacklist(fan);
        Data data = new Data("success", "blacklist 해제 완료.");
        return data;
    }

    @GetMapping(value="searchUser/{keyword}")
    public Data searchUser(@PathVariable String keyword){
        Data data = new Data("success", userService.searchUser(keyword));
        return data;
    }

}
