import React, { useEffect, useState } from "react";
import classnames from "classnames";

import "./style.css";
const OfflineNotification = () => {
  const [isDisconnected, setDisconnected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisconnected(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const cls = classnames("offline-wrap", { isDisconnected: isDisconnected });

  return (
    <div className={cls}>
      <p className="offline-text">
        <span role="img" aria-label="lightning">
          ⚡
        </span>
        You can't work without internet connection
      </p>
    </div>
  );
};

export default OfflineNotification;
