

const Carousel = () => {
  return (
    <>
      <div className="pt-6 pl-12 flex bg-[linear-gradient(to_right,_#f7ff00,_#db36a4)]">
        <div className="carousel w-3/5 left-8 max-h-[600px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="../../Images/wall-frames/FB_IMG_1708512501351.jpg"
              className="w-full "
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
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
              className="w-full"
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
              className="w-full"
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
        <div>
          <h1 className="text-5xl p-48">Eye Soothing</h1>
        </div>
      </div>
    </>
  );
};

export default Carousel;