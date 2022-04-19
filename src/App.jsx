import React from "react";
import Heading from "./Time/Heading";
import Time from "./Time/Time";
import CalShow from "./calculator/CalShow";
import PropsExample from "./props/PropsExample";
import Array from "./Array";
import data from "./Array";
import Form1 from "./form/Form1";
import Crudapp from "./ToDo App/crud-app";
import PropsExample1 from "./props/PropsExample";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function check(val) {
  return val.name === "React" ? (
    <PropsExample1 title={val.title} name={val.name} price={val.price} />
  ) : (
    ""
  );
}
function newApp() {
  return window.open(<Crudapp />);
}
{
  /* <ul>
<li>
  <Link to="/about">About</Link>
</li>
<li>
  <Link to="/dashboard">Dashboard</Link>
</li>
</ul>
<hr /> */
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="About" element={<About />}></Route>
        <Route path="Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>

    //  <Crudapp />
    // <Heading />
    // <Time />
    // <CalShow />

    // <PropsExample
    //   title={Array[0].title}
    //   name={Array[0].name}
    //   price={Array[0].price}
    // />
    // <PropsExample
    //   title={Array[1].title}
    //   name={Array[1].name}
    //   price={Array[1].price}
    // />
    // <h1>Break</h1>
    // {data.map(check)}
    // <h1>Break</h1>
    // {data.map((val) => (
    //   <PropsExample1 title={val.title} name={val.name} price={val.price} />
    // ))}
    // <Form1 />
    // <br />
    // <br />
    // <input type='button' onClick={newApp} value='click here'></input>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
