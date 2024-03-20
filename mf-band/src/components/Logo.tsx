
import BandLogo from "../assets/images/logo-inverted.png";
const Logo = () => {
  return (
    <div className="flex items-center p-2 gap-2 ">
      <img src={BandLogo} className="w-[50px]" />
      <div className="font-bold text-2xl">
        mf: <span className="text-rose-500">band</span>{" "}
      </div>
    </div>
  );
};

export default Logo;
