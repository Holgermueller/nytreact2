import React from "react";

export const Row = ({ fluid, children }) => (
    <div className={`rows${fluid ? "-fluid" : ""} `}>
        {children}
    </div>
);