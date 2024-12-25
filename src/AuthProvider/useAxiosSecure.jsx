import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect } from "react";
import axios from "axios";


const axiosInstance=axios.create({
      baseURL:'http://localhost:5000',
      withCredentials:true                        
})
const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
                              
    useEffect(() => {
       axiosInstance.interceptors.response.use(response => {
           return response;
       }, error => {
           console.log('api response error status', error.status);
           if (error.status === 401 || error.status === 403) {
               signOutUser()
                   .then(() => {
                       navigate('/login')
                   })
                   .catch(err => console.log(err))
           }
           return Promise.reject(error);
       })
   }, [])                           
  return axiosInstance;
};

export default useAxiosSecure;