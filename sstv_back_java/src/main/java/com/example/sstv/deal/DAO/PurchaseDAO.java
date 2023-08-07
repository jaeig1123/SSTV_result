package com.example.sstv.deal.DAO;

import com.example.sstv.deal.Purchase;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PurchaseDAO {
    List<Purchase> getPurchaseList(String userId);
    void addPurchase(Purchase purchase);


}
