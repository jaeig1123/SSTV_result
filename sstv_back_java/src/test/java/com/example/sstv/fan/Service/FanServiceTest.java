//package com.example.sstv.fan.Service;
//
//import com.example.sstv.fan.DAO.FanDAO;
//import com.example.sstv.fan.Fan;
//import org.junit.jupiter.api.Test;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.*;
//
//class FanServiceTest {
//
//    @Test
//    void getFollowList() {
//        FanDAO fanDAO = new FanDAO() {
//            @Override
//            public void addFollow(Fan fan) {
//
//            }
//
//            @Override
//            public void addBlacklist(Fan fan) {
//
//            }
//
//            @Override
//            public List<Fan> getFollow(String userId) {
//                return null;
//            }
//
//            @Override
//            public List<Fan> getFollowing(String followUser) {
//                return null;
//            }
//
//            @Override
//            public List<Fan> getBlackList(String userId) {
//                return null;
//            }
//
//            @Override
//            public void removeFollow(Fan fan) {
//
//            }
//
//            @Override
//            public void removeBlacklist(Fan fan) {
//
//            }
//        };
//        Fan fan = new Fan();
//
//        fan.setUserId("user1");
//        List<Fan> fanList = fanDAO.getFollow(fan.getUserId());
//        List<String> getFollowList = new ArrayList<>();
//        for (Fan fanFollow : fanList) {
//            if (fanFollow != null && fanFollow.getUserId() != null) {
//                getFollowList.add(fanFollow.getUserId());
//            }
//        }
//    }
//
//    @Test
//    void getFollowingList() {
//    }
//
//    @Test
//    void removeFollow() {
//    }
//
//    @Test
//    void removeBlacklist() {
//    }
//}