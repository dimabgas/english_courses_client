import React from "react";
import "./style.css";

const Loader = () => {
  return (
    <div className="load-5">
      <div className="ring-2">
        <div className="ball-holder">
          <div className="ball"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
