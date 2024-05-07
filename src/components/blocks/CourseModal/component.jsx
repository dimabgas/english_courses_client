import React, { useRef, useEffect, useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import useOutsideClickHandler from "@/hooks/useOutsideClickHandler";
import { Loader, ModalCourseContent } from "@/components/blocks";

import "./style.css";

const Modal = ({ getCourse, courseLoading, setInitialCourse }) => {
  const { search } = useLocation();
  const { courseId } = queryString.parse(search);
  const isShow = !!courseId;

  const { pathname } = useLocation();
  const { push } = useHistory();

  const ref = useRef(null);

  const closeModal = useCallback(() => {
    push({
      pathname,
      search: queryString.stringify(
        { courseId: null },
        {
          skipNull: true,
        }
      ),
    });
    setInitialCourse();
  }, [pathname, push, setInitialCourse]);

  useOutsideClickHandler({
    ref,
    callback: closeModal,
    opened: isShow,
  });

  useEffect(() => {
    if (courseId) {
      getCourse(courseId);
    }
  }, [courseId, getCourse]);

  const renderContent = isShow && (
    <div className="modal-wrapper">
      <img
        onClick={() => closeModal()}
        className="modal-close"
        src={`${process.env.PUBLIC_URL}/image/cross.png`}
        alt="cross"
      />
      {courseLoading ? (
        <div className="modal-loader">
          <Loader />
        </div>
      ) : (
        <div ref={ref} className="modal">
          <ModalCourseContent />
        </div>
      )}
    </div>
  );

  return renderContent;
};

export default Modal;
