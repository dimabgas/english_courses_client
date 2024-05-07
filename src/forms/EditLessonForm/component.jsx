import React, { useCallback, useState } from "react";

import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/align.min.js";

import FroalaEditor from "react-froala-wysiwyg";

import { editorConfig } from "@/constants/editor";

import { Loader } from "@/components/blocks";
import { Button, Input } from "@/components/controls";

import classnames from "classnames";
import "./style.css";

const EditLessonForm = ({ lessonFields, editLesson, loading }) => {
  const [lessonFieldsState, setLesson] = useState(lessonFields);
  const { id, title, video, material } = lessonFieldsState;

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setLesson({ ...lessonFieldsState, [name]: value });
  });

  const handleModelChange = useCallback((model) => {
    setLesson({ ...lessonFieldsState, material: model });
  });

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();

      editLesson({
        lessonId: id,
        lessonFields: lessonFieldsState,
      });
    },
    [lessonFieldsState]
  );

  const renderButton = useCallback(() => {
    const cls = classnames("create-lesson-from__btn", {
      disable: !title || (!video && !material),
    });

    return <Button className={cls} size="md" text="Edit" type="submit" />;
  }, [title, material, video]);

  return (
    <>
      {loading && (
        <div className="loader-wrap">
          <div className="loader">
            <Loader />
          </div>
        </div>
      )}
      <form className="edit-lesson__form" onSubmit={handleFormSubmit}>
        <Input
          name="title"
          placeholder="Title of Course"
          type="text"
          value={title}
          onInputChange={handleChange}
        />

        <Input
          name="video"
          placeholder="Link on the video"
          type="link"
          value={video}
          onInputChange={handleChange}
        />

        <FroalaEditor
          tag="textarea"
          config={editorConfig}
          model={material}
          onModelChange={handleModelChange}
        />

        {renderButton()}
      </form>
    </>
  );
};

export default EditLessonForm;
