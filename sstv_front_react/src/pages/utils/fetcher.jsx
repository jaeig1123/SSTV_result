import axios from 'axios';

const fetcher = (url) => {
return(
    axios.get(url).then((response)=> {
        const datalist = response.data;
        return datalist['data'];
    })
)
}
export default fetcher;