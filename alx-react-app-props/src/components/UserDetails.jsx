import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
    //3-Providing the context
    const UserParameters = useContext(UserContext);
    return (
      <div>
        <p>Name: {UserParameters.name}</p>
        <p>Email: {UserParameters.email}</p>
      </div>
    );
  }
  
  export default UserDetails;