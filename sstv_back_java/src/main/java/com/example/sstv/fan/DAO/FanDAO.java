package com.example.sstv.fan.DAO;

import com.example.sstv.fan.Fan;
import com.example.sstv.user.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


/*
* Mapper의 id와 interface의 method명은 동일해야 @Mapper를 통해 Mapper.xml의 정보를 가져 올 수 있다.
* */
@Mapper
public interface FanDAO {

    void addFollow(Fan fan);
    void addBlacklist(Fan fan);
    List<Fan> getFollow(String userId);
    List<Fan> getFollowing(String followUser);
    List<Fan> getBlackList(String userId);
    List<Fan> getBlackListOwner(String blackUser);
    void removeFollow(Fan fan);
    void removeFollower(Fan fan);
    void removeBlacklist(Fan fan);

}
