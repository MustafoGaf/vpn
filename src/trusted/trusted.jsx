import "./trusted.css";
import user1 from "./user.svg";
import user2 from "./user2.svg";
import user3 from "./user3.svg";
import val from "./val.svg";
import elips from "./point.svg";
import brak from "./brak.svg";

function Trusted() {
  return (
    <div className=" bg-white flex flex-col  justify-around pt-20 mb-44">
      <div>
        <div className="text-center items-center flex flex-col mb-32">
          <h1 className="text-3xl font-bold w-96 mb-5 text-center">
            Trusted by Thousands of Happy Customer
          </h1>
          <p className="text-base text-neutral-600 w-96 text-center mb-12">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
      </div>
      <div id="cards" className="cardsTR flex overflow-x-scroll mb-10">
        <div className="cardTR cardTR1 w-1/3 ml-44">
          <div className="card__header flex">
            <div className="card__img w-10">
              <img src={user1} alt="" />
            </div>
            <div className="card__userName w-40 ml-6">
              <h1 className="font-bold  text-lg">Viezh Robert</h1>
              <p className="text-neutral-600  text-sm mb-5">Warsaw, Poland</p>
            </div>
            <div className="card__val flex w-4 items-center mr-6">
              <p className=" text-sm mr-3">4.5</p>
              <img src={val} alt="" />
            </div>
          </div>
          <div className="card__description mt-6">
            <p className=" text-sm leading-6">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
        </div>
        <div className="cardTR w-1/3">
          <div className="card__header flex">
            <div className="card__img w-10">
              <img src={user2} alt="" />
            </div>
            <div className="card__userName w-40 ml-6">
              <h1 className="font-bold  text-lg">Yessica Christyt</h1>
              <p className="text-neutral-600  text-sm mb-5">Shanxi, China</p>
            </div>
            <div className="card__val flex w-4 items-center mr-6">
              <p className=" text-sm mr-3">4.5</p>
              <img src={val} alt="" />
            </div>
          </div>
          <div className="card__description mt-6">
            <p className=" text-sm leading-6">
              “I like it because I like to travel far and still can connect with
              high speed.”.
            </p>
          </div>
        </div>
        <div className="cardTR w-1/3">
          <div className="card__header flex">
            <div className="card__img w-10">
              <img src={user3} alt="" />
            </div>
            <div className="card__userName w-40 ml-6">
              <h1 className="font-bold  text-lg">Kim Young Jou</h1>
              <p className="text-neutral-600  text-sm mb-5">
                Seoul, South Korea
              </p>
            </div>
            <div className="card__val flex w-4 items-center mr-6">
              <p className="text-sm mr-3">4.5</p>
              <img src={val} alt="" />
            </div>
          </div>
          <div className="card__description mt-6">
            <p className=" text-sm leading-6">
              “This is very unusual for my business that currently requires a
              virtual private network that has high security.”.
            </p>
          </div>
        </div>
        <div className="cardTR w-1/3">
          <div className="card__header flex">
            <div className="card__img w-10">
              <img src={user3} alt="" />
            </div>
            <div className="card__userName w-40 ml-6">
              <h1 className="font-bold  text-lg">Kim Young Jou</h1>
              <p className="text-neutral-600  text-sm mb-5">
                Seoul, South Korea
              </p>
            </div>
            <div className="card__val flex w-4 items-center mr-6">
              <p className="text-sm mr-3">4.5</p>
              <img src={val} alt="" />
            </div>
          </div>
          <div className="card__description mt-6">
            <p className=" text-sm leading-6">
              “This is very unusual for my business that currently requires a
              virtual private network that has high security.”.
            </p>
          </div>
        </div>
        <div className="cardTR w-1/3">
          <div className="card__header flex">
            <div className="card__img w-10">
              <img src={user3} alt="" />
            </div>
            <div className="card__userName w-40 ml-6">
              <h1 className="font-bold  text-lg">Kim Young Jou</h1>
              <p className="text-neutral-600  text-sm mb-5">
                Seoul, South Korea
              </p>
            </div>
            <div className="card__val flex w-4 items-center mr-6">
              <p className="text-sm mr-3">4.5</p>
              <img src={val} alt="" />
            </div>
          </div>
          <div className="card__description mt-6">
            <p className=" text-sm leading-6">
              “This is very unusual for my business that currently requires a
              virtual private network that has high security.”.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="left flex w-40">
          <img src={elips} alt="" id="activ2" className=" w-3 ml-4" />
          <img src={brak} alt="" id="activ1" className=" w-8 ml-4" />
          <img src={elips} alt="" id="activ3" className=" w-3 ml-4" />
        </div>
        <div className="rightT flex">
          <button
            onClick={Click1}
            className="button1 flex justify-center items-center mr-8"
          >
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="button__img"
                d="M18.75 8.00291H3.925L8.4625 2.55291C8.67467 2.29764 8.77675 1.96854 8.74628 1.638C8.7158 1.30747 8.55527 1.00258 8.3 0.790408C8.04473 0.578235 7.71563 0.476157 7.3851 0.506632C7.05456 0.537107 6.74967 0.697637 6.5375 0.952908L0.2875 8.45291C0.245451 8.51256 0.207849 8.57523 0.175 8.64041C0.175 8.70291 0.175 8.74041 0.0875002 8.80291C0.0308421 8.94623 0.0011764 9.0988 0 9.25291C0.0011764 9.40702 0.0308421 9.55958 0.0875002 9.70291C0.0875002 9.76541 0.0874998 9.80291 0.175 9.86541C0.207849 9.93058 0.245451 9.99325 0.2875 10.0529L6.5375 17.5529C6.65503 17.694 6.8022 17.8075 6.96856 17.8853C7.13491 17.963 7.31636 18.0032 7.5 18.0029C7.79207 18.0035 8.07511 17.9018 8.3 17.7154C8.42657 17.6105 8.5312 17.4816 8.60789 17.3362C8.68458 17.1907 8.73183 17.0316 8.74692 16.8679C8.76202 16.7042 8.74466 16.5391 8.69586 16.3821C8.64705 16.2251 8.56775 16.0792 8.4625 15.9529L3.925 10.5029H18.75C19.0815 10.5029 19.3995 10.3712 19.6339 10.1368C19.8683 9.90237 20 9.58443 20 9.25291C20 8.92139 19.8683 8.60345 19.6339 8.36902C19.3995 8.1346 19.0815 8.00291 18.75 8.00291Z"
                fill="#F53838"
              />
            </svg>
          </button>
          <button
            onClick={Click2}
            className="button1 flex justify-center items-center"
          >
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="button__img"
                d="M1.25 8.00291H16.075L11.5375 2.55291C11.3253 2.29764 11.2232 1.96854 11.2537 1.638C11.2842 1.30747 11.4447 1.00258 11.7 0.790408C11.9553 0.578235 12.2844 0.476157 12.6149 0.506632C12.9454 0.537107 13.2503 0.697637 13.4625 0.952908L19.7125 8.45291C19.7545 8.51256 19.7922 8.57523 19.825 8.64041C19.825 8.70291 19.825 8.74041 19.9125 8.80291C19.9692 8.94623 19.9988 9.0988 20 9.25291C19.9988 9.40702 19.9692 9.55958 19.9125 9.70291C19.9125 9.76541 19.9125 9.80291 19.825 9.86541C19.7922 9.93058 19.7545 9.99325 19.7125 10.0529L13.4625 17.5529C13.345 17.694 13.1978 17.8075 13.0314 17.8853C12.8651 17.963 12.6836 18.0032 12.5 18.0029C12.2079 18.0035 11.9249 17.9018 11.7 17.7154C11.5734 17.6105 11.4688 17.4816 11.3921 17.3362C11.3154 17.1907 11.2682 17.0316 11.2531 16.8679C11.238 16.7042 11.2553 16.5391 11.3041 16.3821C11.3529 16.2251 11.4322 16.0792 11.5375 15.9529L16.075 10.5029H1.25C0.91848 10.5029 0.600536 10.3712 0.366116 10.1368C0.131695 9.90237 0 9.58443 0 9.25291C0 8.92139 0.131695 8.60345 0.366116 8.36902C0.600536 8.1346 0.91848 8.00291 1.25 8.00291Z"
                fill="red"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function Click1() {
  document.getElementById("activ2").style.display = "none";
  document.getElementById("activ3").style.display = "block";
}
function Click2() {
  document.getElementById("activ2").style.display = "block";
  document.getElementById("activ3").style.display = "none";
}

export default Trusted;
