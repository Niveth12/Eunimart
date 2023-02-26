import { React, useEffect, useState } from "react";
import axios from "axios";
import Usercard from "./Usercard";
import "../styles/Home.css";
import img from "./asserts/bg.webp";
import UserDetails from "./UserDetails";

const Home = ({setUserId}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://reqres.in/api/users");

      console.log(result.data.data);

      setUsers(result.data.data);
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

      <div className="user-list-inner">{user_list}</div>
    </div>
  );
};

export default Home;
