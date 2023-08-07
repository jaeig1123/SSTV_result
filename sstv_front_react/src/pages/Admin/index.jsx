import React, { useEffect } from 'react';
import Header from '../Mainpage/header';
import ExchangeRequestList from './getExchangeRequestList';
// import Purchase from './getPurchaseList';
import useSWR from 'swr'
import fetcher from "../utils/fetcher";

function Exchange() {
  

  return (
    <body>
      <Header />
      <ExchangeRequestList />
    </body>  
    
   
  );
}

export default Exchange;
