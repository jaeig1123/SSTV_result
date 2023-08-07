package com.example.sstv.deal.DAO;

//
////<<<<<<< HEAD:src/main/java/com/example/sstv/streaming/DAO/UserDAO.java
//
import com.example.sstv.deal.Ticket;
import org.apache.ibatis.annotations.Mapper;
//
import java.util.List;
//
//
/*
 * Mapper의 id와 interface의 method명은 동일해야 @Mapper를 통해 Mapper.xml의 정보를 가져 올 수 있다.
 * */
@Mapper
public interface TicketDAO {


    void addTicket(Ticket ticket);
    List<Ticket> getTicketList(String userId);


    void useTicket(Ticket ticketNo);

}
