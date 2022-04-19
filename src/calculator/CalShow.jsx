import React from "react";
import {Add,Sub,Mul,Div} from "./Cal";

function CalShow(){
    return(
        <>
            <ul>
                <li>Addition is {Add(2,2)}</li>
                <li>Subtraction is {Sub(3,2)}</li>
                <li>Multiplication is {Mul(2,2)}</li>
                <li>Division is {Div(6,2)}</li>
            </ul>
        </>
    )
}
export default CalShow;