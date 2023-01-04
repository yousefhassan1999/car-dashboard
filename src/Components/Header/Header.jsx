import "./Header.css";
import search from "../../assets/Search.png";
import Notification from "../../assets/notification.png";
import Mask from "../../assets/Mask group.png";

const Header = () => {
  return (
    <div className="Header flex">
      <div className="HeaderContainer flex">
        <div className="SearchContainer flex">
          <form className="Form flex">
            <img className="Search-image" src={search} alt="" />
            <input
              className="Search-input"
              type="text"
              placeholder="Search or type"
              name="search"
            />
          </form>
        </div>
        <div className="Notification-Mask flex">
          <img className="Notification-image" src={Notification} alt="" />
          <img className="Mask-image" src={Mask} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
