package com.example.sstv.community.service;

import com.example.sstv.common.Search;
import com.example.sstv.community.*;
import com.example.sstv.community.DAO.CommunityDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CommunityService {
    private final CommunityDAO communityDao;

    @Autowired
    public CommunityService(CommunityDAO communityDao) {
        this.communityDao = communityDao;
    }

    public Community getWriting(int writingNo) {
        return communityDao.getWriting(writingNo);
    }

    public void addWriting(Community community) {
         communityDao.addWriting(community);
    }

    public void deleteWriting(int writingNo) {
        communityDao.deleteWriting(writingNo);
    }

    public void updateWriting(Community community){
         communityDao.updateWriting(community);
    }

    public void addComments(Comments comments){
        communityDao.addComments(comments);
    }
    public void addVod(Vod vod){
        communityDao.addVod(vod);
    }

    public Map<String, Object> getCommentsList(int writingNo){
        List<Comments> list = (List<Comments>) communityDao.getCommentsList(writingNo);
        Map<String, Object> map = new HashMap<String, Object>();

        map.put("list", list);
        return map;
    }

    public Map<String, Object> getVodCommentsList(int vodNo){
        List<VodComments> list = (List<VodComments>) communityDao.getVodCommentsList(vodNo);
        int count = communityDao.getVodCommentCount(vodNo);
        Map<String, Object> map = new HashMap<String, Object>();

        map.put("list", list);
        map.put("count", count);
        return map;
    }


    public void deleteComments(int writingNo){
        communityDao.deleteComments(writingNo);
    }

    public Map<String, Object> getWritingList(String hostUserId) {
        List<Community> list = (List<Community>) communityDao.getWritingList(hostUserId);

        Map<String, Object> map = new HashMap<String,Object>();

        map.put("list", list);

        return map;
    }

    public int getWritingCount(String hostUserId) {
        int count = communityDao.getWritingCount(hostUserId);
        return count;
    }

    public Map<String, Object> getSearchWriting(String searchKeyword) {
        List<Search> list = (List<Search>) communityDao.getSearchWriting((searchKeyword));
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("list", list);

        return map;
    }
    public Map<String, Object> getVodList(String hostUserId){
        List<Vod> list = (List<Vod>) communityDao.getVodList(hostUserId);

        Map<String, Object> map = new HashMap<String,Object>();

        map.put("list", list);

        return map;
    }

    public Map<String, Object> getAllVodList(){
        List<Vod> list = (List<Vod>) communityDao.getAllVodList();

        Map<String, Object> map = new HashMap<String,Object>();

        map.put("list", list);

        return map;
    }

    public Vod getVod(int VodNo){
        Vod vod = communityDao.getVod(VodNo);
        return vod;
    }
    public void addView(int writingNo){
        communityDao.addView(writingNo);
    }
    public void addVodView(int vodNo){
        communityDao.addVodView(vodNo);
    }

    public void addNotice(int writingNo){
        communityDao.addNotice((writingNo));
    }

    public Community getNotice(String hostUserId){
        return communityDao.getNotice(hostUserId);
    }

    public Streaming finishStreaming(int streamingNo){
        return communityDao.finishStreaming(streamingNo);
    }

    public void addVodComments(VodComments vodComments){
        communityDao.addVodComments(vodComments);
    }
}
