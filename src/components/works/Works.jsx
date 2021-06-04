import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "/assets/globe.png",
      title: "Web Application",
      desc: "React, Redux, TypeScript, Next.js, GraphQL, Node, Express, NoSQL/SQL, and AWS",
      img: "https://miro.medium.com/max/2560/1*rvGT0t8QWinxdNbtWfOkaw.png?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc: "React Native",
      img: "https://miro.medium.com/max/1050/1*e9kB0lrzur0Gfv4XKH5_Ng.jpeg?auto=format&q=60&fit=max&w=930",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={
                    d.img
                      ? d.img
                      : "https://miro.medium.com/max/2208/1*cKmzD1G7LUUS2XlDpI5m2Q.gif"
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
