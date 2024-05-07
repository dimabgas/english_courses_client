import React, { useRef } from "react";
import classnames from "classnames";
import useOutsideClickHandler from "@/hooks/useOutsideClickHandler";

import "./style.css";

const Popup = ({ show, children, popupContent, onClick }) => {
  const ref = useRef(null);

  useOutsideClickHandler({
    ref,
    callback: onClick,
    opened: show,
  });

  const popupClass = classnames("popup-content", { "popup-showed": show });

  const renderContent = show ? (
    <div className={popupClass}>{popupContent}</div>
  ) : null;

  return (
    <div className="popup-wrapper" ref={ref}>
      <div className="popup-activator">{children}</div>
      {renderContent}
    </div>
  );
};

export default Popup;
