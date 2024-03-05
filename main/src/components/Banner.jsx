import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="flex justify-between max-h-fit p-4 m-auto bg-[linear-gradient(to_right,_#A6FFCB,_#12D8FA,_#1FA2FF)]">
        <div className="w-1/2">
          <h4 className="text-xl text-[#222]">Super Value Deals!</h4>
          <h1 className="italic font-medium pb-3 pt-12 text-[50px] leading-[64px] text-[#222]">
            &quot;Elegance in Every Stroke&quot;
          </h1>
          <h2 className="font-sans pt-8 pb-6 text-[46px] leading-[54px] text-[#222]">
            <strong className="font-mono text-violet-700">Shop</strong>{' '}
            Handcrafted Calligraphy Here!
          </h2>
          <p className="text-base text-[#465b52] mt-[15px] mb-5 mx-0;">
            Save More with Coupons and Flash Sales (Upto 70%)
          </p>
          <div className="relative bottom-7 left-2">
            <img
              src="../../../Images/button-01-01-01-01.png"
              className="w-48"
              alt=""
            />
            <Link>
              <span className="text-lg font-bold relative bottom-[90px] left-[54px]">
                Shop Now
              </span>
            </Link>
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
