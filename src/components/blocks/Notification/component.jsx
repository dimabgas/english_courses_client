import React from "react";
import { NOTIFICATION_ICON } from "@/constants/icons";
import classnames from "classnames";

import "./style.css";

const Notification = ({ notificationCount }) => {
  let isNotification = false;
  notificationCount !== 0 ? (isNotification = true) : (isNotification = false);

  const notificationClass = classnames("notification__bell", {
    "without-notify": !notificationCount,
  });
  return (
    <div className="notification">
      <img className={notificationClass} src={NOTIFICATION_ICON} alt="bell" />
      {isNotification ? (
        <span className="notification__count">{notificationCount}</span>
      ) : null}
    </div>
  );
};

export default Notification;
