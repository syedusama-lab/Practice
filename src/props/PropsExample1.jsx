import React from "react";

function PropsExample1(props) {
  return <>
  <ol>
      <li>Title is {props.title}</li>
      <li>Subject Name is {props.name}</li>
      <li>Price of subject is {props.price}</li>
  </ol>
  </>;
}
export default PropsExample1;
