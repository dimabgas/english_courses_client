import React from "react";
import "./style.css";

export default class ErrorBoundary extends React.PureComponent {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <img
            className="error-boundary__image"
            src={`${process.env.PUBLIC_URL}/image/cat.png`}
            alt="detective"
          />
          <div>
            <span className="error-boundary__ops">Ooops...</span>
            <h1 className="error-boundary__title">Something went wrong</h1>
            <span className="error-boundary__subtitle">
              But our detective is already looking for a mistake.
              <br />
              <b>You can try to reload the page.</b>
            </span>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
