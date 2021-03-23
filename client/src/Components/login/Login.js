import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [LoginInputValues, setLoginInputValues] = useState({
    Email: "",
    Password: "",
  });

  const handleLoginInputs = (e) => {
    console.log(e.target.value);
    setLoginInputValues({
      ...LoginInputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = () => {
    // console.log({ LoginInputValues });
    axios
      .post("http://localhost:5000/login/Login", LoginInputValues)
      .then(() => console.log("Login data posted"))
      .catch((errors) => console.log(errors));
    // setLoginInputValues()
  };
  return (
    <>
      Login
      <input
        type="text"
        placeholder="Email"
        value={LoginInputValues.Email}
        name="Email"
        onChange={handleLoginInputs}
      />
      <input
        type="password"
        placeholder="Password"
        value={LoginInputValues.Password}
        name="Password"
        onChange={handleLoginInputs}
      />
      <input type="submit" onClick={handleLoginSubmit} />
      <h1>
        {LoginInputValues.email}
        {LoginInputValues.password}
      </h1>
    </>
  );
};

export default Login;
