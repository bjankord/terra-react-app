import React, { useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";


const data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234
    }
  ];


  function LineChart({ chartData }) {
    return (
      <div className="chart-container">
        <Line
          data={chartData}
          options={{
            plugins: {
              legend: {
                display: true,
                position: 'bottom'
              }
            }
          }}
        />
      </div>
    );
  }

  Chart.register(CategoryScale);
 
export default function MyChart() {
  const [chartData, setChartData] = useState({
    labels: data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
 
  return (
    <div className="App">
      <LineChart chartData={chartData} />
    </div>
  );
}