import { React } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Usercard.css";

const Usercard = ({ data ,change_user,id}) => {
  const navigate=useNavigate();
  return (
    <div className="usercard-outer" onClick={()=>{
      change_user(id);
      navigate("/user_detail")

    }}>
        <img src={data.avatar}></img>
      <div className="usercard-inner">
        <p id="user-name">{data.first_name}</p>
        {/* <p id="user-email">{data.email}</p> */}
      </div>
    </div>
  );
};

export default Usercard;
