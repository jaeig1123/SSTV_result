package com.example.sstv.fan;


import com.example.sstv.user.User;

public class Fan {
    private int fanNo;
    private String userId;
    private String followUser;
    private String blackUser;

    @Override
    public String toString() {
        return "Fan{" +
                "fanNo=" + fanNo +
                ", userId='" + userId + '\'' +
                ", followUser='" + followUser + '\'' +
                ", blackUser='" + blackUser + '\'' +
                '}';
    }

    public int getFanNo() {
        return fanNo;
    }

    public void setFanNo(int fanNo) {
        this.fanNo = fanNo;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getFollowUser() {
        return followUser;
    }

    public void setFollowUser(String followUser) {
        this.followUser = followUser;
    }

    public String getBlackUser() {
        return blackUser;
    }

    public void setBlackUser(String blackUser) {
        this.blackUser = blackUser;
    }
}