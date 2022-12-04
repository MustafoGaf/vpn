import icon from "./logo.svg";
import "./App.css";
import burger from "./burger.svg";

function Header() {
  return (
    <div className=" bg-white ml-36 mt-9 mr-36 header__nav">
      <header className="flex justify-between items-center flex-wrap HeaderH">
        <div className="logo flex items-center">
          <img src={icon} alt="logo" />
        </div>
        <div className="link w-96" id="LinkDiv">
          <ul id="List" className="flex justify-between List">
            <li>
              <a href={"./"}>About</a>
            </li>
            <li>
              <a href={"./"}>Features</a>
            </li>
            <li>
              <a href={"./"}>Pricing</a>
            </li>
            <li>
              <a href={"./"}>Testimonials</a>
            </li>
            <li>
              <a href={"./"}>Help</a>
            </li>
          </ul>
        </div>
        <div id="Buttons" className="buttons flex items-center">
          <a href={"./"} className="font-bold mr-7 hover:text-red-900">
            Sign In
          </a>
          <a
            href={"./"}
            className=" mr-4 text-red-700 p-2 pl-6 pr-6 border border-red-900 font-bold border-solid rounded-full hover:bg-red-500 hover:text-white"
          >
            Sign Up
          </a>
        </div>

        <button onClick={Open} id="burger">
          <img src={burger} alt="" className="burger" />
        </button>
      </header>
    </div>
  );
}

function Open() {
  document.getElementById("LinkDiv").classList.toggle("Active");
  document.getElementById("Buttons").classList.toggle("Active");
}
export default Header;
