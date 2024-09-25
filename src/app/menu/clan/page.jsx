"use client";
import Image from "next/image";
import "./clan.css";
import sittedRobo from "../../../images/sittingRobo.png"
import instagram from "./icons/instagram.svg";
import facebook from "./icons/facebook.svg";
import linkedin from "./icons/linkedin.svg";
import twitter from "./icons/twitter.svg";
// import ImageSlider from "@/components/ImageSlider/ImageSlider";

export default function Clan() {

  return (
    <div className="clan">
      <h1 className="title">RoboHawk</h1>
      <p className="clan_text">
      Welcome to Robohawk, where innovation meets passion. Our student-driven Robotics Club at PCCOE&R under the guidance of Dr. Mahendra B. Salunke, is led by the dynamic leader Om Khare. Robohawk has successfully executed diverse projects, including 3D printing, various types of drone and various robotics projects. It offers students hands-on learning, team collaboration, and opens doors for students in the field of robotics.
      </p>
      {/* <ImageSlider /> */}

      <div className="social_media">
        <a href="https://www.instagram.com/robohawk.pccoer?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
          <Image src={instagram} alt="instagram" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61552083314105&mibextid=ZbWKwL">
          <Image src={facebook} alt="instagram" />
        </a>

        <a href="https://www.linkedin.com/in/robo-hawk-510206293/">
          <Image src={linkedin} alt="instagram" />
        </a>
        <a href="https://twitter.com/robohawk_pccoer?t=UdhKVAhcpMhn1Bl9zYw7QQ&s=09">
          <Image src={twitter} alt="instagram" />
        </a>
      </div>
      <div className="sittingRobo">
      <Image src={sittedRobo} alt="" srcset="" />
      </div>
    </div>
  );
}
