import "./work.scss";
import {useState } from "react";

export default function Works() {
  const[currentSlide, setCurrentSlide]=useState(0);
  const data = [
  {
    id:"1",
    icon:"./assets/email.png",
    title: "Web Design",
    desc:"Building mobile applications that enhance user experience and functionality.",
    img: "./assets/mobile.PNG"


  },
  
  {
    id:"2",
    icon:"./assets/email.png",
    title: "Mobile Design",
    desc:"Building mobile applications that enhance user experience and functionality",
    img: "./assets/mobile.PNG"


  },
  {
    id:"3",
    icon:"./assets/person.png",
    title: "Branding",
    desc:"Creating visually compelling graphics and branding assets.",
    img: "./assets/banking.PNG"


  },
];
const handleClick = (direction) => {
  direction === "left"
   
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2):
  
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  
};

  return (
    <div className="works" id="works">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        
        {data.map((item) => (
          <div className="container">
             
            <div className="item">
              <div className="left">
                <div className="leftcontainer">
                  <div className="imgcontainer">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc} </p>
                    <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          
          </div>))}
        </div>
        <img src="assets/arrow.png" className="arrow left" alt=""  onClick={() => handleClick("left")}/>
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")}/>
    </div>
  )
}
