"use client";
// page 2 menu
import React from "react";
// importing buttons
import Button from "../Buttons/Btn1";
import Link from "next/link";
// all options for to navigate
const options = [
  { text: "EVENTS", link: "/menu" },
  { text: "Our Team", link: "/menu/teams" },
  { text: "Our Clan", link: "/menu/clan" },
  { text: "Sponsors", link: "/menu/sponsors" },
  { text: "Contact", link: "/menu/Contact" }
];

const MenuBar = () => {
  return (
    <div>
      {options.map((option) => {
        return (
          <Link href={option.link} key={option.text}>
            <Button
              key={option.text}
              style={{ margin: "1rem" }}
              text={option.text}
              link={option.link}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default MenuBar;
