const Banner = () => {
  return (
    <>
      <section className="flex justify-between max-h-fit p-4 m-auto">
        <div className="w-1/2">
          <h4>Super Value Deals!</h4>
          <h1 className="italic font-medium pb-3 pt-12">&quot;Elegance in Every Stroke&quot;</h1>
          <h2 className="font-mono pt-12 pb-6">
            <strong className="font-mono text-violet-700">Shop</strong> Handcrafted Calligraphy Here!
          </h2>
          <p>Save More with Coupons and Flash Sales (Upto 70%)</p>
          <div className="relative bottom-7 left-2">
            <img
              src="../../../Images/button-01-01-01-01.png"
              className="w-48"
              alt=""
            />
            <span className="text-lg font-bold relative bottom-[90px] left-[54px] ">
              Shop Now
            </span>
          </div>
        </div>
        <div className="">
          <img
            src="../../../Images/FB_IMG_1708512680043.jpg"
            alt="img"
            className="h-[500px]"
          />
        </div>
      </section>
    </>
  );
};

export default Banner;
