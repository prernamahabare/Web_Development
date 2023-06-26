import React from "react";
import { actioncreators } from "../state/index";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch();
  const { DepositMoney, WithdrawMoney } = bindActionCreators(
    actioncreators,
    dispatch
  );
  return (
    <div className="container">
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          WithdrawMoney(100);
        }}
      >
        -
      </button>
      Add to cart
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          DepositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
}
