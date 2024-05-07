import React from "react";
import { UserAvatar } from "@/components/blocks";
import { Button } from "@/components/controls";
import userConstants from "@/constants/userConstants";

import "./style.css";

const ModalCourseContent = ({ courseData, subscribeUser, userRoles }) => {
  const {
    _id,
    image,
    title,
    level,
    description,
    owner,
    lessons,
    isTeacher,
    isStudent,
  } = courseData;

  return (
    <div>
      <div className="course-card__header">
        {owner && (
          <div className="course-card__owner">
            <UserAvatar size="md" imageLink={owner.avatar} />

            <div className="course-card__owner-info">
              <h5 className="course-card__owner-name">
                {`${owner.firstName} ${owner.secondName}`}
              </h5>
              <span className="course-card__owner-email">{owner.email}</span>
            </div>
          </div>
        )}
        <div className="course-card__level">{level}</div>
      </div>

      <div className="modal-image-wrap">
        <img className="modal-image" src={image} alt={title} />
        {lessons && (
          <div className="modal-lessons">
            <span className="course-card__lessons">
              {lessons.length} lessons
            </span>
          </div>
        )}
      </div>
      <div className="modal-content-wrap">
        <div className="modal-content">
          <h2 className="modal-title">{title}</h2>
          <p className="modal-desc">{description}</p>
          <RenderModalButton
            isTeacher={isTeacher}
            isStudent={isStudent}
            userRoles={userRoles}
            courseId={_id}
            subscribeUser={subscribeUser}
          />
        </div>
      </div>
    </div>
  );
};

const RenderModalButton = ({
  courseId,
  subscribeUser,
  isTeacher,
  isStudent,
  userRoles,
}) => {
  console.log("userRoles", userRoles);
  if (isTeacher || userRoles.includes(userConstants.roles.teacher)) {
    return (
      <div className="subscribe-error">
        <span className="subscribe-error-star">*</span>
        You can't subscribe to this course. You are the teacher
      </div>
    );
  } else if (isStudent) {
    return (
      <div className="subscribe-error">
        <span className="subscribe-error-star">*</span>
        You've already subscribed to this course
      </div>
    );
  }
  return (
    <Button
      onClick={() => subscribeUser(courseId)}
      size="md"
      type="submit"
      text="Get started"
      styleType="outline"
    />
  );
};

export default ModalCourseContent;
