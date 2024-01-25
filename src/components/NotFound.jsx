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
        <h3
          style={{
            fontSize: "bold",
            textTransform: "uppercase",
            fontWeight: 800,
            letterSpacing: "1px",
            margin: "20px",
          }}
        >
          Sorry, the page can't be found.
        </h3>
        <Link to="/">
          <Button
            className="btn btn-custom btn-lg"
            style={{ paddingTop: "16px" }}
          >
            Back to Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
