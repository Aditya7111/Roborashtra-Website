"use client";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import './contact.css';

const ContactPage = () => {

  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal( !true );
  };

  const handleButtonClose = () => {
    setShowModal(false);
  };




  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9678c114-baea-4519-81f4-7c57e7970174");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        alert("Message Sent Sucessfully!...")
    }
}
  
  return (
    <div className="contact_wrapper text-3xl ">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="Name">
          <p>Name:</p>
          <input
            type="text"
            name="name"
            required
          />
        </div>
        <div className="emaiPhn">
          <div className="email">
            <p>Email:</p>
            <input
              type="email"
              name="email"
              required
            />
          </div>
          <div className="phnNo">
            <p>Phone No:</p>
            <input
              type="tel"
              name="phoneNumber"
              required
            />
          </div>
        </div>
        <div className="query">
          <p>Query:</p>
          <textarea
            className="query-box"
            rows={4}
            name="message"
            required
          ></textarea>
        </div>
        <div className="submitBtn">
          <button type="submit" onClick={handleButtonClick}>Submit</button>
        </div>
      </form>



      <p>Follow US ON</p>
      <div className="socialMedia flex row-auto gap-3">
        <a href="https://www.youtube.com/@RobohawkPCCOER"><FaYoutube /></a>
        <a href="https://www.linkedin.com/showcase/98926593/admin/feed/posts/"><FaLinkedin /></a>
        <a href="https://www.instagram.com/roborashtra.pccoer/?igsh=MzB4bW1kcnNuOGw1"><FaInstagram /></a>
        <a href="https://www.facebook.com/profile.php?id=61555881009876&mibextid=ZbWKwL"><FaFacebook /></a>
        <a href="https://twitter.com/robohawk_pccoer?t=hC53cUOhsLkE3kaTwc6TNQ&s=08"><FaTwitter /></a>
      </div>
    </div>
  );
};

export default ContactPage;
