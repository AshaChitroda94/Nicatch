import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const initialState = {
  name: "",
  email: "",
  message: "",
  mobile: "",
};
export const Contact = (props) => {
  const [formData, setFormData] = useState(initialState);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const clearState = () => {
    setFormData(initialState);
    setRecaptchaValue(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }
    // Clear the reCAPTCHA value immediately
    setRecaptchaValue(null);

    // Reset submission status
    setSubmissionStatus(null);

    /* emailjs service with our own Service ID, Template ID and Public Key from our EmailJS account */

    emailjs
      .sendForm(
        "service_0zbn8nv",
        "template_dmsvz9p",
        e.target,
        "hLoQWIQPxi39aZwxb"
      )
      .then(
        (result) => {
          console.log("result===>>>", result);
          if (result.status === 200) {
            // Clear the state after successful email sending
            setSubmissionStatus("success");
            alert("Your message has been submitted successfully");
            setFormData(initialState);
            setRecaptchaValue(null);
          }
        },
        (error) => {
          console.log(error.text);
          setSubmissionStatus("error");
        }
      );
  };

  useEffect(() => {
    if (submissionStatus === "success") {
      clearState();
      // window.location.reload(true);
    }
  }, [submissionStatus]);

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        className="form-control"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md"
                  // style={{ width: "760px", marginLeft: "15px" }}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name/Company Name"
                      value={formData.name}
                      required
                      onChange={handleChange}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>

                {/* Add reCAPTCHA component */}
                <ReCAPTCHA
                  sitekey="6LdcolQpAAAAADRFOLTPL5kKEcV2BXyJb6UtOqWx" // reCAPTCHA site key
                  onChange={handleRecaptchaChange}
                />
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a
                      href={props.data ? props.data.facebook : "/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.twitter : "/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={props.data ? props.data.linkedin : "/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i
                        className="fa fa-linkedin"
                        style={{ padding: "10px" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Website Developers and Designers in Vadodara, All Rights
            Reserved
            {/* <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
};
