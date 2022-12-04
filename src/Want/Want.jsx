import icon from "./logo2.svg";
import "./Want.css";
function Want() {
  return (
    <div className=" bg-white ml-36 mt-9 mr-20 flex Want">
      <div className=" w-3/6 mt-10">
        <h1 className="text-5xl mb-7 HeadingW">
          Want anything to be easy with <strong>LaslesVPN</strong>
        </h1>
        <p className="text-base descriptionW">
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </p>
        <button className="text-center button__get pb-3 pt-3 pl-8 pr-8  text-base rounded-md text-white">
          Get Started
        </button>
      </div>
      <div className="right">
        <img src={icon} alt="" />
      </div>
    </div>
  );
}

export default Want;
