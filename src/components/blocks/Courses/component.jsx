import React, { useEffect } from "react";
import { CourseCard, Loader } from "@/components/blocks";

const Courses = ({
  courses,
  profile,
  loading,
  handleCourseCardClick,
  isTeacher,
}) => {
  if (loading) {
    return <Loader />;
  }

  if (courses && courses.length > 0) {
    const renderCourses = courses.map((course) => {
      return (
        <CourseCard
          key={course._id}
          course={course}
          profile={profile}
          handleCourseCardClick={handleCourseCardClick}
          isTeacher={isTeacher}
        />
      );
    });
    return renderCourses;
  }

  return <div className="help-info-text">There are not any courses</div>;
};

export default Courses;
