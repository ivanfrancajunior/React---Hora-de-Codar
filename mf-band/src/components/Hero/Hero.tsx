import BgImage from "../../assets/images/hero2.jpg";
import LogoImage from "../../assets/images/logo.png";
const Hero = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-[400px] h-[calc(100vh-200px)] bg-cover bg-center bg-fixed bg-no-repeat`}
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className=" bg-white/10 p-4 rounded-xl backdrop-blur-md  flex flex-col items-center justify-center mx-auto ">
        <div className="relative">
          <img src={LogoImage} alt="logo-image" width={175} />
          <div className="flex items-center justify-center mb-5 mt-[-70px]">
            <div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center gap-1">
              <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-100"></div>
              <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-200"></div>
              <div className="h-4 w-1 bg-pink-100 rounded-full animate-wavey animation-delay-300"></div>
              <div className="h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-200"></div>
              <div className="h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-100"></div>
            </div>
          </div>
        </div>

        <div className="text-5xl font-bold text-center text-white">
          <span>mf</span>:<span className="text-pink-500">band</span>
        </div>
      </div>
      <div>
        <p className="text-white text-center mt-3 ">
          Keep me updated with the latest news and events.
        </p>
      </div>
      <div className="mt-3 flex gap-2 ">
        <input
          type="text"
          placeholder="Enter your email"
          className="rounded-md p-2 border border-white/40 bg-white/30 text-sky-900 placeholder-zinc-300 caret-pink-500 outline-pink-500"
        />
        <div>
          <button className="bg-pink-500 rounded-md py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
