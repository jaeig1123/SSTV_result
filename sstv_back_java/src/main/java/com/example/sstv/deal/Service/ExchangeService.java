package com.example.sstv.deal.Service;

import com.example.sstv.deal.DAO.ExchangeDAO;
import com.example.sstv.deal.Exchange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ExchangeService {
    private ExchangeDAO exchangeDAO;

    @Autowired
    public ExchangeService(ExchangeDAO exchangeDAO) {this.exchangeDAO = exchangeDAO;}

    public List<Exchange> getExchangeList(String userId){
        return exchangeDAO.getExchangeList(userId);
    }

    public List<Exchange> getExchangeRequestList(String userId){
        return exchangeDAO.getExchangeRequestList(userId);
    }
    public void addExchange(Exchange exchange) {
        exchangeDAO.addExchange(exchange);
    }


    public Exchange getExchangeRequestList(Exchange exchange){
        return exchangeDAO.getExchangeRequestList(exchange);
    }

    public void exchangeAcc(Exchange exchange) throws  Exception{
         exchangeDAO.exchangeAcc(exchange);
    }

}