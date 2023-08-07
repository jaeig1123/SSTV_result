import React from 'react';
import axios from 'axios';
const addVodView = (vodNo)=>{
    return(
    axios.get('/community/addView/'+vodNo)
    )
}

export default addVodView;

// const fetcher = (url) => {
//     return(
//         axios.get(url).then((response)=> {
//             const datalist = response.data;
//             return datalist['data'];
//         })
//     )
//     }