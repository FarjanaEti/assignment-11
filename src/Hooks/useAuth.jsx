import { useContext } from "react"
import AuthContext from "../AuthProvider/AuthContex";

const useAuth = () =>{
    const context = useContext(AuthContext);
    return context;
}

export default useAuth;