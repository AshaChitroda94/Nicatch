import React, { useState } from "react";
import Slice from "../assets/testimonial/slice.jpg";
// import { BsPlayBtnFill } from "react-icons/bs";
import { Modal } from "@mui/base";
import {
  Box,
  CardMedia,
  IconButton,
  // Typography,
  // useMediaQuery,
} from "@mui/material";
import video from "../assets/testimonial/slice-video.mov";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { useTheme } from "@emotion/react";
import { FaPlay, FaPlayCircle } from "react-icons/fa";

export const Testimonials = (props) => {
  const [open, setOpen] = useState(false);
  // const [isOpenForReadMore, setIsOpenForReadMore] = useState(false);

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

  const ReadMore = ({ children }) => {
    console.log("children", children);
    const text = children.props.children[1];
    console.log("text", text);
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      // setIsOpenForReadMore(true);
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 100) : text}
        <span
          onClick={toggleReadMore}
          className="read-or-hide"
          style={{ color: "green" }}
        >
          {isReadMore ? "...read more" : " show less"}
        </span>
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
                console.log("data: " + d);
                return (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                      <div
                        className="testimonial-image"
                        style={{ position: "relative", cursor: "pointer" }}
                        onClick={d.video ? handleOpen : handleClose}
                      >
                        {" "}
                        <img src={d.img} alt="" />{" "}
                        {d.video && (
                          <div
                            className="play-button"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              textAlign: "center",
                              border: "1px solid #f8b31e ",
                              borderRadius: "50%",
                              backgroundColor: "#f8b31e",
                            }}
                            s
                          >
                            <FaPlay
                              style={{
                                fontSize: "3rem",
                                color: "#df2838",
                                padding: "6px",
                                marginLeft: "2px",
                              }}
                            />
                          </div>
                        )}
                      </div>
                      <div className="testimonial-content">
                        <ReadMore text={d.text} key={`${d.text}-${i}`}>
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
                            // position: "fixed",
                            // width: "50%",
                            // height: "50%",
                            top: "25%",
                            margin: "auto",
                            // width: isSmallScreen ? "90%" : "50%",
                            // height: isSmallScreen ? "80%" : "auto",
                            // padding: isSmallScreen ? "20px" : "50px",
                            // margin: isSmallScreen ? "10px" : "50px",
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
