import React, { useState } from "react";
import Image from "../assets/team/CEO.jpg";
import { Modal } from "@mui/base";
import { Box, IconButton, Typography } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

export const Team = (props) => {
  const [open, setOpen] = useState(false);

  const style = {
    position: "absolute",
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
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Top Management of Nicatch Private Limited. Here are what our Board
            members say
          </p>
        </div>
        <div id="row">
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"} */}

          <div
            className="col-md-3 col-sm-6 team"
            style={{ display: "contents" }}
          >
            <div className="thumbnail">
              <img
                src={Image}
                alt="..."
                className="team-img"
                onClick={handleOpen}
                style={{ cursor: "pointer" }}
              />
              <div className="caption">
                <h4>Nikhil Parmar</h4>
                <p>Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
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
                width: "25px",
                height: " 15px",
                marginRight: "5px",
                marginTop: "5px",
                color: "red",
              }}
            >
              {/* <CloseIcon /> */}
              <HighlightOffSharpIcon />
            </IconButton>
            <Box sx={{ display: "flex" }}>
              <img src={Image} alt="..." className="team-img" />
              <Box>
                {/* <Typography
                  sx={{ mt: 2, ml: 2, fontSize: "15px", color: "black" }}
                >
                  Coming from a small town with a vision of to achieve something
                  spectacular in life was not so easy but I dreamt and make it
                  possible with hard and smart Work. As an entrepreneur I show a dream that to
                  provide employee good environment to work and achieve their goals of life.
                </Typography> */}
                <Typography
                  sx={{ mt: 2, ml: 2, fontSize: "15px", color: "black" }}
                >
                  We provide a range of technical development and strategic
                  consulting services to build agility, integrate data assets
                  and transform technical assets of your key business processes.
                  Our aim is to help our clients gain a competitive advantage
                  with new or enhanced software products. Our range of services
                  includes custom software solutions, web applications, desktop
                  software, line of business applications, third-party
                  integrations, content management systems, and mainframe
                  applications.
                </Typography>
              </Box>
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Founder & CEO
            </Typography>
          </Box>
        </Modal>
      )}
    </div>
  );
};
