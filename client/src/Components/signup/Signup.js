import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [InputSignupValues, setInputSignupValues] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Password: "",
    CPassword: "",
  });

  const handleInputSignupValues = (e) => {
    setInputSignupValues({
      ...InputSignupValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitSignupValues = () => {
    // console.log("inside frontend");
    axios
      .post("http://localhost:5000/signup/Signup", InputSignupValues)
      .then(() => {
        console.log("Signup data posted");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      Signup
      <input
        type="text"
        placeholder="First Name"
        value={InputSignupValues.FirstName}
        onChange={handleInputSignupValues}
        name="FirstName"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={InputSignupValues.LastName}
        onChange={handleInputSignupValues}
        name="LastName"
      />
      <input
        type="email"
        placeholder="Email"
        value={InputSignupValues.Email}
        onChange={handleInputSignupValues}
        name="Email"
      />
      <input
        type="number"
        placeholder="Phone Number"
        value={InputSignupValues.Number}
        onChange={handleInputSignupValues}
        name="Phone"
      />
      <input
        type="password"
        placeholder="Password"
        value={InputSignupValues.Password}
        onChange={handleInputSignupValues}
        name="Password"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={InputSignupValues.CPassword}
        onChange={handleInputSignupValues}
        name="CPassword"
      />
      <input type="submit" onClick={submitSignupValues} />
      <h1> {InputSignupValues.CPassword} </h1>
    </>
  );
};

export default Signup;
