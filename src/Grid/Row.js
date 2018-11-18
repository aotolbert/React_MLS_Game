import React from "react";

export const Row = ({ fluid, width, children, id }) => (
  <div className={`row${fluid ? "-fluid" : ""} w-${width} mr-auto ml-auto p-5`} id={`${id}`}>
    {children}
  </div>
);
