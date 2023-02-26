import { React, useEffect, useState } from "react";
import axios from "axios";
import "../styles/UserDetails.css";
import img from "./asserts/bg.webp";
import { useNavigate } from "react-router-dom";
import profile from "./asserts/profile.png";

const UserDetails = ({ id }) => {
  const [details, setDetails] = useState({});
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (id == "") {
      navigate("/home");
    }

    async function fetchData() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      setDetails(result.data);
      setAddress(result.data.address);
      setCompany(result.data.company);
    }
    fetchData();
  }, []);

  return (
    <div>
      <button
        id="back"
        onClick={() => {
          navigate("/home");
        }}
      >
        back
      </button>
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
        <img src={profile}></img>
        <div className="userdetail-inner">
          <div className="userdetail-inner-2">
            <p>Name</p>
            <p>{details.name}</p>
          </div>
          <div className="userdetail-inner-2">
            <p>Username</p>
            <p>{details.username}</p>
          </div>
          <div className="userdetail-inner-2">
            <p>Phone</p>
            <p>{details.phone}</p>
          </div>
          <div className="userdetail-inner-2">
            <p>Email</p>
            <p>{details.email}</p>
          </div>
          <div className="userdetail-inner-2">
            <p>Address</p>
            <div
              style={{
                display: "block",
                color: "rgb(219, 219, 219)",
                textAlign: "right",
              }}
            >
              <p
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  color: "rgb(219, 219, 219)",
                  fontWeight: "400",
                }}
              >
                {address.street}
              </p>
              <p
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  color: "rgb(219, 219, 219)",
                  fontWeight: "400",
                }}
              >
                {address.city}
              </p>
              <p style={{ marginTop: "5px", marginBottom: "5px" }}>
                {address.zipcode}
              </p>
            </div>
          </div>
          <div className="userdetail-inner-2">
            <p>Website</p>
            <p>
              <a href={"http://" + details.website}>{details.website}</a>
            </p>
          </div>
          <div className="userdetail-inner-2">
            <p>Company</p>
            <p>{company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
