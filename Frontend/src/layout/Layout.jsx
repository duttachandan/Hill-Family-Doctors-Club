import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Outlet } from "react-router";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="2xl">
        <Box
          sx={{ height: "100vh", paddingBlock: "20px", textAlign: "center" }}
        >
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
