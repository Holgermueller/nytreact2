import React from "react";
import "./ListItem.css"

export const ListItem = props => (
  <li className="list-group-item">
    {props.children}
  </li>
);
