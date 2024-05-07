import React, { useState, useCallback } from "react";
import classnames from "classnames";
import { CreateLessonButton } from "@/components/blocks";

import "./style.css";

const LessonsList = ({
  lessonsList,
  handleGetLessonDetails,
  isTeacher,
  courseId,
}) => {
  const [selected, setSelected] = useState();

  const handleLessonChooseClick = useCallback((id) => () => {
    setSelected(id);
    handleGetLessonDetails(id);
  });

  const renderLessonsList = lessonsList.map((lesson) => {
    const cls = classnames("lessons-item", {
      selected: selected === lesson._id,
    });
    return (
      <li
        onClick={handleLessonChooseClick(lesson._id)}
        className={cls}
        key={lesson._id}
      >
        {lesson.title}
      </li>
    );
  });

  return (
    <>
      <div className="lessons-count">Lessons: {lessonsList.length}</div>
      {isTeacher && <CreateLessonButton courseId={courseId} />}
      <ul className="lessons-list">{renderLessonsList}</ul>
    </>
  );
};

export default LessonsList;
