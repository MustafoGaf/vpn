import "./choos.css";
import Box from "./logo.svg";
import chek from "./logo2.svg";
function Choose() {
  return (
    <div className=" bg-slate-50 flex mt-28 justify-center pt-20 pb-7">
      <div>
        <div className="text-center items-center flex flex-col">
          <h1 className="text-3xl font-bold w-96 mb-5 text-center">
            Choose Your Plan
          </h1>
          <p className="text-base text-neutral-600 w-96 text-center mb-12">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className="cards flex gap-8 flex-wrap">
          <div className="card1 card__choos w-80  flex flex-col justify-start relative ">
            <div className="flex justify-center mt-20">
              <img src={Box} alt="" className="w-36 text-center mb-7" />
            </div>
            <h1 className="text-lg font-bold text-center mb-7">Free Plan</h1>
            <ul className=" pl-16">
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Unlimited Bandwitch</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Encrypted Connection</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">No Traffic Logs</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Works on All Devices</p>
              </li>
            </ul>
            <div className="price text-center absolute bottom-8 left-20">
              <h1 className=" text-xl font-bold mb-4">Free</h1>
              <button className="font-bold button hover:text-white hover:bg-red-700">
                Select
              </button>
            </div>
          </div>
          <div className="card1 card__choos w-80  flex flex-col justify-start relative">
            <div className="flex justify-center mt-20">
              <img src={Box} alt="" className="w-36 text-center mb-7" />
            </div>
            <h1 className="text-lg font-bold text-center mb-7">
              Standard Plan
            </h1>
            <ul className=" pl-16">
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Unlimited Bandwitch</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Encrypted Connection</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">No Traffic Logs</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Works on All Devices</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Connect Anyware</p>
              </li>
            </ul>
            <div className="price text-center absolute bottom-8 left-20">
              <h1 className=" text-xl font-bold mb-4">
                $9 <span className=" text-slate-500 font-medium"> / mo</span>
              </h1>
              <button className="font-bold button hover:text-white hover:bg-red-700">
                Select
              </button>
            </div>
          </div>
          <div className="card1 card__choos w-80  flex flex-col justify-start relative">
            <div className="flex justify-center mt-20">
              <img src={Box} alt="" className="w-36 text-center mb-7" />
            </div>
            <h1 className="text-lg font-bold text-center mb-7">Free Plan</h1>
            <ul className=" pl-16">
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Unlimited Bandwitch</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Encrypted Connection</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">No Traffic Logs</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Works on All Devices</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Connect Anyware</p>
              </li>
              <li className="flex mb-2">
                <img src={chek} alt="" />
                <p className=" ml-4">Get New Features</p>
              </li>
            </ul>
            <div className="price text-center absolute bottom-8 left-20">
              <h1 className=" text-xl font-bold mb-4">
                $12 <span className=" text-slate-500 font-medium"> / mo</span>
              </h1>
              <button className="font-bold button hover:text-white hover:bg-red-700 hover:shadow-md">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
