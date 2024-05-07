import React from "react";
import { UserAvatar } from "@/components/blocks";
import { MAX_STUDENTS_COUNT } from "@/constants/userConstants";

import "./style.css";

const Students = ({ students }) => {
  if (!students) {
    return;
  }
  
  const maxStudentsCount = MAX_STUDENTS_COUNT;
  const hasPlus = students.length > maxStudentsCount;
  const copyStudents = students.slice();

  const cuttedStudents = hasPlus
    ? copyStudents.splice(0, maxStudentsCount)
    : copyStudents;

  const renderStudents = cuttedStudents.map((student) => {
    return (
      <div key={student._id} className="students-image-wrap">
        <UserAvatar size="sm" imageLink={student.avatar} />
      </div>
    );
  });

  return (
    <>
      {renderStudents}
      {hasPlus && (
        <div className="students-has-plus">
          +{students.length - maxStudentsCount}
        </div>
      )}
    </>
  );
};

export default Students;
