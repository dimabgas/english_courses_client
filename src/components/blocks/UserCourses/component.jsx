import React, { useEffect } from "react";
import { Courses } from "@/components/blocks";

const UserCourses = ({
  getUsersCourses,
  usersCourses,
  isTeacher,
  isLoaded,
  levels,
}) => {
  const { data, loading } = usersCourses;
  console.log("🚀 ~ file: component.jsx ~ line 12 ~ data", data);

  useEffect(() => {
    if (!isLoaded) {
      getUsersCourses();
    }
  }, [getUsersCourses]);

  console.log("🚀 ~ file: component.jsx ~ line 24 ~ levels", levels);
  return (
    <div className="profile-courses">
      <Courses
        courses={(data || []).filter((course) => {
          if (!course || !course.level) return false;
          return levels.includes(course.level);
        })}
        profile={true}
        loading={loading}
        isTeacher={isTeacher}
      />
    </div>
  );
};

export default UserCourses;
