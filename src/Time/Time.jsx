import React from "react";

function Time() {
  const time1 = new Date(2022, 5, 3, 6).getHours();
  let a = "";
  const col = {};
  if (time1 >= 1 && time1 < 12) {
    a = "Morning";
    col.color = "green";
  } else if (time1 >= 12 && time1 < 19) {
    a = "afternoon";
    col.color = "orange";
  } else {
    a = "Night";
    col.color = "black";
  }
  return (
      <h2>
        Good <span style={col}>{a}</span>
      </h2>
  );
}
export default Time;
