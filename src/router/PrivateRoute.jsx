import { Navigate } from "react-router-dom";

 
export const PrivateRoute = ({ isAuthenticated,component: Component }) => {

  if(isAuthenticated.logged == true && isAuthenticated.experto== true){

    // console.log("Soy expertooooouu");

    return <Component />

  }else if(isAuthenticated.logged== true && isAuthenticated.experto== false){

    // console.log("NOOO Soy expertooooouu");

    return <Component />

  }else {

  return <Navigate to="/auth/login" />

  }

  
};