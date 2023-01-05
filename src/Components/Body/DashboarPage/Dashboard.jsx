import React, { useEffect } from "react";

import "./Dashboard.css";
import Componen from "../../../assets/Component 1.png";
import Range from "../../../assets/Range.png";
import Break from "../../../assets/Break.png";
import Tire from "../../../assets/Tire.png";
import { PieChartData } from "../../../DummyData/PieChartData";
import { createChart } from "../../../ChartsCreator/PieChartFunc";
import { createBarChart } from "../../../ChartsCreator/BarChartFunc";

const cards = [
  { image: Componen, Name: "Energy" },
  { image: Range, Name: "Range" },
  { image: Break, Name: "Break fluid" },
  { image: Tire, Name: "Tire Wear" },
];

const Dashboard = () => {
  useEffect(() => {
    var newARR = PieChartData.map((dic) => {
      return createChart(dic);
    });
    var newBarChart = createBarChart();

    return () => {
      newARR.map((chart) => chart.dispose());
      newBarChart.dispose();
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
      </div>
    </div>
  );
};

export default Dashboard;
