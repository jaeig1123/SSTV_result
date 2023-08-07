package com.example.sstv.common;

import com.example.sstv.user.User;
import jakarta.servlet.http.Cookie;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;


/**
 * 1. spring에서 로그인시 해당 user의 정보를 node로 보냄
 * 2. 노드에서 user의 sessionID를 보냄
 * 3. spring에서는 이 sessionID를 받아서 user의 브라우저에 심어준다.
 */
public class NodeCookie {

    public Cookie getNodeCookie(User user) {
        String url = "http://localhost:3000/addCookie";


        RestTemplate restTemplate = new RestTemplate();

        //set Header
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Data data = new Data("success", user);

        HttpEntity<Data> httpEntity = new HttpEntity<>(data, headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, httpEntity, String.class);

        String NSESSIONID = response.getBody();

        Cookie cookie = createCookie(NSESSIONID);

        return cookie;
    }

    /*
    * 1. spring에서 로그아웃시 node에 로그아웃하는 유저의 cookie이름을 보냄
    * 2. node에서는 해당 cookie의 정보를 redis에서 삭제
    * 3. spring에서도 유저의 cookie를 삭제
    * */
    public void removeNodeCookie(String cookieName) {
        String url = "http://localhost:3000/removeCookie";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Data data = new Data("success", cookieName);
        HttpEntity<Data> httpEntity = new HttpEntity<>(data, headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, httpEntity, String.class);

        System.out.println("[NodeCookie] removeNodeCookie response.getBody = " + response.getBody());
    }

    /*
    * 구현중
    * */
    public Cookie removeSpringCookie(String cookieName) {
        Cookie cookieToRemove = new Cookie(cookieName, null);
        cookieToRemove.setMaxAge(0);
        cookieToRemove.setPath("/");

        return cookieToRemove;
    }

    public Cookie createCookie(String NSESSIONID) {
        Cookie cookie = new Cookie("NSESSIONID", NSESSIONID);

        cookie.setMaxAge(3600);
        cookie.setPath("/");

        return cookie;
    }
}
