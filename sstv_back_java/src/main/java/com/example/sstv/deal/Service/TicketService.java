package com.example.sstv.deal.Service;

import com.example.sstv.deal.DAO.TicketDAO;
import com.example.sstv.deal.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TicketService {

    private TicketDAO ticketDAO;
    @Autowired
    public TicketService(TicketDAO ticketDAO)throws  Exception{
        this.ticketDAO= ticketDAO;
    }
    public void addTicket(Ticket ticket) throws Exception {
        // 티켓 등록 수행
        ticketDAO.addTicket(ticket);

        // 사용자 계정에서 코인 차감
//        int price = ticket.getPrice();
//        int coin = ticket.getCoin();
//        if (coin >= price) {
//            int remainingCoin = coin - price;
//            ticket.setCoin(remainingCoin);
//            ticketDAO.TkRecentCoin(ticket);
//        } else {
//            throw new Exception("티켓을 구매하기에 충분한 코인이 없습니다.");
//        }
    }

    public List<Ticket> getTicketList(String userId){
        return ticketDAO.getTicketList(userId);
    }

    public void useTicket(Ticket ticketNo)throws Exception{
        System.out.println("useTicketService부분");
        ticketDAO.useTicket(ticketNo);
    }


}
