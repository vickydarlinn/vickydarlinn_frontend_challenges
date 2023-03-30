import React from "react";
import { useSelector, useDispatch } from "react-redux";

const UserAddOns = () => {
  const dispatch = useDispatch();
  const { tenure } = useSelector((state) => state.userPlan);
  console.log(tenure);
  return (
    <div>
      <h1>Pick add-ons</h1>
      <p>add-ons help enchance your gaming experience</p>
      <div>
        <label>
          <input type="checkbox" />
          Onlie Service {tenure === "monthly" ? "$1/mn" : "$10/yr"}
        </label>
        <label>
          <input type="checkbox" />
          Large Storage {tenure === "monthly" ? "$2/mn" : "$20/yr"}
        </label>
        <label>
          <input type="checkbox" />
          Customizable Profile {tenure === "monthly" ? "$2/mn" : "$20/yr"}
        </label>
      </div>
    </div>
  );
};

export default UserAddOns;
