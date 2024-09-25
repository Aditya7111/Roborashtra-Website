"use client";
import React from "react";
import {useState, useEffect} from "react";
import Image from 'next/image';
import Card from "../../components/Card/Card";
import "./events.css";
import { ImCross } from "react-icons/im";
import Btn1 from "@/components/Buttons/Btn1";

import popUpimage from "@/images/POP UP.png"
const events = [
  {
    title: "Steel Soldier Slam",       
    desc: "Step into the exciting world of Steel Soldier !..",
    link: "/events/robowar",
    image: "event1.svg",
  },
  {
    title: "Cam Warrior",
    desc: "Welcome to CamWarriors, an exciting...",
    link: "/events/cam_warrior",
    image: "event2.svg",
  },
  {
    title: "ResQlympic",
    desc: "Welcome to Resqlympic, where robots...",
    link: "/events/resqlimpic",
    image: "event3.svg",
  },
  {
    title: "Blaze Maze",
    desc: "Welcome to Blaze Maze, an arena where...",
    link: "/events/tactical_tracers",
    image: "event4.svg",
  },
];
const Cards = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(true);
  useEffect(() => {
    // If you want to show the popup only once:
     localStorage.setItem('popupShown', true);
     if (!localStorage.getItem('popupShown')) {
       setIsPopUpVisible(true);
     }
  }, []);
  const calculateTimeLeft = () => {
    const endDate = new Date("2024-03-28");
    const difference = endDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="timer-card">
        <span className="timer-number">{timeLeft[interval]}</span>
        <span className="timer-label">{interval}</span>
      </div>
    );
  });
  const [isNotiVisible, setIsNotiVisible] = useState(false);
  useEffect(() => {
    // If you want to show the popup only once:
     localStorage.setItem('popupShown', false);
     if (!localStorage.getItem('popupShown')) {
       setIsNotiVisible(false);
     }
  }, []);
  return (
    <>
    <div className="popUp" style={{ display: isPopUpVisible ? 'grid' : 'none' }}>
      <div className="closeBtn" onClick={() => setIsPopUpVisible(false)}>
        <ImCross />
      </div>
      <Image src={popUpimage} alt="" srcset="" />
      </div>    
    <div className="Container" style={{ display: isPopUpVisible ? 'none' : 'grid' }}>
    <div className="Events">
      {events.map((event) => {
        return (
          <Card
            key={event.title}
            title={event.title}
            desc={event.desc}
            link={event.link}
            image={event.image}
          />
        );
      })}
    </div>
    
    <div className="countdown-container">
      <h1>Witness Innovation Take Flight: RoboRashtra 2024!</h1>
      <div className="timer-container">
      {timerComponents.length ? timerComponents : <span>Times up!</span>}
      </div>
    </div>
      </div>
   {/*  notification MenuBar */}
          
   <div className="bellwrapper">
   <div className="Notitext" style={{ display: isNotiVisible ? 'grid' : 'none' }}>
              <p>Early Bird offer extended to 29 feb</p>
            </div>
            <svg className="bell" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 14" style={{ enableBackground: "new 0 0 14 14" }} xmlSpace="preserve" onClick={() => setIsNotiVisible(prevState => !prevState)}>
              <g>
                <path fill="goldenrod" d="M12.9,1.9l0.4-0.4c0.2-0.2,0.2-0.6,0-0.8c-0.2-0.2-0.6-0.2-0.8,0l-0.4,0.4C11.2,0.4,10.2,0,9.1,0c-1.5,0-3,0.7-4.2,1.9c-1.4,1.4-2.3,1.4-3,1.5c-0.5,0-1,0.1-1.4,0.5C0.1,4.2,0,4.7,0,5.1C0,5.6,0.2,6,0.6,6.4l7.1,7.1C8,13.8,8.5,14,8.9,14c0.4,0,0.9-0.2,1.2-0.5c0.4-0.4,0.5-1,0.5-1.4c0.1-0.7,0.1-1.6,1.5-3C14.3,6.9,14.6,4,12.9,1.9z M2.7,13.3c0.9,0.9,2.4,0.9,3.3,0L2.7,10C1.7,10.9,1.7,12.4,2.7,13.3z" />
              </g>
            </svg>
          </div>      
      
 
  </>

  );
};

export default Cards;