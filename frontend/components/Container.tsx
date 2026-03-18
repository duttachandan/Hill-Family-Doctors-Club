import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-362.5 mx-auto py-3.75">
      <div className="-mx-3.75 py-3.75 flex items-center">{children}</div>
    </div>
  );
};

export default Container;
