import React, { useCallback } from "react";
import parse from "html-react-parser";

import "./style.css";

const CreateLessonPreview = ({ lesson }) => {
  const { title, video, material } = lesson;

  const renderVideo = useCallback(() => {
    if (video) {
      return (
        <video
          className="lesson-details__video"
          width="100%"
          height="auto"
          controls="controls"
        >
          <source src={video} type="video/mp4" />
        </video>
      );
    }
    return null;
  }, [video]);

  return (
    <>
      <div className="lesson-details__title">{title}</div>
      {renderVideo()}
      <div className="lesson-details__material">{parse(material)}</div>
    </>
  );
};

export default CreateLessonPreview;
