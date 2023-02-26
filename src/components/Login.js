import { React, useState } from "react";
import "../styles/Login.css";
import img from "./asserts/bg.webp";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    if (username != "" && email != "" && phone != "") {
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      navigate("/home");
    } else {
      window.alert("please enter all the details");
    }
    setEmail("");
    setPhone("");
    setUsername("");
  };

  return (
    <div className="outer-login">
      <img id={"bg-img"} src={img}></img>
      <div style={{position:"absolute","width":"100%","height":"100%","top":"0",left:"0"}}>
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
      <div className="inner-login">
        <h3 id={"login-label"}>Login</h3>

        <input
          type={"text"}
          name={"username"}
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder={"Username"}
        ></input>
        <input
          type={"email"}
          name={"email"}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder={"email"}
        ></input>
        <input
          type={"text"}
          name={"Phone"}
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
          placeholder={"Phone number"}
        ></input>
        <button className="submit" onClick={onSubmitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
