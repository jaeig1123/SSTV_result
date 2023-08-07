package com.example.sstv.deal.restController;


import com.example.sstv.common.Data;
import com.example.sstv.deal.Service.TicketService;
import com.example.sstv.deal.Ticket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ticket/*")
public class TicketRestController {

    @Autowired
    public TicketService ticketService;

    @Autowired
    public TicketRestController(TicketService ticketProductService){this.ticketService = ticketService;}


    @PostMapping("addTicket")
    public Data addTicket( @RequestBody Ticket ticket) throws Exception {

         ticketService.addTicket(ticket);
        Data data = new Data("success", "티켓 구매하기");

        return data;
    }
    @GetMapping(value = "getTicketList/{userId}")
    public Data getTicketList(@PathVariable String userId) throws Exception {
        System.out.println("이용권 목록리스트");

        List<Ticket> ticketList =ticketService.getTicketList(userId);
        Data data = new Data("success", ticketList);

        return  data;

    }
    @PostMapping (value ="useTicket")
    public Data useTicket(@RequestBody Ticket ticketNo) throws Exception {
                System.out.println("useTicket부분");
                ticketService.useTicket(ticketNo);
                System.out.println();
                Data data = new Data("successs", "티켓 사용성공");
                return data;

    }

}