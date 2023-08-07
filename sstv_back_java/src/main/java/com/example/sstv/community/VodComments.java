package com.example.sstv.community;

import java.util.Date;
public class VodComments {
    private int vodCommentsNo;
    private String commentsUserId;
    private int vodNo;

    public int getCommentCount() {
        return commentCount;
    }

    public void setCommentCount(int commentCount) {
        this.commentCount = commentCount;
    }

    private int commentCount;

    @Override
    public String toString() {
        return "VodComments{" +
                "vodCommentsNo=" + vodCommentsNo +
                ", commentsUserId='" + commentsUserId + '\'' +
                ", vodNo=" + vodNo +
                ", commentCount=" + commentCount +
                ", commentContent='" + commentContent + '\'' +
                ", regDate=" + regDate +
                '}';
    }

    private String commentContent;
    private Date regDate;

    public int getVodCommentsNo() {
        return vodCommentsNo;
    }

    public void setVodCommentsNo(int vodCommentsNo) {
        this.vodCommentsNo = vodCommentsNo;
    }

    public String getCommentsUserId() {
        return commentsUserId;
    }

    public void setCommentsUserId(String commentUserId) {
        this.commentsUserId = commentUserId;
    }

    public int getVodNo() {
        return vodNo;
    }

    public void setVodNo(int vodNo) {
        this.vodNo = vodNo;
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    public Date getRegDate() {
        return regDate;
    }

    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }
}
