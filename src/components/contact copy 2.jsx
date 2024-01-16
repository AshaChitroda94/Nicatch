import React, { useState } from "react";
import emailjs from "emailjs-com";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

const initialState = {
  name: "",
  email: "",
  message: "",
  mobile: "",
};

export const Contact = (props) => {
  const [state, setState] = useState(initialState);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!state.name.trim()) {
      errors.name = "Name is required";
    }
    if (!state.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Invalid email address";
    }
    if (!state.message.trim()) {
      errors.message = "Message is required";
    }
    if (!state.mobile.trim()) {
      errors.mobile = "Mobile Number is required";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearState = () => {
    setState(initialState);
    setValidationErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      alert("Your message has been submitted successfully");
      emailjs
        .sendForm(
          "service_0zbn8nv",
          "template_dmsvz9p",
          e.target,
          "hLoQWIQPxi39aZwxb"
        )
        .then(
          (result) => {
            console.log(result.text);
            clearState();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container>
      <Box component="div" id="contact">
        <Box component="div" className="container">
          <Box component="div" className="col-md-8">
            <Box component="div" className="row">
              <Box component="div" className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </Box>
              <form
                name="sentMessage"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Box component="div" className="row">
                  <Box component="div" className="col-md-6">
                    <TextField
                      fullWidth
                      id="mobile"
                      name="mobile"
                      label="Mobile Number"
                      variant="outlined"
                      value={state.mobile}
                      onChange={handleChange}
                      error={!!validationErrors.mobile}
                      helperText={validationErrors.mobile}
                    />
                  </Box>
                  <Box component="div" className="col-md-6">
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      value={state.email}
                      onChange={handleChange}
                      error={!!validationErrors.email}
                      helperText={validationErrors.email}
                    />
                  </Box>
                </Box>
                <Box component="div" className="col-md">
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name/Company Name"
                    variant="outlined"
                    value={state.name}
                    onChange={handleChange}
                    error={!!validationErrors.name}
                    helperText={validationErrors.name}
                  />
                </Box>

                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={state.message}
                  onChange={handleChange}
                  error={!!validationErrors.message}
                  helperText={validationErrors.message}
                />
                <Box component="div" id="success"></Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Box>
          <Box component="div" className="col-md-3 col-md-offset-1 contact-info">
            {/* ... */}
          </Box>
          <Box component="div" className="col-md-12">
            {/* ... */}
          </Box>
        </Box>
      </Box>
      <Box component="div" id="footer">
        {/* ... */}
      </Box>
    </Container>
  );
};
