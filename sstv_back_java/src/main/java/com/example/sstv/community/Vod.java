package com.example.sstv.community;

import java.util.Date;

public class Vod {
    private int vodNo;
    private String hostUserId;
    private String guestUserId;
    private Date regDate;
    private String title;
    private String content;
    private int view;
    private String fileName;
    private int category;
    private int commentCount;

    public String getHostNickName() {
        return hostNickName;
    }

    public void setHostNickName(String hostNickName) {
        this.hostNickName = hostNickName;
    }

    @Override
    public String toString() {
        return "Vod{" +
                "vodNo=" + vodNo +
                ", hostUserId='" + hostUserId + '\'' +
                ", guestUserId='" + guestUserId + '\'' +
                ", regDate=" + regDate +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", view=" + view +
                ", fileName='" + fileName + '\'' +
                ", category=" + category +
                ", commentCount=" + commentCount +
                ", hostNickName='" + hostNickName + '\'' +
                '}';
    }

    private String hostNickName;

    public int getCommentCount() {
        return commentCount;
    }

    public void setCommentCount(int commentCount) {
        this.commentCount = commentCount;
    }



    public int getVodNo() {
        return vodNo;
    }

    public void setVodNo(int vodNo) {
        this.vodNo = vodNo;
    }

    public String getHostUserId() {
        return hostUserId;
    }

    public void setHostUserId(String hostUserId) {
        this.hostUserId = hostUserId;
    }

    public String getGuestUserId() {
        return guestUserId;
    }

    public void setGuestUserId(String guestUserId) {
        this.guestUserId = guestUserId;
    }

    public Date getRegDate() {
        return regDate;
    }

    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getView() {
        return view;
    }

    public void setView(int view) {
        this.view = view;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public int getCategory() {
        return category;
    }

    public void setCategory(int category) {
        this.category = category;
    }

}
