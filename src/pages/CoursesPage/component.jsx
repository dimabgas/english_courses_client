import React, { useEffect } from "react";
import { useParams } from "react-router";
import {
  Loader,
  LessonsList,
  LessonDetails,
  WithoutPermission,
} from "@/components/blocks";

import "./style.css";

const CoursesPage = ({
  getCourse,
  setLessonsInit,
  getLessonDetails,
  courseData,
  loading,
  isLessonEdited,
  isLessonDeleted,
}) => {
  const { courseId } = useParams();
  const { isTeacher, isStudent, lessons } = courseData;

  useEffect(() => {
    if (courseId || isLessonEdited || isLessonDeleted) {
      getCourse(courseId);
    }
    return function cleanup() {
      setLessonsInit();
    };
  }, [courseId, getCourse, isLessonEdited, isLessonDeleted]);

  const handleGetLessonDetails = (id) => {
    getLessonDetails(id);
  };

  if (loading) {
    return <Loader />;
  }

  if (!isStudent && !isTeacher) {
    return <WithoutPermission />;
  }

  return (
    <div className="lessons-wrap">
      <div className="lesson-row">
        <LessonDetails isTeacher={isTeacher} />

        <div className="lessons-list-wrap">
          <LessonsList
            isTeacher={isTeacher}
            courseId={courseId}
            lessonsList={lessons}
            handleGetLessonDetails={handleGetLessonDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
