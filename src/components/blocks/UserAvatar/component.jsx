import React from "react";
import classNames from "classnames";

import "./style.css";

const UserAvatar = ({ size, imageLink }) => {
  const cls = classNames("avatar-wrapper", {
    [`avatar-wrapper-${size}`]: size,
  });
  return (
    <div className={cls}>
      <img className="avatar-image" src={imageLink} alt="avatar" />
    </div>
  );
};

export default UserAvatar;
