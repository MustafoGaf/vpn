import inst from "./inst.svg";
import facebook from "./facebook.svg";
import twiter from "./twiter.svg";
import "./footer.css";
import Logo from "./logo.svg";
function Footer() {
  return (
    <div>
      <div className=" footer flex justify-center items-center relative pt-36 ">
        <div className=" sub flex justify-around items-center h-48   shadow shadow-black bg-white absolute ml-36 mt-9 mr-36 ">
          <div className=" w-96 TextSub">
            <h1 className=" text-4xl font-bold">
              Subscribe Now for Get Special Features!
            </h1>
            <p className=" text-sm text-slate-400">
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <div>
            <button className="button__footer pb-4 pt-4 pl-16 pr-16 text-base text-white">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      <footer className="footerF pr-36 pl-36 flex">
        <div className="Div1 w-80 mr-52">
          <img src={Logo} alt="" className=" mb-6" />
          <p className=" text-sm text-slate-400 mb-8">
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </p>
          <div className="sotset flex mb-6 ">
            <a href="./">
              <img src={facebook} alt="" className=" hover:shadow-xl" />
            </a>
            <a href={"./"}>
              <img src={twiter} alt="" className=" hover:shadow-xl" />
            </a>
            <a href="./">
              <img src={inst} alt="" className=" hover:shadow-xl" />
            </a>
          </div>
          <p className=" text-sm text-slate-400">©2020LaslesVPN</p>
        </div>

        <div className="Div1">
          <h1 className=" text-lg font-bold mb-3">Product</h1>
          <ul>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href={"http:./gjfdkjgjrhtjkrff"}
              >
                Download{" "}
              </a>
            </li>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href={"mnb"}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href={"#/2"}
              >
                Locations
              </a>
            </li>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href="./"
              >
                Server
              </a>
            </li>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href="./"
              >
                Countries
              </a>
            </li>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href="./"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="Div2">
          <h1 className=" text-lg font-bold mb-3">Engage</h1>
          <ul>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href={"http:./gjfdkjgjrhtjkrff"}
              >
                LaslesVPN ?
              </a>
            </li>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href={"mnb"}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href={"#/2"}
              >
                Tutorials
              </a>
            </li>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href="./"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href="./"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href="./"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className="Div3">
          <h1 className=" text-lg font-bold mb-3">Earn Money</h1>
          <ul>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href="./"
              >
                Affiliate
              </a>
            </li>
            <li>
              <a
                className="text-base text-slate-400  hover:text-slate-900"
                href="./"
              >
                Become Partner
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
