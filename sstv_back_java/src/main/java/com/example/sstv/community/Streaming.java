package com.example.sstv.community;

import java.util.Date;

public class Streaming {
    private int streamingNo;
    private String userId;
    private int streamingCategory;
    private String streamingTitle;
    private String recordUrl;
    private Date streamingStartTime;
    private Date streamingEndTime;

    @Override
    public String toString() {
        return "Streaming{" +
                "streamingNo=" + streamingNo +
                ", userId='" + userId + '\'' +
                ", streamingCategory=" + streamingCategory +
                ", streamingTitle='" + streamingTitle + '\'' +
                ", recordUrl='" + recordUrl + '\'' +
                ", streamingStartTime=" + streamingStartTime +
                ", streamingEndTime=" + streamingEndTime +
                '}';
    }

    public int getStreamingNo() {
        return streamingNo;
    }

    public void setStreamingNo(int streamingNo) {
        this.streamingNo = streamingNo;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getStreamingCategory() {
        return streamingCategory;
    }

    public void setStreamingCategory(int streamingCategory) {
        this.streamingCategory = streamingCategory;
    }

    public String getStreamingTitle() {
        return streamingTitle;
    }

    public void setStreamingTitle(String streamingTitle) {
        this.streamingTitle = streamingTitle;
    }

    public String getRecordUrl() {
        return recordUrl;
    }

    public void setRecordUrl(String recordUrl) {
        this.recordUrl = recordUrl;
    }

    public Date getStreamingStartTime() {
        return streamingStartTime;
    }

    public void setStreamingStartTime(Date streamingStartTime) {
        this.streamingStartTime = streamingStartTime;
    }

    public Date getStreamingEndTime() {
        return streamingEndTime;
    }

    public void setStreamingEndTime(Date streamingEndTime) {
        this.streamingEndTime = streamingEndTime;
    }
}
