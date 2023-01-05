import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export const createChart = (dic) => {
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