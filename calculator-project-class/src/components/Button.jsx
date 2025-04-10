import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      onClick={(e) => props.click && props.click(props.btnLabel)}
      className={`button
        ${props.operation ? "operation" : ""}
        ${props.double ? "double-col" : ""}
        ${props.triple ? "triple-col" : ""}`}>
      {props.btnLabel}
    </button>
  );
};

export default Button;
