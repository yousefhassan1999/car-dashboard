import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { GraphChartData } from "../DummyData/GraphChartData";

export const createGraphChart = () => {
  // Create chart instance
  var chart = am4core.create("GraphchartDarwer", am4charts.XYChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  chart.logo.dispose();
  chart.maskBullets = false;

  // Add data
  chart.data = GraphChartData;

  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "time";
  categoryAxis.renderer.minGridDistance = 30;
  categoryAxis.startLocation = 2;
  categoryAxis.endLocation = -0.8;
  categoryAxis.renderer.cellStartLocation = 0.2;
  categoryAxis.renderer.cellEndLocation = 1;
  categoryAxis.renderer.labels.template.fill = am4core.color("#808191");
  categoryAxis.renderer.labels.template.fontSize = 14;
  categoryAxis.renderer.grid.template.opacity = 0.3;
  // categoryAxis.renderer.grid.template.disabled = true;

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.inside = true;
  valueAxis.renderer.grid.template.stroke = am4core.color("#F2F2F2");
  valueAxis.renderer.labels.template.adapter.add("text", () => {
    return "";
  });

  // Create series
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "value";
  series.dataFields.categoryX = "time";
  series.name = "Value";
  series.strokeWidth = 1.5;
  series.fillOpacity = 1;
  series.tensionX = 0.8;
  series.tensionY = 0.8;
  //   series.smoothing = "monotoneX";
  series.stroke = am4core.color("#FF764C");

  var gradient = new am4core.LinearGradient();
  gradient.addColor(am4core.color("rgba(255, 118, 76, 0.24)"));
  gradient.addColor(am4core.color("rgba(255, 126, 7, 0)"));
  gradient.cx = am4core.percent(0);
  gradient.cy = am4core.percent(100);
  gradient.rotation = 90;
  series.fill = gradient;

  chart.cursor = new am4charts.XYCursor();

  return chart;
};
