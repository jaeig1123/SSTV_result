package com.example.sstv.deal;

import java.time.LocalDateTime;
import java.util.Date;

public class Exchange {
    private LocalDateTime ExchangeDate;   //환전날짜
    private String ExchangeAccount;  //환전계좌
    private int ExchangeBank;    //환전은행
    private int ExchangeAmount;  // 환전금액
    private int ExchangeAcc; // 환전승인여부
    private  String userId;

    public LocalDateTime getExchangeDate() {
        return ExchangeDate;
    }

    public void setExchangeDate(LocalDateTime exchangeDate) {
        ExchangeDate = exchangeDate;
    }

    public String getExchangeAccount() {
        return ExchangeAccount;
    }

    public void setExchangeAccount(String exchangeAccount) {
        ExchangeAccount = exchangeAccount;
    }

    public int getExchangeBank() {
        return ExchangeBank;
    }

    public void setExchangeBank(int exchangeBank) {
        ExchangeBank = exchangeBank;
    }

    public int getExchangeAmount() {
        return ExchangeAmount;
    }

    public void setExchangeAmount(int exchangeAmount) {
        ExchangeAmount = exchangeAmount;
    }

    public int getExchangeAcc() {
        return ExchangeAcc;
    }

    public void setExchangeAcc(int exchangeAcc) {
        ExchangeAcc = exchangeAcc;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Exchange{" +
                "ExchangeDate=" + ExchangeDate +
                ", ExchangeAccount='" + ExchangeAccount + '\'' +
                ", ExchangeBank=" + ExchangeBank +
                ", ExchangeAmount=" + ExchangeAmount +
                ", ExchangeAcc=" + ExchangeAcc +
                ", userId='" + userId + '\'' +
                '}';
    }








}
