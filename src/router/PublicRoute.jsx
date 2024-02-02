
import { Navigate } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
 
export const PublicRoute = ({ isAuthenticated }) => {
  console.log("puBLIC Router: "+isAuthenticated.logged);

  if(isAuthenticated.logged == true && isAuthenticated.experto== true){
    
   return <Navigate to="/chatexpert" />

  }else if(isAuthenticated.logged == true && isAuthenticated.experto== false){

    return <Navigate to="/chat" />

  }else {

  return <AuthRouter />
  
  }


};

