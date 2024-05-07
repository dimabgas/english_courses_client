import React from "react";

import "./style.css";

const WithoutPermission = () => {
  return (
    <div className="without-permission">
      <img
        className="without-permission-img"
        src={`${process.env.PUBLIC_URL}/image/lock.png`}
        alt="lock"
      />
      <p className="without-permission-text">
        You don't have permission for this page
      </p>
    </div>
  );
};

export default WithoutPermission;
