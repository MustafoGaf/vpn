import "./hoge.css";
import map from "./logo.svg";
import col from "./logo2.svg";
function Hoge() {
  return (
    <div className=" bg-slate-50 flex  justify-around pt-20">
      <div>
        <div className="text-center items-center flex flex-col mb-32">
          <h1 className="text-3xl font-bold w-96 mb-5 text-center">
            Huge Global Network of Fast VPN
          </h1>
          <p className="text-base text-neutral-600 w-96 text-center mb-12">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
        </div>
        <div className="map mr-40 ml-40 mb-24">
          <img src={map} alt="" />
        </div>
        <div className=" ml-36 mr-36">
          <img src={col} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hoge;
