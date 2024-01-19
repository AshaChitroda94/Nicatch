import React, { useState } from "react";
import { Modal } from "@mui/base";
import { Backdrop, Box, CardMedia, Container, IconButton } from "@mui/material";
import video from "../assets/testimonial/slice-video.mov";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { FaPlay } from "react-icons/fa";

import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Testimonials = (props) => {
  const [open, setOpen] = useState(false);

  const [readMoreModalOpen, setReadMoreModalOpen] = useState({});
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleReadMoreOpen = (testimonialIndex) => {
    console.log(" open function is called");
    setReadMoreModalOpen((prevState) => ({
      ...prevState,
      [testimonialIndex]: true,
    }));
  };

  const handleReadMoreClose = (testimonialIndex) => {
    console.log(" close function is called");
    setReadMoreModalOpen((prevState) => ({
      ...prevState,
      [testimonialIndex]: false,
    }));
  };

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 800,
    bgcolor: "background.paper",
    border: "2px solid #0ec7c1",
    boxShadow: 24,
    p: 4,
    marginTop: "70px",
    // backdropFilter: open ? "blur(10px)" : "none", // Apply blur when the modal is open
    // transition: "backdrop-filter 0.5s ease", // Add a transition for a smooth effect
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const ReadMore = ({ children, testimonialIndex, data }) => {
    const text = children.props.children[1];
    console.log("children", children);
    console.log("data", data);

    const handleClick = () => {
      handleReadMoreOpen(testimonialIndex);
    };

    return (
      <p
        style={{
          cursor: "pointer",
          marginTop: isSmallScreen ? "2rem" : null,
        }}
        onClick={handleClick}
      >
        {text.slice(0, 200)}{" "}
        <span style={{ color: "green" }}>...read more</span>
        {readMoreModalOpen[testimonialIndex] && (
          <Modal
            open={readMoreModalOpen[testimonialIndex]}
            onClose={() => handleReadMoreClose(testimonialIndex)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition // Enable smooth transition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500, // Adjust the timeout as needed
              style: { backgroundColor: "rgba(0, 0, 0, 1)" }, // Darken the background
            }}
          >
            <Box sx={style}>
              <IconButton
                edge="end"
                color="inherit"
                onClick={(e) => {
                  e.stopPropagation(); // Stop event propagation
                  handleReadMoreClose(testimonialIndex);
                }}
                aria-label="close"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 1,
                  width: "4vw", // Adjust as needed
                  height: "2.5vh", // Adjust as needed
                  // marginRight: "0.5rem",
                  marginTop: "1rem",
                  color: "red",
                }}
                style={{
                  marginRight: isSmallScreen ? "0.5rem" : undefined,
                }}
              >
                <HighlightOffSharpIcon
                  sx={{
                    fontSize: "2rem", // Adjust as needed
                  }}
                />
              </IconButton>

              <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className="testimonial-image"
                    sx={{
                      marginBottom: "16px", // Adjust the margin as needed
                      "& img": {
                        width: "100%",
                        border: "1px solid gray",
                      },
                    }}
                  >
                    <img src={data.img} alt="" />
                  </Box>
                  <Box>
                    <p>{text}</p>
                    <p
                      className="testimonial-meta"
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                      }}
                    >
                      - {data.name}
                    </p>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Modal>
        )}
      </p>
    );
  };

  const ModalStyle = {
    backdropFilter: open ? "blur(5px)" : "none", // Apply blur when the modal is open
    transition: "backdrop-filter 0.5s ease", // Add a transition for a smooth effect
  };

  return (
    <div id="testimonials">
      <Container className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <Box
          className="row"
          display="flex"
          justifyContent="space-between"
          // flexWrap="wrap"
          flexWrap={isSmallScreen ? "wrap" : "nowrap"}
        >
          {props.data
            ? props.data.map((d, i) => {
                return (
                  <Box key={`${d.name}-${i}`} className="col-md-4">
                    <Box
                      className="testimonial"
                      // marginBottom={isSmallScreen ? "10px" : ""}
                      display={isSmallScreen ? "flex" : ""}
                      flexDirection={isSmallScreen ? "column" : ""}
                      alignItems={isSmallScreen ? "center" : ""}
                      marginBottom={isSmallScreen ? "3rem" : ""}
                    >
                      <div
                        className="testimonial-image"
                        style={{ position: "relative", cursor: "pointer" }}
                        onClick={d.video ? handleOpen : handleClose}
                      >
                        {" "}
                        <img
                          src={d.img}
                          alt=""
                          style={{
                            paddingTop:
                              d.img === "img/testimonials/avatar.jpeg"
                                ? "10px"
                                : "0",
                            // transform:
                            //   d.img === "img/testimonials/avatar.jpeg"
                            //     ? "scale(0.8)"
                            //     : "none",
                            border: "1px solid gray",
                          }}
                        />{" "}
                        {d.video && (
                          <div
                            className="play-button"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              textAlign: "center",
                              borderRadius: "50%",
                              backgroundColor: "#101010",
                            }}
                            s
                          >
                            <FaPlay
                              style={{
                                fontSize: "3rem",
                                color: "#fff",
                                padding: "10px",
                                marginLeft: "2px",
                              }}
                            />
                          </div>
                        )}
                      </div>
                      <div className="testimonial-content">
                        <ReadMore text={d.text} data={d} testimonialIndex={i}>
                          <p>"{d.text}"</p>
                        </ReadMore>

                        <div
                          className="testimonial-meta"
                          style={{ display: "flex", justifyContent: "end" }}
                        >
                          {" "}
                          - {d.name}{" "}
                        </div>
                      </div>
                      {open && d.video ? (
                        <Modal
                          keepMounted
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                          style={{
                            top: "25%",
                            margin: "auto",
                            backgroundColor: "white",
                            // maxHeight: isSmallScreen ? "40px" : "",
                            // display: "flex",
                            // flexDirection: "column",
                            // alignItems: "center",
                          }}
                        >
                          <Box sx={style}>
                            <IconButton
                              edge="end"
                              color="inherit"
                              onClick={handleClose}
                              aria-label="close"
                              sx={{
                                position: "fixed",
                                top: 0,
                                right: 1,
                                width: "30px",
                                height: " 25px",
                                marginRight: "5px",
                                marginTop: "5px",
                                color: "red",
                              }}
                            >
                              <HighlightOffSharpIcon />
                            </IconButton>
                            <Box sx={{ display: "flex" }}>
                              <CardMedia
                                component="video"
                                // src={d.video}
                                src={video}
                                autoPlay
                                // maxHeight: isSmallScreen ? "40px" : "",

                                // height="600"
                                style={{
                                  maxHeight: isSmallScreen ? "900" : "600",
                                  overlay: "auto",
                                }}
                              />
                            </Box>
                          </Box>
                        </Modal>
                      ) : (
                        <></>
                      )}
                    </Box>
                  </Box>
                );
              })
            : "loading"}
        </Box>
      </Container>
    </div>
  );
};
