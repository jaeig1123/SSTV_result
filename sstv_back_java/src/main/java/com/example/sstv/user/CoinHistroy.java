package com.example.sstv.user;

import java.sql.Timestamp;

public class CoinHistroy {
    private int coinHistoryNo;
    private String userId;
    private int ticketProdNo;
    private int prodName; // 0-'후원', 1-'광고 신청', 2-'광고 신청 거절', 3-'코인 충전'
    private int price;
    private Timestamp payDate;
    private String userNickname;

    public String getUserNickname() {
        return userNickname;
    }

    public void setUserNickname(String userNickname) {
        this.userNickname = userNickname;
    }

    public int getCoin() {
        return coin;
    }

    public void setCoin(int coin) {
        this.coin = coin;
    }

    @Override
    public String toString() {
        return "CoinHistroy{" +
                "coinHistoryNo=" + coinHistoryNo +
                ", userId='" + userId + '\'' +
                ", ticketProdNo=" + ticketProdNo +
                ", prodName=" + prodName +
                ", price=" + price +
                ", payDate=" + payDate +
                ", userNickname='" + userNickname + '\'' +
                ", coin=" + coin +
                '}';
    }

    private int coin;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public int getCoinHistoryNo() {
        return coinHistoryNo;
    }

    public void setCoinHistoryNo(int coinHistoryNo) {
        this.coinHistoryNo = coinHistoryNo;
    }



    public int getTicketProdNo() {
        return ticketProdNo;
    }

    public void setTicketProdNo(int ticketProdNo) {
        this.ticketProdNo = ticketProdNo;
    }

    public int getProdName() {
        return prodName;
    }

    public void setProdName(int prodName) {
        this.prodName = prodName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Timestamp getPayDate() {
        return payDate;
    }

    public void setPayDate(Timestamp payDate) {
        this.payDate = payDate;
    }
}