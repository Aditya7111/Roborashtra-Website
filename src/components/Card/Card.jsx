'use client';
import React from "react";

import "./Card.css";
import Image from "next/image";
import Btn2 from "../Buttons/Btn3";
const Card = ({ title, link, image, desc }) => {
  console.log(image);
  return (
    <div className="card-container">    <div className="Card">
      <Image src={image} width={312} height={210} class="before-element" alt={title} />

      <div className="headDesc">
        <h1>{title}</h1>
        <p className="desc">
          {desc}
          <Btn2 link={link} />
        </p>
      </div>
    </div>
    </div>

  );
};

export default Card;
