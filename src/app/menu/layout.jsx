import MenuBar from "@/components/Menu/MenuBar";
import "./menu.css";
import Nav from "@/components/Nav/Nav";
import ImageLoader from "@/components/loader/Loader";


import bell from "./bell.png";

export const metadata = {
  title: "Roborashtra",
  description:
    "Experience the thrill of Roborashtra, an inter-college robotics extravaganza organized by Pimpri Chinchwad College of Engineering and Research (PCCOER). Compete in exciting events like Robowar and Cam Warrior for a chance to win prizes worth 2 lakh rupees. Don't miss the opportunity to showcase your innovation and engineering skills. ",
};

export default function MenuLayout({ children }) {

  



  return (
    <ImageLoader>
    <div className="menu_mob">
      <div className="menu_nav">
    <Nav />
    </div>
      <div className="Menu_wrapper">
        <div>{children}</div>
        <div className="Menu_bar">
          <MenuBar />

          {/*  notification MenuBar */}
          
          {/* <div className="wrapper">
            <svg className="bell" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 14" style={{ enableBackground: "new 0 0 14 14" }} xmlSpace="preserve">
              <g>
                <path fill="goldenrod" d="M12.9,1.9l0.4-0.4c0.2-0.2,0.2-0.6,0-0.8c-0.2-0.2-0.6-0.2-0.8,0l-0.4,0.4C11.2,0.4,10.2,0,9.1,0c-1.5,0-3,0.7-4.2,1.9c-1.4,1.4-2.3,1.4-3,1.5c-0.5,0-1,0.1-1.4,0.5C0.1,4.2,0,4.7,0,5.1C0,5.6,0.2,6,0.6,6.4l7.1,7.1C8,13.8,8.5,14,8.9,14c0.4,0,0.9-0.2,1.2-0.5c0.4-0.4,0.5-1,0.5-1.4c0.1-0.7,0.1-1.6,1.5-3C14.3,6.9,14.6,4,12.9,1.9z M2.7,13.3c0.9,0.9,2.4,0.9,3.3,0L2.7,10C1.7,10.9,1.7,12.4,2.7,13.3z" />
              </g>
            </svg>
          </div> */}
          


        </div>
      </div>
    </div>
    </ImageLoader>
  );
}
