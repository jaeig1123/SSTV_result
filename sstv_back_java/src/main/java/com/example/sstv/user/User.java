package com.example.sstv.user;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

public class User {
    private String userId;
    private String password;
    private String profilePhoto;
    private String userNickname;
    private String userName;
    private String dateBirth;
    private String eMail;
    private String phone;
    private Timestamp signDate;
    private int withdrawal;
    private Timestamp withdrawalDate;
    private String roll;
    private int coin;
    private int accumulatedViewers;
    private int totalStreamingAccumulatedTime;
    private int stRoll;
    private int userType;

    @Override
    public String toString() {
        return "User{" +
                "userId='" + userId + '\'' +
                ", password='" + password + '\'' +
                ", profilePhoto='" + profilePhoto + '\'' +
                ", userNickname='" + userNickname + '\'' +
                ", userName='" + userName + '\'' +
                ", dateBirth='" + dateBirth + '\'' +
                ", eMail='" + eMail + '\'' +
                ", phone='" + phone + '\'' +
                ", signDate=" + signDate +
                ", withdrawal=" + withdrawal +
                ", withdrawalDate=" + withdrawalDate +
                ", roll='" + roll + '\'' +
                ", coin=" + coin +
                ", accumulatedViewers=" + accumulatedViewers +
                ", totalStreamingAccumulatedTime=" + totalStreamingAccumulatedTime +
                ", stRoll=" + stRoll +
                ", userType=" + userType +
                ", blackList=" + blackList +
                ", followList=" + followList +
                ", followCount=" + followCount +
                '}';
    }

    private List<String> blackList;

    public List<String> getFollowList() {
        return followList;
    }

    public void setFollowList(List<String> followList) {
        this.followList = followList;
    }

    private List<String> followList;

    public int getFollowCount() {
        return followCount;
    }

    public void setFollowCount(int followCount) {
        this.followCount = followCount;
    }

    private int followCount;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(String profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    public String getUserNickname() {
        return userNickname;
    }

    public void setUserNickname(String userNickname) {
        this.userNickname = userNickname;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getDateBirth() {
        return dateBirth;
    }

    public void setDateBirth(String dateBirth) {
        this.dateBirth = dateBirth;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Timestamp getSignDate() {
        return signDate;
    }

    public void setSignDate(Timestamp signDate) {
        this.signDate = signDate;
    }

    public int getWithdrawal() {
        return withdrawal;
    }

    public void setWithdrawal(int withdrawal) {
        this.withdrawal = withdrawal;
    }

    public Timestamp getWithdrawalDate() {
        return withdrawalDate;
    }

    public void setWithdrawalDate(Timestamp withdrawalDate) {
        this.withdrawalDate = withdrawalDate;
    }

    public String getRoll() {
        return roll;
    }

    public void setRoll(String roll) {
        this.roll = roll;
    }

    public int getCoin() {
        return coin;
    }

    public void setCoin(int coin) {
        this.coin = coin;
    }

    public int getAccumulatedViewers() {
        return accumulatedViewers;
    }

    public void setAccumulatedViewers(int accumulatedViewers) {
        this.accumulatedViewers = accumulatedViewers;
    }

    public int getTotalStreamingAccumulatedTime() {
        return totalStreamingAccumulatedTime;
    }

    public void setTotalStreamingAccumulatedTime(int totalStreamingAccumulatedTime) {
        this.totalStreamingAccumulatedTime = totalStreamingAccumulatedTime;
    }

    public int getStRoll() {
        return stRoll;
    }

    public void setStRoll(int stRoll) {
        this.stRoll = stRoll;
    }

    public int getUserType() {
        return userType;
    }

    public void setUserType(int userType) {
        this.userType = userType;
    }

    public List<String> getBlackList() {
        return blackList;
    }

    public void setBlackList(List<String> blackList) {
        this.blackList = blackList;
    }
}