import React from "react";
import Image from "next/image";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
import ImageLoader from "@/components/loader/Loader";
const CamWarrior = () => {
  const EventChar = "https://drive.google.com/uc?export=download&id=1jL-8j78OoS_rveAEXH4Gq4TTwdlzounB"
  return (
    <ImageLoader>
    <div className="Event">
      <div className="Event-content resq">
      <h1 className="EventTitle">ResQlympic</h1>
        <p>
        It is your chance to showcase your skills. We bring you a competition that will test your navigation skills along with your robot-building capabilities. You have to build a robot such that it can grab the victims and relocate them to a safe location without causing any harm to any of the victims. You will have to navigate the arena to find the victims. But, here is the catch, among other obstacles, there will be mines present. The mine goes off in 2 minutes, and you have two minutes to rescue the hostages, if u need more time, find the switches and disable the mines. You get a maximum of 10 minutes, the choice of the hostages and mines is up to you. Your decision-making skill is your ultimate tool.
        </p>
        <div className="action_btn">
          <Btn2 link={"/resqlympics.pdf"} />
          <Btn1 text={"Register"} link={"https://unstop.com/p/resqlympic-roborashtra-2k24-pimpri-chinchwad-college-of-engineering-and-researchpccoer-pune-889624"} />
        </div>
      </div>
      <Image src={EventChar} alt="robowar" width={400} height={200} />
    </div>
    </ImageLoader>
  );
};

export default CamWarrior;
