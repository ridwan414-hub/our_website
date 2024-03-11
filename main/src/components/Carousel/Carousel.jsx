import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Carousel.css'; // Import your CSS file

const AnimatedText = () => {
  const [textLines, setTextLines] = useState([]);
  const fullText = "Calligraphy is the art of turning letters into visual music, where the rhythm of strokes creates a composition that resonates in the eyes of the beholder";

  useEffect(() => {
    const lines = fullText.split('\n');
    let index = 0;

    const interval = setInterval(() => {
      setTextLines((prevLines) => {
        if (index < lines.length) {
          return [...prevLines, lines[index++]];
        } else {
          clearInterval(interval);
          return prevLines;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-text-container">
      {textLines.map((line, index) => (
        <h1 key={index} className="font-styl text-[30px] w-[42rem] mt-[190px] pl-[200px] pb-[20px] animated-text">{line}</h1>
      ))}
    </div>
  );
};

const Carousel = () => {
  return (
    <>
      <div className="pt-5 pl-5 bg-[linear-gradient(to_right,_#076585,_#fff)]">
        <div className="flex flex-col justify-center">
          <div className="mx-auto pt-8 border rounded-lg p-9 max-w-max bg-blue-200 bg-opacity-20 border-black">
            <h1 className="font-styl italic text-5xl">Featured Products</h1>
          </div>
          <div className="flex-grow flex">
            <div className="carousel w-1/2 left-8 max-h-[600px]">
          
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="../../Images/wall-frames/FB_IMG_1708512501351.jpg"
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
            <div className="w-1/2 animated-text-container">
              <AnimatedText />
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Carousel;
