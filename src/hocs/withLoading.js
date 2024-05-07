import React from "react";

const withLoading = (Component) => {
  const ComponentWithLoading = (props) => {
    if (props.loading) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };

  return ComponentWithLoading;
};

export default withLoading;
