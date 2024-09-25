import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./EventMenu.css";
const events = [
  {
    title: "Steel Soldier Slam",
    link: "/events/robowar",
    image: "/event1.svg",
  },
  {
    title: "Cam Warrior",
    link: "/events/cam_warrior",
    image: "/event2.svg",
  },
  {
    title: "ResQlympic",
    link: "/events/resqlimpic",
    image: "/event3.svg",
  },
  {
    title: "Blaze Maze",
    link: "/events/tactical_tracers",
    image: "/event4.svg",
  },
];
const EventMenu = () => {
  return (
    <div className="EventMenu">
      {events.map((event) => {
        return (
          <Link href={event.link} key={event.title}>
            <div className="EventCard">
              <Image
                src={event.image}
                alt={event.title}
                width={200}
                height={200}
              />
              <div className="EventCardBg"></div>
              <h3>{event.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default EventMenu;
