import React, { useState } from "react";
import axios from "axios";

const User = () => {
  const [getValues, SetgetValues] = useState({
    names: "",
    email: "",
    password: "",
    Cpassword: "",
  });

  const inputHandler = (e) => {
    console.log(e.target.value);
    SetgetValues({ ...getValues, [e.target.name]: e.target.value });
  };

  const submitData = () => {
    axios
    .post("http://localhost:5000/", getValues)
    .then(() => console.log("okay"))
    .catch((err) => console.log(err));
    

    SetgetValues("")
  };
  return (
    <>
      <input
        type="text"
        placeholder="name"
        onChange={inputHandler}
        name="names"
        value={getValues.names}
      />
      <input
        type="text"
        placeholder="email"
        onChange={inputHandler}
        name="email"
        value={getValues.email}
      />
      <input
        type="password"
        placeholder="password"
        onChange={inputHandler}
        name="password"
        value={getValues.password}
      />
      <input
        type="password"
        placeholder="Confirm password"
        onChange={inputHandler}
        name="Cpassword"
        value={getValues.Cpassword}
      />
      <input type="submit" onClick={submitData} />

      <h1> {getValues.names} </h1>  
    </>
  );
};

export default User;
