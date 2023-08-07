package com.example.sstv.deal.restController;

import com.example.sstv.common.Data;
import com.example.sstv.deal.Purchase;
import com.example.sstv.deal.Service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/purchase/*")
public class PurchaseRestController {
    private PurchaseService purchaseService;

    @Autowired
    public PurchaseRestController(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }

    @RequestMapping(value="getPurchaseList/{userId}")
    public Data getPurchaseList(@PathVariable String userId) {
        // 결제 내역 리스트를 화면에 보여주는 용도 (결제넘버, 결제날짜,유저아이디, 결제금액, 결제수단, 코인)  
 
        List<Purchase> purchaseList = purchaseService.getPurchaseList(userId);
        System.out.println("결제리스트");
        Data data = new Data("success", purchaseList);
        return data;
    }

    @PostMapping("addPurchase")
    public Data addPurchase(@RequestBody Purchase purchase) {


        System.out.println("addPurchase result: "+purchase);
        //결제 데이터 ( 유저아이디,  결제금액, merchant_uid  결제수단)
        // 결제한 내역 보여주는 용도 , 결제하는 행위를 하는 용도
        purchaseService.addPurchase(purchase);

//        List<Purchase> purchaseList = purchaseService.getPurchaseList(userId);

        Data data = new Data("success", "결재완료");
        return data;
    }
    @RequestMapping("savePaymentHistory")
    public Data savePaymentHistory(@RequestBody Purchase purchase) {
        purchaseService.addPurchase(purchase);
        Data data = new Data("success", "Payment history saved");
        return data;
    }


}
