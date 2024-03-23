import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Carousel.css'; // Import your CSS file

const AnimatedText = () => {
  const [textLines, setTextLines] = useState([]);
  const fullText = "Calligraphy: where ink meets inspiration";

  useEffect(() => {
    const lines = fullText.split('\n');
    setTextLines(lines);
  }, []);

  return (
    <div className="animated-text-container">
      {textLines.map((line, lineIndex) => (
        <div key={lineIndex} className="animated-text-line">
          <span className="animated-text">
            {line}
          </span>
        </div>
      ))}
    </div>
  );
};



const Carousel = () => {
  return (
    <>
      <div className="pb-[100px] pt-5 pl-5 bg-[linear-gradient(to_right,_#076585,_#fff)]">
        <div className="flex flex-col justify-center">
          <div className="mx-auto pt-8 border rounded-lg p-9 max-w-max bg-blue-200 bg-opacity-20 border-black">
            <h1 className="font-styl italic text-5xl">Featured Products</h1>
          </div>
          <div className="flex-grow flex">
            <div className="carousel w-1/2 left-8 max-h-[600px]">
          
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="../../Images/wall-frames/FB_IMG_1708512592256.jpg"
                className="w-full mt-36 mb-3 rounded-xl"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="../../Images/wall-frames/FB_IMG_1708512925677.jpg"
                className="w-full mt-36 mb-3 rounded-xl"
              />
              <div className="absolute flex justify-between transform -translate-y-1/3 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="../../Images/wall-frames/FB_IMG_1708512899181.jpg"
                className="w-full mt-36 mb-3 rounded-xl"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="../../Images/wall-frames/FB_IMG_1708513037127.jpg"
                className="w-full mt-36 mb-3 rounded-xl"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="relative w-1/2 flex flex-col">
            <div className="animated-text-container">
              <AnimatedText />
            </div>
            <div className="w-1/2 absolute bottom-[0px] left-[220px] ">
            <img 
              src="../../../Images/button-01-01-01-01.png"
              className="w-65 opacity-40  "
              alt=""
            />
            <Link>
              <span className="text-2xl font-styl font-bold relative bottom-[165px] left-[135px] text-[#154748fd] show-more-button">
                Show More !!
              </span>
            </Link>
          </div>
            
            </div>
          </div>
          
        </div>
        </div>
    </>
  );
};

export default Carousel;
