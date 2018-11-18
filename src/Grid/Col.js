import React from "react";

export const Col = ({ size, children }) => (
  <div className={`col-${size} p-0 text-center`}>
    {children}
  </div>
);
