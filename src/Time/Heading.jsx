import React, { useState } from "react";

function Heading() {
  const name = "syed";
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const [date1, setDate] = useState(date);
  const [time1, setTime] = useState(time);
  const [datee, setDatee] = useState(date);
  const [timee, setTimee] = useState(time);
  const UTime = () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    setDate(date);
    setTime(time);
  };
  const UTime1 = () => {
    const datee = new Date().toLocaleDateString();
    const timee = new Date().toLocaleTimeString();
    setDatee(datee);
    setTimee(timee);
  };
  setInterval(UTime1, 1000);
  return (
    <>
      <h1>My name is {name}</h1>
      <p>Today date is: {date1}</p>
      <p>Time is: {time1}</p>
      <p>{timee}</p>
      <h2>typed</h2>
      <button onClick={UTime}>Refresh Time</button>
    </>
  );
}

export default Heading;
