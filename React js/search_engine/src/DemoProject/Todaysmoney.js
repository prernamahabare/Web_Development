import React from "react";

export default function Todaysmoney() {
  const style = {
    amount: {
      margin: "2px 5px",
    },
    alert: {
      Width: "5px",
      height: "25px",
      margin: "2px 5px",
      fontSize:"12px",
      color:"green"
    },
    Dollarsign: {
      backgroundColor: "blue",
      color:"white",
      margin: "10px 20px",
      paddingLeft: "10px",
      paddingRight: " 20px",
      borderRadius: "50px",
      width: "30px",
      height: "30px",
    },
  };

  return (
    <div className="card d-flex flex-row" style={{ width: "11rem" }}>
      <div>
        <div>Todays Money</div>
        <span style={style.amount}>$24,000</span>
        <span style={style.alert} class="alert-success" role="alert">
          +4%
        </span>
      </div>
      <div style={style.Dollarsign}><i class="fas fa-dollar-sign"></i></div>
    </div>
  );
}
