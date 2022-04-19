import React, { useState } from "react";

function Form1() {
  const [value1, setValue] = useState({
    fname: "",
    lname: "",
  });
  
  // const [value1, setValue1] = useState();
  // const [submitValue, setSubmitValue] = useState();
  // const [submitValue1, setSubmitValue1] = useState();

  // function change(event) {
  //   return (
  //     setValue(event.target.value.fname), setValue(event.target.value.lname)
  //   );
  // }
  function change(event) {
    // return setValue1(event.target.value);
    const value = event.target.value;
    const name = event.target.name;
    setValue((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  }

  function submit() {
    return (
      // setSubmitValue(value),
      // setSubmitValue1(value1),
      // setValue1(null),
      // setValue(null)
      setValue({
        fname: '',
        lname: '',
      })
    );
    }

  return (
    <>
      <h2>Your input text will be shown there</h2>
      <h3>
        {value1.fname} {value1.lname}
      </h3>
      <input
        type="text"
        placeholder="Type"
        onChange={change}
        value={value1.fname}
        name="fname"
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Type"
        onChange={change}
        value={value1.lname}
        name="lname"
      />
      <br />
      <br />
      <button onClick={submit}>Submit</button>
    </>
  );
}
export default Form1;
