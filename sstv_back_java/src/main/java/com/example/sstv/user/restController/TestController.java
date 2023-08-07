//package com.example.sstv.user.restController;
//
//import com.example.sstv.common.Data;
//import com.example.sstv.user.User;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class TestController {
//
//    @GetMapping("/")
//    public Data test() {
//        User user = new User();
//        user.setUserId("userId");
//        user.setPassword("pwd");
//
//        Data data = new Data("success", user);
//
//        return data;
//    }
//}