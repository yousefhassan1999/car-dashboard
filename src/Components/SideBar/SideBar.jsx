import "./SideBar.css";
import logo from "../../assets/logo.png";
import dashboardIcon from "../../assets/dashboard icon.png";
import assets from "../../assets/assets.png";
import car from "../../assets/car.png";
import shoppingBag from "../../assets/Shopping Bag.png";
import shoppingCart from "../../assets/Shopping Cart.png";
import fencing from "../../assets/fencing.png";
import calendar from "../../assets/calendar.png";
import comment from "../../assets/comment.png";
import Settings from "../../assets/Settings.png";
import SignOut from "../../assets/Sign Out.png";
import { useNavigate } from "react-router-dom";

const TopContenticons = [
  dashboardIcon,
  assets,
  car,
  shoppingBag,
  shoppingCart,
  fencing,
  calendar,
  comment,
];
const TopContentName = [
  "Dashboard",
  "Assets",
  "Booking",
  "Sell Cars",
  "Buy Cars",
  "Services",
  "Calender",
  "Messages",
];
const BottomContenticons = [Settings, SignOut];
const BottomContentName = ["Settings", "Log out"];
const SideBar = () => {
  let navigate = useNavigate();
  return (
    <div className="SideBar grid">
      <div className="SideBar-Content flex">
        <div className="Top flex">
          <div className="LogoDiv flex">
            <img className="LogoImg" src={logo} alt="" />
            <h1 className="LogoTitle">Motive.</h1>
          </div>
          <ul className="SideBarTopContent flex">
            {TopContentName.map((name, index) => {
              return (
                <li className="TopContentItemDiv" key={index} onClick={() => navigate(name)}>
                  <div className="TopContentItemcontainer flex">
                    <img
                      className="SideBarContentIcon"
                      src={TopContenticons[index]}
                      alt=""
                    />
                    <h1 className="itemName">{name}</h1>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="Bottom flex">
          <ul className="SideBarBotomContent flex">
            {BottomContentName.map((name, index) => {
              return (
                <li className="BotomContentItemDiv" key={index}>
                  <a href="/" className="BotomContentItemcontainer flex">
                    <img
                      className="SideBarContentIcon"
                      src={BottomContenticons[index]}
                      alt=""
                    />
                    <h1 className="itemName">{name}</h1>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
