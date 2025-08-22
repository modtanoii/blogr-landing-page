const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white mt-28">
      <h1 className="text-[36px] font-overpass text-center leading-12">
        A modern <br />
        publishing platform
      </h1>
      <p className="font-overpass text-[19px] mt-2 text-gray-300 text-center leading-6">
        Grow you audience and build your <br />
        online brand
      </p>
      <div className="flex justify-center gap-4 mt-9 p-2">
        <div>
          <button className="bg-white text-red-400 font-bold rounded-4xl p-3 w-35">
            Start for Free
          </button>
        </div>
        <div>
          <button className="border border-white font-bold rounded-4xl p-3 w-35">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
