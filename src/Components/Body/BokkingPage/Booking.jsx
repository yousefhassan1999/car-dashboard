import "./Booking.css";
import DownArrow from "../../../assets/downArrow.svg";
import filter from "../../../assets/filter.svg";
import Heart from "../../../assets/Heart.svg";
import BookingCar1 from "../../../assets/BookingCar1.png";
import BookingCar2 from "../../../assets/BookingCar2.png";
import BookingCar3 from "../../../assets/BookingCar3.png";
import BookingCar4 from "../../../assets/BookingCar4.png";
import BookingCar5 from "../../../assets/BookingCar5.png";
import BookingCar6 from "../../../assets/BookingCar6.png";
import BookingCar7 from "../../../assets/BookingCar7.png";
import BookingCar8 from "../../../assets/BookingCar8.png";
import BookingCar9 from "../../../assets/BookingCar9.png";
import Person from "../../../assets/Person.svg";
import Manual from "../../../assets/Manual.svg";
import "simplebar";
import "simplebar-react/dist/simplebar.min.css";

import { BsGrid } from "react-icons/bs";
const Booking = () => {
  const menuitems = [
    {
      Title: "New",
      Items: ["Item1", "Item2", "Item3", "Item4"],
    },
    {
      Title: "Toyata",
      Items: ["Item1", "Item2", "Item3", "Item4"],
    },
  ];

  const Cards = [
    BookingCar1,
    BookingCar2,
    BookingCar3,
    BookingCar4,
    BookingCar5,
    BookingCar6,
    BookingCar7,
    BookingCar8,
    BookingCar9,
  ];
  return (
    <div className="Booking" data-simplebar>
      <div className="BookingHeader">Booking</div>
      <div className="BookingNav flex">
        <div className="dropDownMenuCont flex">
          {menuitems.map((Menu, index) => {
            return (
              <div className="dropdown" key={index}>
                <div className="DropMenuTitle flex">
                  <span>{Menu.Title}</span>
                  <img src={DownArrow} alt="" />
                </div>
                <div className="dropdown-content">
                  {Menu.Items.map((item, index) => {
                    return <p key={index}>{item}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="BookingNavRightIcons flex">
          <div className="NavRightIconsCon first flex">
            <BsGrid className="Icon1" />
          </div>
          <div className="NavRightIconsCon">
            <img src={filter} alt="" />
          </div>
        </div>
      </div>
      <div className="BookingCards">
        {Cards.map((card, index) => {
          return (
            <div className="BookingCard" key={index}>
              <div className="BookingTopCard">
                <div className="fristRow flex">
                  <span>Porshe 718 Cayman S</span>
                  <img src={Heart} alt="" />
                </div>
                <span className="SubTitle">Coupe</span>
              </div>
              <div className="BookingCenterCont flex">
                <div className="BookingCenterCard">
                  <img src={card} alt="" />
                </div>
              </div>
              <div className="BookingBottom flex">
                <div className="BookingBottomLeft flex">
                  <div className="IconDiv flex">
                    <img src={Person} alt="" />
                    <span>4</span>
                  </div>
                  <div className="IconDiv flex">
                    <img src={Manual} alt="" />
                    <span>Manual</span>
                  </div>
                </div>
                <div className="BookingBottomRight">
                  $400<span>/d</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Booking;
