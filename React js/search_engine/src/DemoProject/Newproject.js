import React from "react";

export default function Newproject() {
  const style = {
    amount: {
      margin: "2px 5px",
    },
    alert: {
      Width: "5px",
      height: "25px",
      margin: "2px 5px",
      fontSize:"12px",
      color:"red"
    },
    Dollarsign: {
      backgroundColor: "blue",
      color:"white",
      margin: "10px 20px",
      paddingLeft: "10px",
      paddingRight: " 20px",
      borderRadius: "50px",
      width: "35px",
      height: "30px",
    },
  };
  return (
    <div className="card d-flex flex-row" style={{ width: "11rem" }}>
      <div>
        <div>New Projects</div>
        <span style={style.amount}>12</span>
        <span style={style.alert} class="alert-danger" role="alert">
          -10%
        </span>
      </div>
      <div style={style.Dollarsign}><i class="far fa-folder"></i></div>
    </div>
  );
}
