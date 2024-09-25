import React from "react";
import Member from "@/components/Member/Member";
import "./sponsors.css";
import member1 from "./img/google.png";

const members = [
  // { img: member1,
  // img: member1, 
  // img: member1 }
];


  export default function Sponsors(){
    return(
    // <div className=" text-center text-lg">Coming Soon</div>
    <div className="team" style={{ }}>
       <div className="team_wrapper">
         <h3>Title Sponsors</h3>
         <p>Coming Soon</p>
         <div className="team_row">

           {members.map((member) => {
             return (
              <>
                 <Member name={member.name}/>
               </>
             );
           })}
           </div>


         <h3>Gold Sponsor</h3>
         <p>Coming Soon</p>
         <div className="team_row">
           {members.map((member) => {
             return (
               <>
                 <Member name={member.name} />
               </>
             );
           })}
         </div>

          <h3>Silver Sponsor</h3>
         <p>Coming Soon</p>
         <div className="team_row">
           {members.map((member) => {
             return (
               <>
                 <Member name={member.name} />
               </>
             );
           })}
         </div> 
       </div>
      </div> 
    );
}

