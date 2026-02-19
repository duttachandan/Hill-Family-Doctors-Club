import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Signin = () => {
  const [formData, SetFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    SetFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "100%",
            maxWidth: "300px",
            margin: "20px auto",
          },
        }}
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          required
          id="email"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          defaultValue="Hello World"
        />
        <TextField
          required
          id="password"
          type="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button
          className="btn-primary"
          style={{ margin: "0 auto" }}
          variant="text"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Signin;
