package com.example.sstv.deal;

public class TicketProduct {


    private int ticketProdNo;  // 티켓상품 프라이머리키
    private String ticketName;  // 티켓이름
    private int price;     // 티켓 가격

    @Override
    public String toString() {
        return "TicketProduct{" +
                "ticketProdNo=" + ticketProdNo +
                ", ticketName='" + ticketName + '\'' +
                ", price=" + price +
                '}';
    }

    public int getTicketProdNo() {return ticketProdNo;}
    public void setTicketProdNo(int ticketProdNo) {this.ticketProdNo = ticketProdNo;}
    public String getTicketName() {return ticketName;}
    public void setTicketName(String ticketName) {this.ticketName = ticketName;}
    public int getPrice() {return price;}
    public void setPrice(int price) {this.price = price;}
}

