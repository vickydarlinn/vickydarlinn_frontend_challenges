import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTenure, changePlan } from "../store";

const UserPlan = () => {
  const dispatch = useDispatch();
  const { plan, tenure } = useSelector((state) => state.userPlan);
  console.log(plan, tenure);
  // functions
  function handleArcadePlan(plan) {
    dispatch(changePlan(plan));
    //
  }
  function handleAdvancedPlan(plan) {
    dispatch(changePlan(plan));

    //
  }
  function handleProPlan(plan) {
    dispatch(changePlan(plan));

    //
  }
  function handleMonthlyTenure(timeOption) {
    dispatch(changeTenure(timeOption));
  }
  function handleYearlyTenure(timeOption) {
    dispatch(changeTenure(timeOption));
  }

  return (
    <div>
      <div className="box" onClick={() => handleArcadePlan("arcade")}>
        <h3>Arcade</h3>
        <p>{tenure === "monthly" ? "$9/mo" : "$90/yr"}</p>
      </div>
      <div className="box" onClick={() => handleAdvancedPlan("advanced")}>
        <h3>Advanced</h3>
        <p>{tenure === "monthly" ? "$12/mo" : "$120/yr"}</p>
      </div>
      <div className="box" onClick={() => handleProPlan("pro")}>
        <h3>Pro</h3>
        <p>{tenure === "monthly" ? "$15/mo" : "$150/yr"}</p>
      </div>
      <div>
        <button onClick={() => handleMonthlyTenure("monthly")}>
          {"monthly" === tenure ? "monthly selected" : "monthly"}
        </button>
        <button onClick={() => handleYearlyTenure("yearly")}>
          {"yearly" === tenure ? "yearly selected" : "yearly"}
        </button>
      </div>
    </div>
  );
};

export default UserPlan;
