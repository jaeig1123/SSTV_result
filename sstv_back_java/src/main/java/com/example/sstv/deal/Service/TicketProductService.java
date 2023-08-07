package com.example.sstv.deal.Service;

import com.example.sstv.deal.DAO.TicketProductDAO;
import com.example.sstv.deal.TicketProduct;

import com.example.sstv.user.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketProductService {

    private TicketProductDAO ticketProductDAO;
    @Autowired
    public TicketProductService(TicketProductDAO ticketProductDAO){
        this.ticketProductDAO = ticketProductDAO;
    }
    public List<TicketProduct> getTicketProductAdminList(){
        return ticketProductDAO.getTicketProductAdminList();
    }

    public List<TicketProduct> getTicketAdminList(){
        return ticketProductDAO.getTicketProductAdminList();
    }

    public void addTicketProductAdmin(TicketProduct ticketProduct){
        ticketProductDAO.addTicketProductAdmin(ticketProduct);
    }

    public void removeTicketProductAdmin(TicketProduct ticketProduct){
        ticketProductDAO.removeTicketProductAdmin(ticketProduct);
    }

    public void updateTicketProductAdmin(TicketProduct ticketProduct) {
        ticketProductDAO.updateTicketProductAdmin(ticketProduct);
    }

}
