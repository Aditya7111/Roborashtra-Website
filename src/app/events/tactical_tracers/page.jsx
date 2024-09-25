import React from "react";
import Image from "next/image";
import Btn2 from "@/components/Buttons/Btn2";
import Btn1 from "@/components/Buttons/Btn1";
import ImageLoader from "@/components/loader/Loader";




const CamWarrior = () => {
  const EventChar = "https://drive.google.com/uc?export=download&id=1vHHL4ZfmD18Egvo_Zr8UWChI6hyBqz3L"
  return (
    <ImageLoader>
    <div className="Event">
      <div className="Event-content tractical">
        <h1 className="EventTitle">Blaze Maze</h1>
        <p>
        Blaze Maze represents the ultimate robotic firefighting challenge, where teams use state-of-the-art technology to autonomously navigate a maze, identify simulated fires and accurately extinguish them. At the core of the competition is a brilliant fusion of robotics and firefighting expertise, as each team and independent robot is able to deftly and skillfully navigate a complex maze layout. Equipped with advanced sensors and advanced algorithms, the robot men quickly navigate through mazes and twists and turns looking for signs of fire. After detection, they take action and use special tools to fight the flames and prevent them from spreading. However, in the intense competition, teams face unexpected challenges similar to human firefighters - navigating narrow corridors, avoiding obstacles and optimizing firefighting strategies in real time. As the fire heats up, so does the excitement, as spectators witness a mesmerizing display of technology blending seamlessly with the ancient art of firefighting. Blaze Maze is not only a testament to human ingenuity, but also a sign of hope for the future of firefighting, where autonomous robots and innovative solutions pave the way for safer and more effective emergency response..
        </p>
        <div className="action_btn">
        <Btn2 link={"/BlazeMaze.pdf"}/>

          <Btn1 text={"Register"} link={"https://unstop.com/p/blaze-maze-challenge-roborashtra-2k24-pimpri-chinchwad-college-of-engineering-and-researchpccoer-pune-889781"} />
        </div>
      </div>
      <Image src={EventChar} alt="robowar" width={450} height={200} />
    </div>
    </ImageLoader>
  );
};

export default CamWarrior;
