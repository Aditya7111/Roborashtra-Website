import React from "react";
import "./Btn3.css";

const Btn3 = ({ link }) => {
  return (
    <a href={link}>
      <button className="btn" style={{ color: "white" }}>
        Explore
      </button>
    </a>
  );
};

export default Btn3;
