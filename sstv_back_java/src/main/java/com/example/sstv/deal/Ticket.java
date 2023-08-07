package com.example.sstv.deal;

import com.example.sstv.user.User;

import java.util.Date;

public class Ticket {
    //이용권
    private int ticketNo;   // 티켓 프라이머리키
    private Date ticketStart; //티켓 이용시작시간
    private Date ticketEnd;   // 티켓 끝나는 시간
    private Date ticketDate;  // 티켓 날짜
    private int ticketUse;   // 타켓 사용여부
    private User user;

    private TicketProduct ticketProduct;
    private int ticketProdNo;
    private String userId;
    private int coin;
    private String ticketName;

    private int price;

    public int getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "ticketNo=" + ticketNo +
                ", ticketStart=" + ticketStart +
                ", ticketEnd=" + ticketEnd +
                ", ticketDate=" + ticketDate +
                ", ticketUse=" + ticketUse +
                ", user=" + user +
                ", ticketProduct=" + ticketProduct +
                ", ticketProdNo=" + ticketProdNo +
                ", userId='" + userId + '\'' +
                ", coin=" + coin +
                ", ticketName=" + ticketName +
                ", price=" + price +
                '}';
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getCoin() {
        return coin;
    }

    public void setCoin(int coin) {
        this.coin = coin;
    }

    public String getTicketName() {
        return ticketName;
    }

    public void setTicketName(String ticketName) {
        this.ticketName = ticketName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public TicketProduct getTicketProduct() {
        return ticketProduct;
    }

    public void setTicketProduct(TicketProduct ticketProduct) {
        this.ticketProduct = ticketProduct;
    }

    public int getTicketProdNo() {
        return ticketProdNo;
    }

    public void setTicketProdNo(int ticketProdNo) {
        this.ticketProdNo = ticketProdNo;
    }

    public int getTicketNo() { return ticketNo; }
    public void setTicketNo(int ticketNo) { this.ticketNo = ticketNo;}
    public Date getTicketStart() { return ticketStart;}
    public void setTicketStart(Date ticketStart) {this.ticketStart = ticketStart;}
    public Date getTicketEnd() {return ticketEnd;}
    public void setTicketEnd(Date ticketEnd) {this.ticketEnd = ticketEnd;}
    public Date getTicketDate() {return ticketDate;}
    public void setTicketDate(Date ticketDate) {this.ticketDate = ticketDate;}
    public int getTicketUse() {return ticketUse;}
    public void setTicketUse(int ticketUse) {this.ticketUse = ticketUse;}
}
