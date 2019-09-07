import React from "react";
import "./styles.css"

const ButtonIns = props =>(
    <button className="bot" onClick={props.onClick}>{props.children}</button>
);

export default ButtonIns;