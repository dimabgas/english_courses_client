import React from "react";
import { Link } from "react-router-dom";
import { STUDY_URL } from "@/constants/routes";
import "./style.css";

const Logo = () => {
  return (
    <Link className="logo" to={STUDY_URL}>
      <img
        className="logo__image"
        src={`${process.env.PUBLIC_URL}/image/logo.png`}
        alt="logo"
      />

      <h1 className="logo__title">
        Open<span>English</span>
      </h1>
    </Link>
  );
};

export default Logo;
