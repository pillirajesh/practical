import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    gender: "",
    country: "",
  });

  const [countryName, setCountryName] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const countryDetails = async () => {
      const response = await fetch("http://localhost:7000/api/countrydetails");
      const data = await response.json();
      setCountryName(data);
    };
    countryDetails();
  }, []);

  const inputChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    //console.log(inputData);
    const res = axios
      .post("http://localhost:7000/api/adduser", inputData)
      .then((response) => {
        setMessage(response.inputData);
      });

    if (!message) {
      setMessage(res.data);
      setTimeout(() => {
        navigate("/userdata");
      }, 2000);
    } else {
      setMessage("Some Error Occured");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-2">
          <h5
            style={{ fontWeight: "bold", color: "red", marginBottom: "20px" }}
          >
            User Registration Form
          </h5>
          <p className="text-success">{message}</p>
          <form onSubmit={submitForm}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    className="form-lable mt-2"
                    style={{ fontWeight: "bold", color: "blueviolet" }}
                  >
                    Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control mt-2"
                    name="name"
                    required
                    onChange={inputChanges}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    className="form-lable mt-2"
                    style={{ fontWeight: "bold", color: "blueviolet" }}
                  >
                    User Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="User Name"
                    className="form-control mt-2"
                    name="username"
                    required
                    onChange={inputChanges}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    className="form-lable mt-2"
                    style={{ fontWeight: "bold", color: "blueviolet" }}
                  >
                    Email<span>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control mt-2"
                    name="email"
                    required
                    onChange={inputChanges}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    className="form-lable mt-2"
                    style={{ fontWeight: "bold", color: "blueviolet" }}
                  >
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control mt-2"
                    name="password"
                    required
                    onChange={inputChanges}
                    autoComplete="off"
                    minLength={7}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    className="form-lable mt-2 mb-2"
                    style={{ fontWeight: "bold", color: "blueviolet" }}
                  >
                    Address<span>*</span>
                  </label>
                  <textarea
                    name="address"
                    className="form-control"
                    onChange={inputChanges}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    className="form-lable mt-2"
                    style={{ fontWeight: "bold", color: "blueviolet" }}
                  >
                    Phone<span>*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone"
                    className="form-control mt-2"
                    name="phone"
                    required
                    onChange={inputChanges}
                    minLength={10}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    className="form-lable mb-2 mt-2"
                    style={{ fontWeight: "bold", color: "blueviolet" }}
                  >
                    Gender<span>*</span>
                  </label>
                  <br />
                  <select
                    name="gender"
                    className="form-control"
                    required
                    onChange={inputChanges}
                  >
                    <option value=""> --Please Select-- </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Others</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    className="form-lable mb-2 mt-2"
                    style={{ fontWeight: "bold", color: "blueviolet" }}
                  >
                    Country<span>*</span>
                  </label>
                  <br />
                  <select
                    name="country"
                    className="form-control"
                    required
                    onChange={inputChanges}
                  >
                    <option value=""> --Please Select-- </option>
                    {countryName?.map((eachName) => (
                      <option value={eachName.name} key={eachName.id}>
                        {eachName.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <input type="checkbox" className="checkbox" required value="1" />
            <label>
              Accept all terms and conditions<span>*</span>
            </label>
            <br />
            <button type="submit" className="btn btn-success mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
