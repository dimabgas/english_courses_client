import React from "react";

const ProfileInfo = ({ title, children }) => {
  return (
    <div>
      <h4 className="information-title">{title}</h4>
      {children}
    </div>
  );
};

export default ProfileInfo;
