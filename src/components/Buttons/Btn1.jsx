import React from "react";
import "./Btn1.css";
import Link from "next/link";

const Btn1 = ({ text, style, link }) => {
  return (
    <Link href={link} rel="noopener noreferrer" target="_blank">
      <div className="btn1_wrapper" style={style}>
        <div className="btn1_bar1"></div>

        <div className="btn1"></div>
        <span className="btn1_content">{text}</span>
        <div className="btn1_bar"></div>
      </div>
    </Link>
  );
};

export default Btn1;
