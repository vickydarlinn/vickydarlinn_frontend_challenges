import React from "react";
import { useDispatch } from "react-redux";
import { changeName, changeEmail, changePhone } from "../store";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const dispatch = useDispatch();

  //   accessing state
  const { name, email, phone } = useSelector((state) => state.userInfo);

  //   updating state from these functions
  function handleName(e) {
    dispatch(changeName(e.target.value));
    //
  }
  function handleEmail(e) {
    dispatch(changeEmail(e.target.value));
    //
  }
  function handlePhone(e) {
    dispatch(changePhone(e.target.value));
    //
  }

  return (
    <div>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address and mobile number.</p>
      <label htmlFor="Name">Name</label>
      <input onChange={handleName} required type="text" value={name} />
      <label htmlFor="email">Email Address</label>
      <input onChange={handleEmail} required type="email" value={email} />
      <label htmlFor="phone">Phone No.</label>
      <input onChange={handlePhone} required type="number" value={phone} />
    </div>
  );
};

export default UserInfo;
