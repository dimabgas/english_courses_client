import React, { useCallback, useState } from "react";
import parse from "html-react-parser";

import { Loader } from "@/components/blocks";
import EditLessonForm from "@/forms/EditLessonForm";

import "./style.css";

const LessonDetail = ({
  lessonDetails,
  lessonDetailsLoading,
  isTeacher,
  deleteLesson,
}) => {
  const { id, title, video, material } = lessonDetails;

  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);

  const handleDeleteClick = useCallback(() => {
    deleteLesson(id);
  });

  const renderContent = useCallback(() => {
    if (isEdit) {
      return <EditLessonForm lessonFields={lessonDetails} />;
    }
    return (
      <div>
        <div className="lesson-details__title">{title}</div>
        {video && (
          <video
            className="lesson-details__video"
            width="100%"
            height="500"
            controls="controls"
          >
            <source src={video} type="video/mp4"></source>
          </video>
        )}
        <div className="lesson-details__material">{parse(material)}</div>
      </div>
    );
  });

  if (lessonDetailsLoading) {
    return <Loader />;
  }

  if (!id) {
    return (
      <div className="select-lesson">
        <img src={`${process.env.PUBLIC_URL}/image/book.png`} alt="book" />
        <span>Choose the lesson you wanna learn</span>
      </div>
    );
  }

  return (
    <div className="lesson-details-wrap">
      {isTeacher && (
        <div className="lesson-details-controls">
          <div onClick={handleEditClick} className="lesson-details-btn">
            {isEdit ? (
              <img
                src={`${process.env.PUBLIC_URL}/image/not-edit.png`}
                alt="cross"
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/image/edit.png`}
                alt="edit"
              />
            )}
          </div>
          <div onClick={handleDeleteClick} className="lesson-details-btn">
            <img
              src={`${process.env.PUBLIC_URL}/image/trash.png`}
              alt="trash"
            />
          </div>
        </div>
      )}

      {renderContent()}
    </div>
  );
};

export default LessonDetail;
