import React from "react";
import Chart from "react-apexcharts";

const DashboardCards = () => {
  const semiDonutOptions = {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        donut: {
          size: "70%",
        },
      },
    },
    colors: ["#8884d8"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };

  const semiDonutSeries = [80];

  const radialBarOptions = {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "16px",
            color: "#fff",
          },
        },
        track: {
          background: "#343b4f",
        },
      },
    },
    colors: ["#00C49F", "#8884d8", "#4675ff"],
  };

  const radialBarSeries = [60, 30, 10];

  const barChartOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["12 AM", "2 AM", "4 AM", "6 AM", "8 AM"],
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    colors: ["#4675ff"],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
  };

  const barChartSeries = [
    {
      name: "Profit",
      data: [50, 30, 80, 45, 90],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* Pageviews */}
      <div className="p-4 rounded-2xl shadow-lg text-white border border-[#343b4f] bg-[#0a0a0a] h-48">
        <h2 className="text-sm text-gray-400">🔵 Pageviews</h2>
        <div className="w-full flex flex-row mt-5 h-full">
          <div className="mt-5 flex-1">
            <h1 className="text-4xl font-bold">50.8K</h1>
            <p className="text-green-400 text-sm">⬆ 28.4%</p>
          </div>
          <div className="flex justify-center items-center">
            <Chart
              options={semiDonutOptions}
              series={semiDonutSeries}
              type="donut"
              height={100}
              width={200}
              className="flex items-center justify-center"
            />
          </div>
        </div>
      </div>

      {/* Monthly Users */}
      <div className="border border-[#343b4f] bg-[#0a0a0a] p-4 rounded-2xl shadow-lg text-white h-48">
        <h2 className="text-sm text-gray-400">👥 Monthly Users</h2>
        <div className="w-full flex flex-row h-full">
          <div className="mt-10 flex-1">
            <h1 className="text-4xl font-bold">23.6K</h1>
            <p className="text-red-400 text-sm">⬇ 12.6%</p>
          </div>
          <Chart
            options={radialBarOptions}
            series={radialBarSeries}
            type="radialBar"
            height={120}
            width={200}
            className="flex items-center justify-center"
          />
        </div>
      </div>

      {/* Total Profits */}
      <div className="border border-[#343b4f] bg-[#0a0a0a] p-4 rounded-2xl shadow-lg text-white h-48">
        <h2 className="text-sm text-gray-400">💰 Total Profits</h2>
        <div className="w-full flex flex-row h-full">
          <div className="mt-10 flex-1">
            <h1 className="text-4xl font-bold">756</h1>
            <p className="text-green-400 text-sm">⬆ 3.1%</p>
          </div>
          <Chart
            options={barChartOptions}
            series={barChartSeries}
            type="bar"
            height={150}
            width={200}
            className="flex items-center justify-center"
          />
        </div>
      </div>

      {/* Subscriptions */}
      <div className="border border-[#343b4f] bg-[#0a0a0a] p-4 rounded-2xl shadow-lg text-white">
        <h2 className="text-sm text-gray-400">⭐ Subscriptions</h2>
        <h1 className="mt-10 text-4xl font-bold">2.3K</h1>
        <p className="text-green-400 text-sm">⬆ 11.3%</p>
      </div>
    </div>
  );
};

export default DashboardCards;
