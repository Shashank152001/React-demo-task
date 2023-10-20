import React from 'react'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart() {
    const labels = ['1900','1950','2000','2050' ];
  const data = {
    labels: labels,
    // labels: ['1900','1950','2000','2050' ], 
	       datasets: [
          {
            label: "Europe",
            type:'bar',
            data: ['800','950','1200','2500'],
            // backgroundColor: 'rgba(255,206,86,0.2)'
            backgroundColor: 'rgba(54,162,235,0.2)',
            borderColor:'rgba(54,162,235,0.2)'
          },
          {
            label: "Africa",
            type:'bar',
            data: ['750','930','1200','2700'],
            backgroundColor: 'rgba(54,162,235,0.2)',
            borderColor:'rgba(54,162,235,0.2)'
          } ,
          {
            label: "Europe",
            type:'line',
            data: ['800','950','1200','2500'],
            backgroundColor: 'red',
            borderColor:'red'
          } ,
          {
            label: "Africa",
            type:'line',
            data: ['750','930','1200','2700'],
            backgroundColor: 'orange',
            borderColor:'orange'
          }
        ]
  };
  return (
    <div>
      <Bar data={data} 
      height={500}
      options={{
        maintainAspectRatio:false
      }}/>
    </div>
  );
}

export default BarChart