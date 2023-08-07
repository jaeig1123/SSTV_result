/* eslint-disable react-hooks/rules-of-hooks */
import create from 'zustand';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const useUserStore = create((set)=> ({
    users: [],
    fetchUsers: async()=> {
        try {
            const location = useLocation();
            const currentPath = location.pathname.split("/");
            const userId = currentPath[2];
            const response = await axios.get('/user/getUser/'+userId);
            set({users: response.data});
        } catch (error) {
            console.error('error fetching', + error);
        }
    },
    
}));

export default useUserStore;