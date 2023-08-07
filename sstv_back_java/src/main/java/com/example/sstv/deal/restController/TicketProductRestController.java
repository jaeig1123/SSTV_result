package com.example.sstv.deal.restController;


import com.example.sstv.common.Data;
import com.example.sstv.deal.Service.TicketProductService;
import com.example.sstv.deal.TicketProduct;
import com.example.sstv.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product/*")
public class TicketProductRestController {



    @Autowired
    public TicketProductService ticketProductService;

    @Autowired
    public TicketProductRestController(TicketProductService ticketProductService){this.ticketProductService = ticketProductService;}

    @GetMapping(value = "getTicketProductAdminList")
    public Data getTicketProductAdminList() {
        List<TicketProduct> list = ticketProductService.getTicketProductAdminList();
        System.out.println("상품등록(이용권)");

        Data data = new Data("success", list);
        System.out.println(data);
        return data;
    }
    @PostMapping(value = "addTicketProductAdmin")
    public Data addTicketProductAdmin(@RequestBody TicketProduct ticketProduct){

        System.out.println("상품등록하기");

        ticketProductService.addTicketProductAdmin(ticketProduct);
        Data data = new Data("success", "상품등록하기");
        return  data;
    }





    @PostMapping(value = "updateTicketProductAdmin")
    public Data updateTicketProductAdmin(@RequestBody TicketProduct ticketProduct){
        ticketProductService.updateTicketProductAdmin(ticketProduct);
        Data data =new Data("success", ticketProduct);
        return  data;
    }

}