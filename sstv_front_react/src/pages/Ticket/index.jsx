import React from 'react';
import Header from '../Community/header';
import TicketProduct from './ticketProduct';



const Ticket = () => {

    return (
        <body style={{ overflowY: "auto", maxHeight: "90vh" }}>
            <Header/>
            <TicketProduct/>
        </body>

    )
}
export default Ticket;
