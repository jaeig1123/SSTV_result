package com.example.sstv.fan.Service;


import com.example.sstv.fan.DAO.FanDAO;
import com.example.sstv.fan.Fan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FanService {
    private FanDAO fanDAO;

    @Autowired
    public FanService(FanDAO fanDAO) {
        this.fanDAO = fanDAO;
    }
    public void addFollow(Fan fan){
        fanDAO.addFollow(fan);
    }
    public void addBlacklist(Fan fan){
        fanDAO.addBlacklist(fan);
    }
    //내가 팔로우한 회원 조회
    public List<String> getFollowList(String userId) {
        List<Fan> fanList = fanDAO.getFollow(userId);
        List<String> getFollowList = new ArrayList<>();
        for (Fan fan : fanList) {
            if (fan != null && fan.getFollowUser() != null) {
                getFollowList.add(fan.getFollowUser());
            }
        }
        System.out.println("return 값은..? :: "+getFollowList);
        return getFollowList;
    }
    //나를 팔로우한 회원 조회
    public List<String> getFollowingList(String followUser) {
        List<Fan> fanList = fanDAO.getFollowing(followUser);
        System.out.println("fanList 값 check"+fanList);
        List<String> getFollowingList = new ArrayList<>();
        for (Fan fan : fanList) {
            if (fan != null && fan.getUserId() != null) {
                getFollowingList.add(fan.getUserId());
            }
        }
        System.out.println("return 값은..? :: "+getFollowingList);
        return getFollowingList;
    }
    // 블랙리스트 조회
    public List<String> getBlackList(String userId) {
            List<Fan> fanList = fanDAO.getBlackList(userId);
            System.out.println("fanList 값 check"+fanList);
            List<String> getBlackList = new ArrayList<>();
            for (Fan fan : fanList) {
                if (fan != null && fan.getBlackUser() != null) {
                    getBlackList.add(fan.getBlackUser());
                }
            }
            System.out.println("return 값은..? :: "+getBlackList);
            return getBlackList;
    }
    public List<String> getBlackListOwner(String blackUser) {
        List<Fan> fanList = fanDAO.getBlackListOwner(blackUser);
        List<String> getBlackListOwner = new ArrayList<>();
        for (Fan fan : fanList) {
            if (fan != null && fan.getUserId() != null) {
                getBlackListOwner.add(fan.getUserId());
            }
        }
        System.out.println("return 값은..? :: "+getBlackListOwner);
        return getBlackListOwner;
    }
    public void removeFollow(Fan fan){
        fanDAO.removeFollow(fan);
    }
    public void removeFollower(Fan fan) { fanDAO.removeFollower(fan);}
    public void removeBlacklist(Fan fan){
        fanDAO.removeBlacklist(fan);
    }


}