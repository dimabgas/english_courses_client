import React, { useEffect, useState, useCallback } from "react";
import { ProfileSidebar, Popup, UserCourses } from "@/components/blocks";
import { Button } from "@/components/controls";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { Courses, Pagination, CourseModal } from "@/components/blocks";
import SetLevelForm from "@/forms/SetLevelForm";

import "./style.css";

const BasePage = ({
  getCourses,
  courses,
  loading,
  loaded,
  currentPage,
  size,
  coursesCount,
  changePage,
  levels,
  setLevels,
}) => {
  useEffect(() => {
    if (!loaded) {
      getCourses();
    }
  }, [loaded, getCourses]);

  const { pathname } = useLocation();
  const { push } = useHistory();

  const handleCourseCardClick = (id) => {
    push({
      pathname,
      search: queryString.stringify({ courseId: id }),
    });
  };

  const renderPagination = useCallback(() => {
    if (!courses) {
      return null;
    }

    return (
      <Pagination
        currentPage={currentPage}
        size={size}
        coursesCount={coursesCount}
        changePage={changePage}
      />
    );
  }, [courses, currentPage, size, coursesCount, changePage]);

  return (
    <>
      <CourseModal />
      <div className="all-courses-wrapper">
        <div className="all-courses">
          <Courses
            levels={levels}
            courses={courses}
            loading={loading}
            handleCourseCardClick={handleCourseCardClick}
          />
        </div>
        {renderPagination()}
      </div>
    </>
  );
};

export default BasePage;
