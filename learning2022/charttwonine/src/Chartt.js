import React from 'react'
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Chartt = () => {
    return (
        <div>
             <Chart
        type="line"
        data={{
          datasets: [
            {
              data: [
                { x: "2016-12-25", y: 20 },
                { x: "2016-12-26", y: 10 }
              ]
            }
          ]
        }}
      />
            charttt
        </div>
    )
}

export default Chartt
