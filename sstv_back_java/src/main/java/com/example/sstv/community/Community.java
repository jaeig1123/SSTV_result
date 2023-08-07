package com.example.sstv.community;

import java.util.Date;
import java.util.List;

public class Community {
    private Date notice;
    private int view;

    private String hostNickName;
    private String guestNickName;

    @Override
    public String toString() {
        return "Community{" +
                "notice=" + notice +
                ", view=" + view +
                ", hostNickName='" + hostNickName + '\'' +
                ", guestNickName='" + guestNickName + '\'' +
                ", up=" + up +
                ", writingNo=" + writingNo +
                ", commentCount=" + commentCount +
                ", hostUserId='" + hostUserId + '\'' +
                ", comment=" + comment +
                ", comments=" + comments +
                ", guestUserId='" + guestUserId + '\'' +
                ", title='" + title + '\'' +
                ", regDate=" + regDate +
                ", content='" + content + '\'' +
                '}';
    }

    public String getHostNickName() {
        return hostNickName;
    }

    public void setHostNickName(String hostNickName) {
        this.hostNickName = hostNickName;
    }

    public String getGuestNickName() {
        return guestNickName;
    }

    public void setGuestNickName(String guestNickName) {
        this.guestNickName = guestNickName;
    }

    public Date getNotice() {
        return notice;
    }

    public void setNotice(Date notice) {
        this.notice = notice;
    }

    public int getView() {
        return view;
    }

    public void setView(int view) {
        this.view = view;
    }

    public int getUp() {
        return up;
    }

    public void setUp(int up) {
        this.up = up;
    }

    private int up;
    private int writingNo;

    public int getCommentCount() {
        return commentCount;
    }

    public void setCommentCount(int commentCount) {
        this.commentCount = commentCount;
    }

    private int commentCount;
    public int getWritingNo() {
        return writingNo;
    }

    public void setWritingNo(int writingNo) {
        this.writingNo = writingNo;
    }

    private String hostUserId;


    public int getComment() {
        return comment;
    }

    public void setComment(int comment) {
        this.comment = comment;
    }

    private int comment;
    public List<Comments> getComments() {
        return comments;
    }

    public void setComments(List<Comments> comments) {
        this.comments = comments;
    }

    private List<Comments> comments;

    public String getHostUserId() {
        return hostUserId;
    }

    public void setHostUserId(String hostUserId) {
        this.hostUserId = hostUserId;
    }

    private String guestUserId;

    public String getGuestUserId() {
        return guestUserId;
    }

    public void setGuestUserId(String guestUserId) {
        this.guestUserId = guestUserId;
    }

    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    private Date regDate;

    public Date getRegDate() {
        return regDate;
    }

    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

    private String content;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }


}
