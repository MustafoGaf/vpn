import "./provid.css";
import providLog from "./logo1.svg";
import Chek from "./logo2.svg";
function provide() {
  return (
    <div className=" bg-white ml-36 mr-36 flex mt-28 justify-around Provid">
      <div className="leftP">
        <img src={providLog} alt="" />
      </div>
      <div className="rightP mt-32 ml-8">
        <h1 className="text-3xl font-bold w-96 mb-5 HeadingP">
          We Provide Many Features You Can Use
        </h1>
        <p className="text-base text-neutral-600 w-96 mb-5 DescriptionP">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul>
          <li className="flex mb-4">
            <img src={Chek} alt=""></img>
            <p className="text-neutral-600 text-sm">
              Powerfull online protection.
            </p>
          </li>
          <li className="flex mb-4">
            <img src={Chek} alt=""></img>
            <p className="text-neutral-600 text-sm">
              Internet without borders.
            </p>
          </li>
          <li className="flex mb-4">
            <img src={Chek} alt=""></img>
            <p className="text-neutral-600 text-sm">Supercharged VPN</p>
          </li>
          <li className="flex mb-4">
            <img src={Chek} alt=""></img>
            <p className="text-neutral-600 text-sm">No specific time limits.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default provide;
