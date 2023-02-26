import { React, useEffect, useState } from "react";
import axios from "axios";
import "../styles/UserDetails.css";
import img from "./asserts/bg.webp";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ id }) => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (id == "") {
      
      navigate("/home");
    }
    console.log(id);
    async function fetchData() {
      const result = await axios.get("https://reqres.in/api/users/" + id);
      console.log(result);
      setDetails(result.data.data);
    }
    fetchData();
  }, []);

  return (
    <div>

<div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
        }}
      >
        <section>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </section>
      </div>

      <img src={img} id={"bg-img2"}></img>

    <div className="userdetail-outer">
      <img src={details.avatar}></img>
      <div className="userdetail-inner">
        <div className="userdetail-inner-2">
          <p>First Name</p>
          <p>{details.first_name}</p>
        </div>
        <div className="userdetail-inner-2">
          <p>Last Name</p>
          <p>{details.last_name}</p>
        </div>
        <div className="userdetail-inner-2">
          <p>Email</p>
          <p>{details.email}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserDetails;
