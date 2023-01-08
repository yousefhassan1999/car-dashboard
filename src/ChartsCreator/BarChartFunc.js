import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { BarChartDATA } from "../DummyData/BarChartData";

export const createBarChart = () => {
  var chart = am4core.create("BarchartDarwer", am4charts.XYChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
  chart.data = BarChartDATA;
  var max = -Number.MAX_VALUE;

  chart.data.forEach((o) => {
    if (max < o.Ranges) {
      max = o.Ranges;
    }
  });

  chart.logo.dispose();
  chart.maskBullets = false;

  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "Number";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.startLocation = 0.3;
  categoryAxis.endLocation = 0.7;
  categoryAxis.renderer.cellStartLocation = 0.2;
  categoryAxis.renderer.cellEndLocation = 0.8;
  categoryAxis.renderer.grid.template.opacity = 0.3;
  categoryAxis.renderer.labels.template.fill = am4core.color("#808191");
  categoryAxis.renderer.labels.template.fontSize = 14;

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.inside = true;
  valueAxis.renderer.grid.template.stroke = am4core.color("#F2F2F2");
  valueAxis.renderer.labels.template.adapter.add("text", () => {
    return "";
  });

  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryX = "Number";
  series.dataFields.valueY = "Ranges";

  var columnTemplate = series.columns.template;
  columnTemplate.column.fillOpacity = 1;
  columnTemplate.strokeOpacity = 0;

  columnTemplate.adapter.add("fill", (fill, target) => {
    if (target.dataItem.valueY === max) {
      return am4core.color("#2884FF");
    } else {
      return am4core.color("#F4F5F9");
    }
  });

  var container = series.columns.template.createChild(am4core.Container);
  container.width = 58;
  container.height = 31;
  container.x = am4core.percent(70);
  container.y = am4core.percent(11);
  container.zIndex = 1000

  var rect = container.createChild(am4core.Rectangle);
  rect.width = 58;
  rect.height = 31;
  rect.fill = am4core.color("#282B32");
  rect.zIndex = 100;
  rect.adapter.add("disabled", (disabled, target) => {
    if (target.dataItem && target.dataItem.values.valueY.value === max) {
      return disabled;
    } else {
      return !disabled;
    }
  });

  var bullet = container.createChild(am4core.Circle);
  bullet.radius = 4;
  bullet.x = am4core.percent(10);
  bullet.y = am4core.percent(70);
  bullet.zIndex = 101;
  bullet.fill = am4core.color("#2884FF");
  bullet.adapter.add("disabled", (disabled, target) => {
    if (target.dataItem && target.dataItem.values.valueY.value === max) {
      return disabled;
    } else {
      return !disabled;
    }
  });

  var text = container.createChild(am4core.Label);
  text.text = "1 PM";
  text.x = am4core.percent(45);
  text.y = am4core.percent(5);
  text.horizontalCenter = "right";
  text.zIndex = 101;
  text.fill = am4core.color("#FFFFFF");
  text.fontSize = 12;
  text.fontWeight = 400;
  text.adapter.add("disabled", (disabled, target) => {
    if (target.dataItem && target.dataItem.values.valueY.value === max) {
      return disabled;
    } else {
      return !disabled;
    }
  });

  var text2 = container.createChild(am4core.Label);
  text2.text = "157K";
  text2.x = am4core.percent(65);
  text2.y = am4core.percent(45);
  text2.horizontalCenter = "right";
  text2.zIndex = 101;
  text2.fill = am4core.color("#FFFFFF");
  text2.fontSize = 12;
  text2.fontWeight = 400;
  text2.adapter.add("disabled", (disabled, target) => {
    if (target.dataItem && target.dataItem.values.valueY.value === max) {
      return disabled;
    } else {
      return !disabled;
    }
  });
  chart.cursor = new am4charts.XYCursor();
  return chart;
};
