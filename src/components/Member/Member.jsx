import React from "react";
import Image from "next/image";
import "./Member.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
const Member = ({ image, email, linkedIn }) => {
  return (
    <div className="Team_Member">
       <Image src={image} width={240} height={320} alt="member-position" /> 
        <div className="contactInfo text-center">
        <div className="email text-center">
          <a href={`mailto:${email}`}>
          <MdOutlineMailOutline />
          <p>Email</p>
          </a>
        </div>
        <div className="linkedIn text-center">
          <a href={linkedIn}  rel="noopener noreferrer" target="_blank" >
            <FaLinkedin />
            <p>LinkedIn</p>
          </a>
        </div>

       </div>
    </div>
  );
};

export default Member;