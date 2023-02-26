import { React } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Usercard.css";
import profile from './asserts/profile.png';

const Usercard = ({ data ,change_user,id}) => {
  const navigate=useNavigate();
  return (
    <div className="usercard-outer" onClick={()=>{
      change_user(id);
      navigate("/user_detail")

    }}>
        <img src={profile}></img>
      <div className="usercard-inner">
        <p id="user-name">{data.name}</p>
        <p id="user-email">{data.phone}</p>
      </div>
    </div>
  );
};

export default Usercard;
