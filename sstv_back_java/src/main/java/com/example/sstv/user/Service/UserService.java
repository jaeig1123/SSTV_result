package com.example.sstv.user.Service;

import com.amazonaws.SdkClientException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.example.sstv.common.Search;
import com.example.sstv.user.CoinHistroy;
import com.example.sstv.user.DAO.UserDAO;
import com.example.sstv.user.User;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.MulticastSocket;
import java.net.URL;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class UserService {
    private UserDAO userDAO;
    @Value("${redirectUrl}")
    private String redirectUrl;

    @Autowired
    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }
    public void addUser(User user){
        userDAO.addUser(user);
    }
    public User getUser(String userId) {
        return userDAO.getUser(userId);
    }
    public User getUserNickname(String userId) { return userDAO.getUserNickname(userId);}
    public User findId(String phone) {
        return userDAO.findId(phone);
    }
    public void findPasswd(User user) {
        userDAO.findPasswd(user);
    }
    public List<User> searchUser(String keyword) { return userDAO.searchUser(keyword); }
    public void removeUserStart(String userId) {
        userDAO.removeUserStart(userId);
    }
    public void removeUserCancle(String userId) {
        userDAO.removeUserCancle(userId);
    }
    public void updateUser(User user) {
        userDAO.updateUser(user);
    }

    public Map<String, Object> getSearchUser(String searchKeyword) {
        List<Search> list = userDAO.getSearchUser(searchKeyword);
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("list", list);
        return map;
    }
    public boolean checkUserId(String userId) {
        boolean result=true;
        User user=userDAO.getUser(userId);
        if(user != null) {
            result=false; //--> 사용할 수 있을 경우 true
        }
        return result;
    }
    public boolean checkUserNickname(String userNickname) {
        boolean result=true;
        System.out.println("닉네임 중복체크 service :: "+userNickname);
        User user=userDAO.getUserNickname(userNickname);
        if(user != null) {
            result=false; //--> 사용할 수 있을 경우 true
        }
        return result;
    }


        public String getkakaoToken(String authorize_code) throws IOException {
            System.out.println("토큰 주세요..");
            String access_token = "";
            String refresh_token = "";
            String url = "https://kauth.kakao.com/oauth/token";

            URL apiurl;
            apiurl = new URL(url);

            // HTTP 연결 생성
            HttpURLConnection conn = (HttpURLConnection) apiurl.openConnection();

            // HTTP 요청 메소드 설정
            conn.setRequestMethod("POST");
            conn.setDoOutput(true);

            // HTTP 요청에 필요한 파라미터 설정
            String postParams = "grant_type=authorization_code" +
                    "&client_id=" + "73b235263e9c55fb4e85a97648c1c0de" +
                    "&redirect_uri=" + "http://223.130.135.131:8080/user/kakaoLogin" +
//                    "&redirect_uri=" + "http://192.168.0.21:8080/user/kakaoLogin" +
                    "&code=" + authorize_code;
            conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

            System.out.println("전달 파라미터 확인.. :: "+postParams);
            // HTTP 요청 본문에 파라미터 추가
            conn.setDoOutput(true);
            DataOutputStream wr = new DataOutputStream(conn.getOutputStream());
            wr.writeBytes(postParams);
            wr.flush();

            int responseCode = conn.getResponseCode();
            System.out.println("responseCode :: "+responseCode);

            if(responseCode == 200){
                InputStream inputStream = conn.getInputStream();
                BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));

                String line;
                String response = "";
                while ((line = br.readLine()) != null) {
                    response+=(line);
                }
                br.close();
                System.out.println("responseBody 확인 :: "+response);
                ObjectMapper mapper = new ObjectMapper(); // jsonSimple 사용
                Map<String, Object> kakao_token = mapper.readValue(response, Map.class);
                System.out.println("kakao token 발급 : " + kakao_token);

                access_token = kakao_token.get("access_token").toString(); // access_token 추출
                refresh_token = kakao_token.get("refresh_token").toString(); // refresh_token 추출
            }


            System.out.println("access_token 발급 완료 :: "+access_token);
            System.out.println("refresh_token 발급 완료 :: "+refresh_token);
        return access_token;
    }

    public Map<String, Object> getKakaoInfo(String access_token) throws Exception {
        Map<String, Object> kakaoUserInfo = new HashMap<>();
        String url = "https://kapi.kakao.com/v2/user/me";

        URL apiurl;
        apiurl = new URL(url);

        HttpURLConnection con = (HttpURLConnection) apiurl.openConnection();
        con.setRequestMethod("GET");
        con.setDoOutput(true);
        con.setRequestProperty("Authorization", "Bearer " + access_token);
        con.setRequestProperty("Content-type","application/x-www-form-urlencoded;charset=utf-8");

        System.out.println(con);

        int responseCode = con.getResponseCode();
        System.out.println("responseCode :: "+responseCode);

        if(responseCode == 200) {
            InputStream inputStream = con.getInputStream();
            BufferedReader br = new BufferedReader(new InputStreamReader(inputStream));

            String line;
            String responseBody = "";
            while ((line = br.readLine()) != null) {
                responseBody += (line);
            }
            br.close();
            System.out.println("responseBody :: " + responseBody);
            ObjectMapper mapper = new ObjectMapper(); // jsonSimple 사용
            Map<String, Object> kakao_info = mapper.readValue(responseBody, Map.class);
            System.out.println("kakao_info : " + kakao_info);
            Map<Object, Object> properties = (Map<Object, Object>) kakao_info.get("properties");
            Map<Object, Object> kakao_account = (Map<Object, Object>) kakao_info.get("kakao_account");
            System.out.println("properties :: "+properties);
            String id = kakao_info.get("id").toString();
            String email = kakao_account.get("email").toString();
            String profilePhoto = properties.get("profile_image").toString();
            String name = properties.get("nickname").toString();

            System.out.println(id);
            System.out.println(email);
            System.out.println(profilePhoto);
            System.out.println(name);

            kakaoUserInfo.put("userId",id);
            kakaoUserInfo.put("email",email);
            kakaoUserInfo.put("profilePhoto",profilePhoto);
            kakaoUserInfo.put("name",name);

            if ( checkUserId(id) != false){
                User user = new User();
                user.setUserId(id);
                user.setPassword(id);
                user.seteMail(email);
                user.setUserName(name);
                user.setProfilePhoto(profilePhoto);

                userDAO.addSNSUser(user);

            }
            System.out.println("id :: "+id);
            System.out.println("email :: "+email);
            System.out.println("profilePhoto :: "+profilePhoto);
            System.out.println("name :: "+name);

        }

            return kakaoUserInfo;
    }

    public String getAccessToken(String authorize_code) throws IOException {
        System.out.println("토큰 주세요..");
        String access_Token = "";
        String refresh_Token = "";
        String url = "https://nid.naver.com/oauth2.0/token";

        URL apiurl;
        apiurl = new URL(url);

        // HTTP 연결 생성
        HttpURLConnection con = (HttpURLConnection) apiurl.openConnection();

        // HTTP 요청 메소드 설정
        con.setRequestMethod("POST");
        con.setDoOutput(true);

        // HTTP 요청에 필요한 파라미터 설정
        String postParams = "grant_type=authorization_code" +
                "&client_id=" + "oxyovmQ_xk_uAaUdHUKu" +
                "&redirect_uri=" + redirectUrl +
                "&code=" + authorize_code +
                "&client_secret=" + "uFi6q1_u5O";
        con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

        System.out.println("전달 파라미터 확인.. :: "+postParams);
        // HTTP 요청 본문에 파라미터 추가
        con.setDoOutput(true);
        DataOutputStream wr = new DataOutputStream(con.getOutputStream());
        wr.writeBytes(postParams);
        wr.flush();

        int responseCode = con.getResponseCode();
        System.out.println("200..!!! :: " + responseCode);

        BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String line = "";
        String result = "";

        while ((line = br.readLine()) != null) {
            result += line;
        }
        System.out.println("response body : " + result);


        ObjectMapper obj = new ObjectMapper(); // jsonSimple 사용
        Map<String, Object> naver_token = obj.readValue(result, Map.class);

        System.out.println("naver token 발급 : " + naver_token);

        access_Token = naver_token.get("access_token").toString(); // access_token 추출
        refresh_Token = naver_token.get("refresh_token").toString(); // refresh_token 추출

        System.out.println("접근 토큰 : " + access_Token);
        System.out.println("갱신 토큰 : " + refresh_Token);


        return access_Token;
    }

    public Map<String, Object> getUserInfo(String access_Token) throws Exception {

        System.out.println("네이버야.. 정보.. 줄 수 있겠니..?");
        Map<String, Object> userInfo = new HashMap<>();
        String openApi = "https://openapi.naver.com/v1/nid/me";

        try {
            URL url = new URL(openApi);

            HttpURLConnection connection = (HttpURLConnection)url.openConnection();
            connection.setUseCaches(false);
            connection.setDoInput(true);
            connection.setDoOutput(true);

            connection.setRequestProperty("Authorization", "Bearer " + access_Token);
            connection.setRequestMethod("POST");

            int resCode = connection.getResponseCode();
            System.out.println("정보 잘 가져오니..? 200...!" +resCode);

            BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line = "";
            String result ="";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println("response Body : "+result);

            ObjectMapper objectMapper = new ObjectMapper();
            Map<String, Object> naverInfo = objectMapper.readValue(result, Map.class);

            System.out.println("naverInfo..? : "+naverInfo);


            Map<String, Object> properties = (Map<String, Object>) naverInfo.get("response");

            String id = properties.get("id").toString().substring(0,10);
            String email = properties.get("email").toString();
            String name = properties.get("name").toString();
            String mobile = properties.get("mobile").toString().replace("-", "");
            String birthyear = properties.get("birthyear").toString();
            String birthday = properties.get("birthday").toString();//.replace("-", "");
            String birthDate = birthyear+"-"+ birthday;

            userInfo.put("mobile", mobile);
            userInfo.put("name", name);
            userInfo.put("email", email);
            userInfo.put("userId", id);
            userInfo.put("birthData", birthDate);

            //해당 아이디가 없을 경우
            if ( checkUserId(id) != false){
                User user = new User();
                user.setUserId(id);
                user.setPassword(id);
                user.seteMail(email);
                user.setUserName(name);
                user.setDateBirth(birthDate);

                userDAO.addSNSUser(user);

            }

        }catch (Exception e){
            System.out.println(e);
        }


        return userInfo;
    }

    public void sendSMS(String phone, String rand, HttpServletRequest request) throws InvalidKeyException, NoSuchAlgorithmException {
        // 호스트 URL
        String hostNameUrl = "https://sens.apigw.ntruss.com"; // 도메인
        String requestUrl = "/sms/v2/services/";
        String requestUrlType = "/messages";
        // 개인 인증키
        String accessKey = "FF3GMza4wmaiiJMosUyv";
        // 2차 인증을 위해 서비스마다 할당되는 service secret
        String secretKey = "5tFlkElASNwNO1SZF7V6eZYKScKo0jWLzTXt256A";
        // 프로젝트에 할당된 SMS 서비스 ID
        String serviceId = "ncp:sms:kr:304740763842:jaeik";
        // 요청 method
        String method = "POST";
        // current timestamp (epoch)
        String time= Long.toString(System.currentTimeMillis());
        requestUrl += serviceId + requestUrlType;
        String apiUrl = hostNameUrl + requestUrl;

        System.out.println("apiUrl : "+apiUrl);

        // JSON 을 활용한 body data 생성
        JsonObject bodyJson = new JsonObject();
        JsonObject toJson = new JsonObject();
        JsonArray toArr = new JsonArray();

        // 난수와 함께 전송
        toJson.addProperty("content","[SSTV] 인증번호["+rand+"]를 입력해주세요.");
        toJson.addProperty("to",phone);
        toArr.add(toJson);

        // 메시지 Type (sms | lms)
        bodyJson.addProperty("type","SMS");
        bodyJson.addProperty("contentType","COMM");
        bodyJson.addProperty("countryCode","82");
        bodyJson.addProperty("content","SMS");

        // 사전에 인증/등록한 번호
        bodyJson.addProperty("from","01021691011");
        bodyJson.add("messages", toArr);

        String body = bodyJson.toString();

        // 요청 body 확인
        System.out.println("요청 body : "+body);

        try {
            URL url = new URL(apiUrl);

            HttpURLConnection con = (HttpURLConnection)url.openConnection();
            con.setUseCaches(false);
            con.setDoInput(true);
            con.setDoOutput(true);

            con.setRequestProperty("Content-type", "application/json");
            con.setRequestProperty("x-ncp-apigw-timestamp", time);
            con.setRequestProperty("x-ncp-iam-access-key", accessKey);
            con.setRequestProperty("x-ncp-apigw-signature-v2", makeSignature(time, method, accessKey, secretKey));
            con.setRequestMethod(method);

            System.out.println("con : "+con);
            DataOutputStream wr = new DataOutputStream(con.getOutputStream());

            wr.write(body.getBytes());
            wr.flush();

            int responseCode = con.getResponseCode();
            BufferedReader br;
            System.out.println("responseCode" +" " + responseCode);
            if(responseCode==202) { // 정상 호출
                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            } else {  // 에러 발생
                br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
            }

            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = br.readLine()) != null) {
                response.append(inputLine);
            }
            wr.close();
            br.close();

            System.out.println("응답 확인 : "+response.toString());

        } catch (Exception e) {
            System.out.println(e);
        }

    }

    public String makeSignature(
            String time,
            String method,
            String accessKey,
            String secretKey
    ) throws NoSuchAlgorithmException, InvalidKeyException {

        String space = " ";
        String newLine = "\n";

        String message = new StringBuilder()
                .append(method)
                .append(space)
                .append("/sms/v2/services/ncp:sms:kr:304740763842:jaeik/messages")
                .append(newLine)
                .append(time)
                .append(newLine)
                .append(accessKey)
                .toString();

        SecretKeySpec signingKey;
        String encodeBase64String;
        try {
            signingKey = new SecretKeySpec(secretKey.getBytes("UTF-8"), "HmacSHA256");
            Mac mac = Mac.getInstance("HmacSHA256");
            mac.init(signingKey);
            byte[] rawHmac = mac.doFinal(message.getBytes("UTF-8"));
            encodeBase64String = Base64.getEncoder().encodeToString(rawHmac);
        } catch (UnsupportedEncodingException e) {
            encodeBase64String = e.toString();
        }
        System.out.println("시그니처 키 값 : "+encodeBase64String);

        return encodeBase64String;
    }

    public void addCoinHistory(CoinHistroy coinHistroy){
        userDAO.addCoinHistory(coinHistroy);
    }
    public List<CoinHistroy> getCoinHistory(String userId){
        System.out.println(userId);
        return userDAO.getCoinHistory(userId);
    }
    
    //objectStorage 파일 저장
    public void fileUpload(MultipartFile file, String profilePhoto) {
        final String endPoint = "https://kr.object.ncloudstorage.com";
        final String regionName = "kr-standard";
        final String accessKey = "z4Xcnb9Fi7MmuSeksVf4";
        final String secretKey = "nt9eOEVgBxjdmjqOgP9Xee44ADNmEDT171bekE2u";

        System.out.println("파일 업로드 시작 :: "+profilePhoto);

// S3 client
        final AmazonS3 s3 = AmazonS3ClientBuilder.standard()
                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endPoint, regionName))
                .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
                .build();

        String bucketName = "sstv-image";

// upload local file
        String filePath = "192.168.0.21:8080/user/uploadFile/"+profilePhoto;
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(file.getSize());

        try {
            s3.putObject(bucketName, profilePhoto, file.getInputStream(), metadata);
            s3.setObjectAcl(bucketName, profilePhoto, CannedAccessControlList.PublicRead);
            System.out.format("Object %s has been created.\n", profilePhoto);
        } catch (AmazonS3Exception e) {
            e.printStackTrace();
        } catch(SdkClientException | IOException e) {
            e.printStackTrace();
        }
        System.out.println("파일 업로드 완료.");
    }
}
