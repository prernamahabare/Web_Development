import React from 'react'

export default function Rolpercustomer() {
    const style = {
        amount: {
          margin: "2px 5px",
        },
        alert: {
          Width: "5px",
          height: "25px",
          margin: "2px 5px",
          fontSize:"10px"
        },
        Dollarsign: {
          backgroundColor: "white",
          color:"black",
          margin: "10px 20px",
          paddingLeft: "10px",
          paddingRight: " 20px",
          borderRadius: "50px",
          width: "30px",
          height: "30px",
        },
      };
      return (
        <div className="card d-flex flex-row" style={{ width: "11rem", backgroundColor:"blue", color:"white" }}>
          <div>
            <div>New Projects</div>
            <span style={style.amount}>$25.50</span>
          </div>
          <div style={style.Dollarsign}><i class="fas fa-dollar-sign"/></div>
        </div>
      );
}
