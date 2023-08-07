package com.example.sstv.deal.Service;

import com.example.sstv.deal.DAO.PurchaseDAO;
import com.example.sstv.deal.Purchase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseService {
    private PurchaseDAO purchaseDAO;

    @Autowired
    public PurchaseService(PurchaseDAO purchaseDAO) {
        this.purchaseDAO = purchaseDAO;
    }

    public List<Purchase> getPurchaseList(String userId) {
        return purchaseDAO.getPurchaseList(userId);
    }

    public void addPurchase(Purchase purchase) {
        purchaseDAO.addPurchase(purchase);
    }

}
