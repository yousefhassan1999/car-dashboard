import React, { useEffect } from "react";

import "./Dashboard.css";
import Componen from "../../../assets/Component 1.png";
import Range from "../../../assets/Range.png";
import Break from "../../../assets/Break.png";
import Tire from "../../../assets/Tire.png";
import Reload from "../../../assets/Reload.png";
import Car1 from "../../../assets/car1.png";
import Car2 from "../../../assets/car2.png";
import Car3 from "../../../assets/car3.png";
import CarCarIcon1 from "../../../assets/CarCarIcon1.png";
import CarCarIcon2 from "../../../assets/CarCarIcon2.png";
import CarCarIcon3 from "../../../assets/CarCarIcon3.png";
import { PieChartData } from "../../../DummyData/PieChartData";
import { createChart } from "../../../ChartsCreator/PieChartFunc";
import { createBarChart } from "../../../ChartsCreator/BarChartFunc";
import { createGraphChart } from "../../../ChartsCreator/GraphChartFunc";

const cards = [
  { image: Componen, Name: "Energy" },
  { image: Range, Name: "Range" },
  { image: Break, Name: "Break fluid" },
  { image: Tire, Name: "Tire Wear" },
];

const carCards = [
  {
    title: "64% Recommend",
    image: Car1,
    Name: "Mini Cooper",
    kilometer: "132K",
    hours: "$32/h",
  },
  {
    title: "74% Recommend",
    image: Car2,
    Name: "Porsche 911 Carrera",
    kilometer: "130K",
    hours: "$28/h",
  },
  {
    title: "74% Recommend",
    image: Car3,
    Name: "Porsche 911 Carrera",
    kilometer: "130",
    hours: "$28/h",
  },
];

const Dashboard = () => {
  useEffect(() => {
    var newARR = PieChartData.map((dic) => {
      return createChart(dic);
    });
    var newBarChart = createBarChart();
    var newGraphChart = createGraphChart();
    return () => {
      newARR.map((chart) => chart.dispose());
      newBarChart.dispose();
      newGraphChart.dispose();
    };
  }, []);

  return (
    <div className="Dashboard">
      <div className="row flex">
        {cards.map((card, index) => {
          return (
            <div
              className={index === 0 ? "Card FirstCart" : "Card"}
              key={index}
            >
              <div className="CardTitle flex">
                <img className="CardTitleImg" src={card.image} alt="" />
                <h1 className="TitleName" id={index === 0 ? "first" : ""}>
                  {card.Name}
                </h1>
              </div>
              <div id={"chartdiv" + (index + 1)}></div>
            </div>
          );
        })}
      </div>
      <div className="row2 flex">
        <div className="BarchartDiv">
          <h1 className="BarChartTitle">
            Miles <span>Statistics</span>
          </h1>
          <div className="BarChartNav flex">
            <div className="ButtomsGroup flex">
              <button className="FirstButton">Day</button>
              <button>Week</button>
              <button>Month</button>
            </div>
            <div className="BarChartNavTitle">256 Miles</div>
          </div>
          <div className="BarchartDarwer"></div>
        </div>
        <div className="GraphchartDiv">
          <h1 className="GraphChartTitle">
            Car <span>Statistics</span>
          </h1>
          <div className="GraphChartNav flex">
            <div className="GraphChartNavTitle">20 February 2022</div>
            <div className="ButtomsGroup2 flex">
              <button className="FirstButton2">Day</button>
              <button>Week</button>
              <button>Month</button>
            </div>
          </div>
          <div className="GraphchartDarwer"></div>
        </div>
      </div>
      <div className="row3 flex">
        {carCards.map((card, index) => {
          return (
            <div className={"CarCard CardCarIndex" + index} key={index}>
              <div className="topDiv flex">
                <img className="ReloadImg" src={Reload} alt="" />
                <h1 className="topTitle"> {card.title}</h1>
              </div>
              <div className="centerDivCont flex">
                <div className="centerDiv">
                  <img className="CarImg" src={card.image} alt="" />
                </div>
              </div>

              <div className="BottomDiv flex">
                <div className="BottomDivTitle">{card.Name}</div>
                <div className="BottomDivIconsPrice flex">
                  <div className="BottomIcons flex">
                    <img className="CarCardIcon1" src={CarCarIcon1} alt="" />
                    <div className="KiloMeter">{card.kilometer}</div>
                    <img className="CarCardIcon2" src={CarCarIcon2} alt="" />
                    <img className="CarCardIcon3" src={CarCarIcon3} alt="" />
                  </div>
                  <div className="BottomPrice">{card.hours}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
