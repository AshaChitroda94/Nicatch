import React, { useState } from "react";
// import { BsPlayBtnFill } from "react-icons/bs";
import { Modal } from "@mui/base";
import {
  Box,
  CardMedia,
  Container,
  IconButton,
  // Typography,
  // useMediaQuery,
} from "@mui/material";
import video from "../assets/testimonial/slice-video.mov";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { FaPlay } from "react-icons/fa";

export const Testimonials = (props) => {
  const [open, setOpen] = useState(false);
  // const [isOpenForReadMore, setIsOpenForReadMore] = useState(false);
  // const [readMoreModalOpen, setReadMoreModalOpen] = useState(false);
  const [readMoreModalOpen, setReadMoreModalOpen] = useState({});

  console.log("readMoreModalOpen", readMoreModalOpen);

  // const handleReadMoreOpen = () => {
  //   console.log("function is called");
  //   setReadMoreModalOpen(true);
  // };

  // const handleReadMoreClose = () => {
  //   setReadMoreModalOpen(false);
  // };

  const handleReadMoreOpen = (testimonialIndex) => {
    console.log("function is called");
    setReadMoreModalOpen((prevState) => ({
      ...prevState,
      [testimonialIndex]: true,
    }));
  };

  const handleReadMoreClose = (testimonialIndex) => {
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
  };

  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const handleIsMoreClose = () => {
  //   setIsOpenForReadMore(false);
  // };

  // const ReadMore = ({ children }) => {
  //   const text = children.props.children[1];
  //   const [isReadMore, setIsReadMore] = useState(true);
  //   // const toggleReadMore = () => {
  //   //   // setIsOpenForReadMore(true);
  //   //   setIsReadMore(!isReadMore);
  //   // };
  //   const toggleOpen = () => setCentredModal(!centredModal);
  //   return (
  //     <p className="text">
  //       {isReadMore ? text.slice(0, 100) : text}
  //       <span
  //         onClick={toggleOpen}
  //         className="read-or-hide"
  //         style={{ color: "green" }}
  //       >
  //         {isReadMore ? "...read more" : " show less"}
  //       </span>
  //     </p>
  //   );
  // };

  const ReadMore = ({ children, testimonialIndex, data }) => {
    const text = children.props.children[1];
    console.log("children", children);
    console.log("data", data);

    return (
      <p>
        {text.slice(0, 200)}{" "}
        <span
          style={{ color: "green", cursor: "pointer" }}
          onClick={() => handleReadMoreOpen(testimonialIndex)}
        >
          ...read more
        </span>
        {readMoreModalOpen[testimonialIndex] && (
          <Modal
            open={readMoreModalOpen[testimonialIndex]}
            onClose={() => handleReadMoreClose(testimonialIndex)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => handleReadMoreClose(testimonialIndex)}
                aria-label="close"
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 1,
                  width: "25px",
                  height: "15px",
                  marginRight: "5px",
                  marginTop: "5px",
                  color: "red",
                }}
              >
                <HighlightOffSharpIcon />
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

              {/* <Box sx={{ display: "flex" }}>
                <Box className="testimonial-image" style={{}}>
                  <img
                    src={data.img}
                    alt=""
                    style={{
                      border: "1px solid gray",
                    }}
                  />
                </Box>

                <p>{text}</p>
              </Box> */}
            </Box>
          </Modal>
        )}
      </p>
    );
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {props.data
            ? props.data.map((d, i) => {
                return (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
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
                            // boxShadow: "10px  rgba(196, 25, 25, 0.5)",
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
                              // border: "1px solid #090909 ",
                              borderRadius: "50%",
                              backgroundColor: "#101010",
                            }}
                            s
                          >
                            <FaPlay
                              style={{
                                fontSize: "3rem",
                                // color: "#df2838",
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

                        <div className="testimonial-meta"> - {d.name} </div>
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
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
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
                                height="600"
                              />
                            </Box>
                          </Box>
                        </Modal>
                      ) : (
                        <></>
                      )}

                      {/* {isOpenForReadMore && d.text && (
                        <Modal
                          open={isOpenForReadMore}
                          onClose={handleIsMoreClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <IconButton
                              edge="end"
                              color="inherit"
                              onClick={handleIsMoreClose}
                              aria-label="close"
                              sx={{
                                position: "absolute",
                                top: 0,
                                right: 1,
                                width: "25px",
                                height: " 15px",
                                marginRight: "5px",
                                marginTop: "5px",
                                color: "red",
                              }}
                            >
                              <HighlightOffSharpIcon />
                            </IconButton>
                            <Box sx={{ display: "flex" }}>
                              <img src={d.img} alt="..." className="team-img" />
                              <Box>
                                <Typography
                                  sx={{
                                    mt: 2,
                                    ml: 2,
                                    fontSize: "15px",
                                    color: "black",
                                  }}
                                >
                                  {d.text}
                                </Typography>
                              </Box>
                            </Box>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              {d.name}
                            </Typography>
                          </Box>
                        </Modal>
                      )} */}
                    </div>
                  </div>
                );
              })
            : "loading"}
        </div>
      </div>
    </div>
  );
};
