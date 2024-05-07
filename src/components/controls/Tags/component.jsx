import React from "react";
import classNames from "classnames";

const Tags = ({ className, items }) => {
  const renderItems = items.map((item) => {
    const cls = classNames(className, item);

    return (
      <span key={item} className={cls}>
        {item}
      </span>
    );
  });

  return renderItems;
};

export default Tags;
