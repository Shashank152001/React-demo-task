import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
function LineChart() {
    const labels = ['1900','1950','2000','2050' ];
    const data = {
      labels: labels,
      // labels: ['1900','1950','2000','2050' ], 
             datasets: [
            {
              label: "Europe",
            //   type:'bar',
              data: ['800','950','1200','2500'],
              // backgroundColor: 'rgba(255,206,86,0.2)'
              backgroundColor: 'blue',
              borderColor:'blue'
            },
            {
              label: "Africa",
            //   type:'bar',
              data: ['750','930','1200','2700'],
              backgroundColor: 'green',
              borderColor:'green'
            } ,
            {
              label: "Aisa",
              
              data: ['800','250','180','2000'],
              backgroundColor: 'red',
              borderColor:'red'
            } ,
            {
              label: "America",
             
              data: ['750','430','1800','1900'],
              backgroundColor: 'orange',
              borderColor:'orange'
            }
          ]
    };
    return (
      <div>
        <Line data={data} 
        height={500}
        width={200}
        options={{
          maintainAspectRatio:false
        }}/>
      </div>
    );
}

export default LineChart