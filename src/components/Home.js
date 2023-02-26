import { React, useEffect, useState } from "react";
import axios from "axios";
import Usercard from "./Usercard";
import "../styles/Home.css";
import img from "./asserts/bg.webp";
import UserDetails from "./UserDetails";
import { useNavigate } from "react-router-dom";

const Home = ({ setUserId }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      //API USED->https://jsonplaceholder.typicode.com/users
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(result.data);
    }
    fetchData();
  }, []);

  const user_list = users.map((element) => {
    return (
      <Usercard
        data={element}
        id={element.id}
        change_user={setUserId}
      ></Usercard>
    );
  });

  return (
    <div className="user-list-outer">
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
        }}
      >
        {/* this used for the background stars */}
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
      <button
        id="logout"
        onClick={() => {
          localStorage.removeItem("username");
          localStorage.removeItem("email");
          localStorage.removeItem("phone");
          navigate("/");
        }}
      >
        Logout
      </button>

      <div className="user-list-inner">{user_list}</div>
    </div>
  );
};

export default Home;
