import React from "react";
import { Link } from "react-router-dom";
import { LINK_TO_COURSE } from "@/constants/routes";

import "./style.css";

const CreateLessonButton = ({ courseId }) => {
  return (
    <Link
      className="create-lesson-btn"
      to={`${LINK_TO_COURSE}/${courseId}/lesson/create`}
    >
      +
    </Link>
  );
};

export default CreateLessonButton;
