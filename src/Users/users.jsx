import "./user.css";
import user from "./logo1.svg";
import loc from "./logo2.svg";
import ser from "./logo3.svg";
function User() {
  return (
    <div className="UsersDiv bg-white ml-36 mr-36 flex mt-28 justify-around p-7 shadow-xl">
      <div className="users flex border-r-2 pr-24">
        <img src={user} alt="" className="w-12" />
        <div className="ml-7">
          <h1 className="user__text text-xl">90+</h1>
          <p className="user__description text-xl">User</p>
        </div>
      </div>
      <div className="users flex border-r-2 pr-24">
        <img src={loc} alt="" className="w-12" />
        <div className="ml-7">
          <h1 className="user__text text-xl">30+</h1>
          <p className="user__description text-xl">Location</p>
        </div>
      </div>
      <div className="users flex pr-24">
        <img src={ser} alt="" className="w-12" />
        <div className="ml-7">
          <h1 className="user__text text-xl">50+</h1>
          <p className="user__description text-xl">Servers</p>
        </div>
      </div>
    </div>
  );
}

export default User;
