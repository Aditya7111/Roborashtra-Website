import React from "react";
import Image from "next/image";
import EventChar from "../../../images/Char2.png";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
import ImageLoader from "@/components/loader/Loader";
import "./cam_warrior.css"

const CamWarrior = () => {
  return (
    <ImageLoader>
    <div className="Event animatedDiv">
      <div className="Event-content camWarrior">
        <h1 className="EventTitle">CAMWARRIOR</h1>
        <p>Get ready to soar to new heights at our exhilarating drone competition! Join us for a thrilling event where participants showcase their piloting skills in a series of rounds designed to challenge the drone enthusiasts. With each round presenting unique obstacles and tasks, contestants will maneuver their drones with precision and agility, aiming to outperform their rivals and claim victory. Dont miss out  for an unforgettable action-packed spectacle as pilots showcase their talent and push the boundaries of aerial excellence!!
        </p> 
        <div className="action_btn">
          <Btn2 link={"/camwarrior.pdf"}/>
          <Btn1 text={"Register"} link={"https://unstop.com/p/cam-warriors-roborashtra-2k24-pimpri-chinchwad-college-of-engineering-and-researchpccoer-pune-889670"} />
        </div>
        </div>
      <Image src={EventChar} alt="robowar" width={500} height={200} />
    </div>
    
    </ImageLoader>
  );
};

export default CamWarrior;
