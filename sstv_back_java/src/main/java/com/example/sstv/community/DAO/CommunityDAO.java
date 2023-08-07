package com.example.sstv.community.DAO;

import com.example.sstv.common.Search;
import com.example.sstv.community.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;
import java.util.concurrent.CountDownLatch;

@Mapper
public interface CommunityDAO {
    Community getWriting(int writingNo);

    void addWriting(Community community);

    void deleteWriting(int writingNo);

    void updateWriting(Community community);

    void addComments(Comments comments);
    void addVod(Vod vod);

    List<Comments> getCommentsList(int writingNo);
    List<VodComments> getVodCommentsList(int vodNo);

    void deleteComments(int commentsNo);

    List<Community> getWritingList(String hostUserId);

    int getWritingCount(String hostUserId);

    List<Search> getSearchWriting(String searchKeyword);

    void addView(int writingNo);

    void addNotice(int writingNo);

    Community getNotice(String hostUserId);

    Streaming finishStreaming(int StreamingNo);

    List<Vod> getVodList(String hostUserId);

    List<Vod> getAllVodList();

    Vod getVod(int vodNo);

    void addVodView(int vodNo);
    void addVodComments(VodComments vodcomments);

    int getVodCommentCount(int vodNo);
}
