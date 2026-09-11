import image from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="mx-auto container">
      <div className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-center">
        <div className="flex flex-col gap-6 lg:pr-40 justify-center items-center lg:items-start">
          <div className="leading-[0.95]">
            <h1 className="font-main font-extrabold text-[60px] tracking-[-1.5px]">
              Build Your Ideal
            </h1>
            <h1 className="font-main font-extrabold text-[60px] tracking-[-1.5px] bg-gra bg-clip-text text-transparent">
              Development Stack
            </h1>
          </div>

          <p className="font-main text-[18px] text-[#475569]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex gap-3">
            <button className="w-42.5 rounded-xl px-4 py-3 bg-gradient-button text-[14px] text-white cursor-pointer">Explore Technologies</button>
            <button className="w-42.5 rounded-xl px-4 py-3 border border-[#E5E7EB] border-solid text-[14px] text-[#374151] cursor-pointer">Learn More</button>
          </div>
        </div>
        <img src={image} alt="HERO SECTION IMAGE" />
      </div>
    </div>
  );
};

export default Hero;
