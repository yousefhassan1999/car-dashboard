import React, { useEffect } from "react";

import "./Dashboard.css";
import Componen from "../../../assets/Component 1.png";
import Range from "../../../assets/Range.png";
import Break from "../../../assets/Break.png";
import Tire from "../../../assets/Tire.png";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const arr = [
  {
    prec: 45,
    title: "45%",
    div: "chartdiv1",
    Color1: "#FFFFFF",
    Color2: "#B37EFC",
    FontColor: "#FFFFFF",
  },
  {
    prec: 52,
    title: "157k%",
    div: "chartdiv2",
    Color1: "#FF7E86",
    Color2: "#F4F5F9",
    FontColor: "#242731",
  },
  {
    prec: 9,
    title: "9%",
    div: "chartdiv3",
    Color1: "#A162F7",
    Color2: "#F4F5F9",
    FontColor: "#242731",
  },
  {
    prec: 25,
    title: "25%",
    div: "chartdiv4",
    Color1: "#F6CC0D",
    Color2: "#F4F5F9",
    FontColor: "#242731",
  },
];

const cards = [
  { image: Componen, Name: "Energy" },
  { image: Range, Name: "Range" },
  { image: Break, Name: "Break fluid" },
  { image: Tire, Name: "Tire Wear" },
];
const Dashboard = () => {
  useEffect(() => {
    var newARR = arr.map((dic) => {
      return createChart(dic);
    });
    var newBarChart = createBarChart()

    return () => {
      newARR.map((chart) => chart.dispose());
      newBarChart.dispose();
    };
  }, []);

  const createChart = (dic) => {
    var chart = am4core.create(dic.div, am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    // Add data
    chart.data = [
      {
        value: dic.prec,
      },
      {
        value: 100 - dic.prec,
      },
    ];

    chart.radius = am4core.percent(98);
    chart.innerRadius = am4core.percent(85);
    chart.startAngle = 135;
    chart.endAngle = 405;
    chart.logo.dispose();

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.slices.template.cornerRadius = 3;
    pieSeries.slices.template.innerCornerRadius = 3;
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.colors.list = [
      am4core.color(dic.Color1),
      am4core.color(dic.Color2),
    ];

    var container = new am4core.Container();
    container.parent = pieSeries;

    var label = new am4core.Label();
    label.parent = container;
    label.text = dic.title;
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fill = am4core.color(dic.FontColor);
    label.fontSize = 31;
    return chart;
  };

  const createBarChart = (dic) => {
    var chart = am4core.create("BarchartDarwer", am4charts.XYChart);

    chart.data = [
      {
        country: "USA",
        visits: 3025,
      },
      {
        country: "China",
        visits: 1882,
      },
      {
        country: "Japan",
        visits: 1809,
      },
      {
        country: "Germany",
        visits: 1322,
      },
      {
        country: "UK",
        visits: 1122,
      },
      {
        country: "France",
        visits: 1114,
      },
      {
        country: "India",
        visits: 984,
      },
      {
        country: "Spain",
        visits: 711,
      },
      {
        country: "Netherlands",
        visits: 665,
      },
      {
        country: "Russia",
        visits: 580,
      },
      {
        country: "South Korea",
        visits: 443,
      },
      {
        country: "Canada",
        visits: 441,
      },
    ];

    chart.maskBullets = false; // allow bullets to go out of plot area

    // var text = chart.plotContainer.createChild(am4core.Label);
    // text.text = "Drag column bullet to change its value";
    // text.y = 92;
    // text.x = am4core.percent(100);
    // text.horizontalCenter = "right";
    // text.zIndex = 100;
    // text.fillOpacity = 0.7;

    // category axis
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 50;

    // value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // we set fixed min/max and strictMinMax to true, as otherwise value axis will adjust min/max while dragging and it won't look smooth
    valueAxis.strictMinMax = true;
    valueAxis.min = 0;
    valueAxis.max = 3400;
    valueAxis.renderer.minWidth = 60;

    // series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.dy = -8;
    series.sequencedInterpolation = true;
    series.defaultState.interpolationDuration = 1500;
    series.columns.template.strokeOpacity = 0;

    // label bullet
    var labelBullet = new am4charts.LabelBullet();
    series.bullets.push(labelBullet);
    labelBullet.label.text = "{valueY.value.formatNumber('#.')}";
    labelBullet.strokeOpacity = 0;
    labelBullet.stroke = am4core.color("#dadada");
    labelBullet.dy = -20;

    // series bullet
    var bullet = series.bullets.create();
    bullet.stroke = am4core.color("#ffffff");
    bullet.strokeWidth = 3;
    bullet.opacity = 1; // initially invisible
    bullet.defaultState.properties.opacity = 1;
    // resize cursor when over
    bullet.cursorOverStyle = am4core.MouseCursorStyle.verticalResize;
    bullet.draggable = true;

    // create hover state
    var hoverState = bullet.states.create("hover");
    hoverState.properties.opacity = 1; // visible when hovered

    // column template
    var columnTemplate = series.columns.template;
    columnTemplate.column.cornerRadiusTopLeft = 8;
    columnTemplate.column.cornerRadiusTopRight = 8;
    columnTemplate.column.fillOpacity = 0.8;
    columnTemplate.tooltipText = "drag me";
    columnTemplate.tooltipY = 0; // otherwise will point to middle of the column

    // hover state
    var columnHoverState = columnTemplate.column.states.create("hover");
    columnHoverState.properties.fillOpacity = 1;
    // you can change any property on hover state and it will be animated
    columnHoverState.properties.cornerRadiusTopLeft = 35;
    columnHoverState.properties.cornerRadiusTopRight = 35;
    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    columnTemplate.adapter.add("fill", (fill, target) => {
      return chart.colors.getIndex(target.dataItem.index).saturate(0.3);
    });

    bullet.adapter.add("fill", (fill, target) => {
      return chart.colors.getIndex(target.dataItem.index).saturate(0.3);
    });

    return chart;
  };
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
