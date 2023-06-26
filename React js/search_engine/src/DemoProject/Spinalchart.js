import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import {CategoryScale} from 'chart.js'
Chart.register(CategoryScale)

const state = {
  labels: ['Jan', 'Feb', 'Mar',
           'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Performance Over Time',
    //   fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      numberSuffix: "K",
      data: [20, 10, 14, 20,25, 30, 20, 45, 30, 15, 25, 22, 17]
    }
  ]
}

export default class Spinalchart extends React.Component {
  render() {
    return (
      <div style={{width:"100vh"}}>
        <Line
          data={state}
          options={{
            // title:{
            //   display:true,
            //   text:'Performance Over Time',
            //   fontSize:10
            // },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}