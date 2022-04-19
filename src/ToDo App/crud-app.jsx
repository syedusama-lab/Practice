import React, { useState } from "react";
import "../ToDo App/crud-app.css";
import { note } from "../ToDo App/image/note.png";

const Crudapp = () => {
  const [inputData, setinputData] = React.useState(""); // State for get the data from the textfield
  const [items, setItems] = React.useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true); // State for add or edit button
  const [isEditItem, setIsEditItem] = useState(null); // State for upadte data
  const [isShow, setIsShow] = useState(true);
  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleShowButton = () => {
    // console.log("Called");
    setIsShow(!isShow);
  };

  // Add Items in the list
  // Update the existing items in the list
  const addItems = () => {
    if (!inputData) {
      alert("Empty Data \nEnter some data in textfield!");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData, isOpen: false };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setinputData("");
      setIsEditItem(null);
    } else {
      const uniqueKey = {
        id: new Date().getTime().toString(),
        name: inputData,
        isOpen: false,
      };
      setItems([...items, uniqueKey]);
      setinputData("");
    }
  };

  // function for delete the specific field
  const deleteItem = (index) => {
    const updateItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updateItems);
  };

  const editItem = (id) => {
    let neweditItem = items.find((elem) => {
      return elem.id === id;
    });

    setToggleSubmit(false);
    setinputData(neweditItem.name);
    setIsEditItem(id);
  };

  const RemoveAll = () => {
    setItems([]);
  };

  const handlePara = (elem) => {
    console.log("Element is:", elem);

    if (elem.name.length > 24 && isShow === true) {
      return (
        <div className="text-align">
          {elem.name.slice(0, 10)}
          <span className="span" onClick={handleShowButton}>
            ...{"  "}
            <text className="show-more">show more</text>
          </span>
        </div>
      );
    } else if (elem.name.length < 25) {
      return <div className="text-align">{elem.name}</div>;
    } else if (!isShow) {
      return (
        <div className="text-align">
          {elem.name}
          <span className="span" onClick={handleShowButton}>
            {"  "}
            <text className="show-less">show less</text>
          </span>
        </div>
      );
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            {/* <img src={note} alt="noteslogo"></img> */}
            <figcaption>Notes</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Item's"
              value={inputData}
              onChange={(e) => setinputData(e.target.value)}
            ></input>
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add notes"
                onClick={addItems}
              ></i>
            ) : (
              <i
                className="fa fa-edit add-btn"
                title="Update notes"
                onClick={addItems}
              ></i>
            )}
          </div>
          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{handlePara(elem)}</h3>
                  {/* <h3>{elem.name}</h3> */}
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit notes"
                      onClick={() => editItem(elem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete notes"
                      onClick={() => deleteItem(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text={
                items.length === 0 ? "Button Disabled" : "Remove All"
              }
              target="_blank"
              onClick={RemoveAll}
              disabled={items.length === 0 ? true : false}
            >
              <span>{items.length === 0 ? "No Data" : "Check List"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crudapp;
