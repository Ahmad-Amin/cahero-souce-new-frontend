import React from "react";
import Chart from "react-apexcharts";

const PerformanceGraphs = () => {
  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#302cf4"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#121a34"],
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun" 
      ],
      labels: {
        style: {
          colors: "#839cc7",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#839cc7",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
    markers: {
      size: 4,
      colors: ["#ff007c"],
      strokeWidth: 2,
      hover: {
        size: 6,
      },
    },
    grid: {
      borderColor: "#343b4f",
    },
  };

  const series = [
    {
      name: "A",
      data: [20, 40, 80, 50, 60 ,15,20],
    },
  ];

  return (
    <div>
      <div className="rounded-2xl shadow-lg bg-[#0d0d0d] ">
        <Chart options={options} series={series} type="area" height={200} width={600} />
      </div>
    </div>
  );
};

export default PerformanceGraphs;
