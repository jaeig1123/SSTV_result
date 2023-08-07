package com.example.sstv.user.DAO;

import com.example.sstv.user.CoinHistroy;
import com.example.sstv.user.User;
import com.example.sstv.common.Search;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


/*
* Mapper의 id와 interface의 method명은 동일해야 @Mapper를 통해 Mapper.xml의 정보를 가져 올 수 있다.
* */
@Mapper
public interface UserDAO {

    void addUser(User user);
    void addSNSUser(User user);
    User getUser(String userId);
    User getUserNickname(String userNickname);
    User findId(String phone);
    void findPasswd(User user);
    List<User> searchUser(String keyword);
    void removeUserStart(String userId);
    void removeUserCancle(String userId);
    void updateUser(User user);
    void addCoinHistory(CoinHistroy coinHistroy);
    List<CoinHistroy> getCoinHistory(String userId);

    List<Search> getSearchUser(String searchKeyword);

}
