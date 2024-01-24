import React from "react";
import notFoundImage from "../assets/notfound.jpg";
import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "absolute",
        }}
      >
        {/* <h1>404 - Not Found</h1> */}
        <img
          src={notFoundImage}
          alt="Not Found"
          style={{ width: "600px", height: "500px" }}
        />
        <p>Sorry, We can't find the page.</p>
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
