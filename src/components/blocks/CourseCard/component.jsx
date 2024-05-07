import React, { useCallback, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserAvatar, Students, Popup, UserCourses } from "@/components/blocks";
import { Button } from "@/components/controls";
import { EDIT_ICON } from "@/constants/icons";
import { DELETE_ICON } from "@/constants/icons";
import { LINK_TO_COURSE } from "@/constants/routes";
import { useDispatch } from "react-redux";
import { Loader } from "@/components/blocks";
import apiUrls, { GET_USER_DATA_URL, COURSE_URL } from "@/constants/apiUrls";
import "./style.css";
import { courses } from "@/selectors";

const CourseCard = ({
  course,
  profile,
  handleCourseCardClick,
  isTeacher,
  deleteCourse,
}) => {
  const dispatch = useDispatch();
  const { _id, title, image, level, lessons, owner, students } = course;

  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);

  const handleDeleteClick = useCallback(
    (id) => () => {
      dispatch(deleteCourse(id));
    },
    []
  );

  //console.log(titles.courses);
  //console.log();
  let result;

  return (
    <div className="course-card">
      <div className="course-card__header">
        <div className="course-card__owner">
          <UserAvatar size="md" imageLink={owner.avatar} />

          <div className="course-card__owner-info">
            <h5 className="course-card__owner-name">
              {`${owner.firstName} ${owner.secondName}`}
            </h5>
            <span className="course-card__owner-email">{owner.email}</span>
          </div>
        </div>
        <div className="course-card__header-right">
          {isTeacher && (
            <React.Fragment>
              <div onClick={handleDeleteClick(_id)} className="Course-delete">
                <img className="course-deleting" src={DELETE_ICON} alt="del" />
              </div>
            </React.Fragment>
          )}
          <div className="course-card__level">{level}</div>
        </div>
      </div>
      <div className="course-card__image-wrap">
        <img className="course-card__image" src={image} alt={title} />
      </div>
      <div className="course-card-content">
        <div className="course-card__info">
          <div className="course-card__title">{title}</div>
          {!profile && (
            <div className="course-card__students">
              <Students students={students} />
            </div>
          )}
        </div>

        <div className="course-card-bottom">
          <span className="course-card__lessons">{lessons.length} lessons</span>

          {profile ? (
            <Link className="course-card__link" to={`${LINK_TO_COURSE}/${_id}`}>
              View ⟶
            </Link>
          ) : (
            <div
              className="course-card__link"
              onClick={() => handleCourseCardClick(_id)}
            >
              View ⟶
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
