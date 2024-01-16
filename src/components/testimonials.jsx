import React, { useState } from "react";
import Slice from "../assets/testimonial/slice.jpg";
import { BsPlayBtnFill } from "react-icons/bs";
import { Modal } from "@mui/base";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import video from "../assets/testimonial/slice-video.mov";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

export const Testimonials = (props) => {
  const [open, setOpen] = useState(false);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "1px solid #0ec7c1",
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
                        onClick={handleOpen}
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
                            }}
                            s
                          >
                            <BsPlayBtnFill
                              style={{
                                fontSize: "3rem",
                                color: "#e41a1a",
                              }}
                            />
                          </div>
                        )}
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </div>
                      {open && (
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                          style={{
                            position: "fixed",
                            width: "50%",
                            height: "50%",
                          }}
                        >
                          <Box sx={style}>
                            <IconButton
                              edge="end"
                              color="inherit"
                              onClick={handleClose}
                              aria-label="close"
                              sx={{
                                position: "absolute",
                                top: 0,
                                right: 1,
                                width: "20px",
                                height: " 15px",
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
                      )}
                    </div>
                  </div>
                );
              })
            : "loading"}
          {/* <div className="col-md-4">
            <di v className="testimonial">
              <div
                className="testimonial-image"
                style={{ position: "relative", cursor: "pointer" }}
                onClick={handleOpen}
              >
                {" "}
                <img src={Slice} alt="" />{" "}
                <div
                  className="play-button"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                  s
                >
                  <BsPlayBtnFill
                    style={{
                      fontSize: "3rem",
                      color: "#e41a1a",
                    }}
                  />
                </div>
              </div>
              <div className="testimonial-content">
                <p>
                  I just wanted to jump on and say a massive thank you to Nikhil
                  and his team at Nicatch Private and particular Krupa. They've
                  been nothing short of amazing when helping with the
                  development of our slice platform, ensuring that they
                  understand what business value looks like for us and
                  delivering in a timely and cost effective manner. Absolutely,
                  highly recommend them if you're looking for development
                  services for your business. Thanks to Nicatch Private.
                </p>
                <div className="testimonial-meta"> - Amy stevens </div>
              </div>
            </di>
          </div> */}
        </div>
      </div>
      {/* {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ position: "fixed", width: "50%", height: "50%" }}
        >
          <Box sx={style}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                position: "absolute",
                top: 0,
                right: 1,
                width: "20px",
                height: " 15px",
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
                src={d.video}
                autoPlay
                height="600"
              />
            </Box>
          </Box>
        </Modal>
      )} */}
    </div>
  );
};
