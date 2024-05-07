import React, { useCallback } from "react";

import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/align.min.js";

import FroalaEditor from "react-froala-wysiwyg";

import { editorConfig } from "@/constants/editor";

import { Button, Input } from "@/components/controls";

import classnames from "classnames";
import "./style.css";

const CreateLessonForm = ({
  lessonFields,
  setLesson,
  createLesson,
  courseId,
}) => {
  const { title, video, material } = lessonFields;

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setLesson({ ...lessonFields, [name]: value });
    },
    [lessonFields]
  );

  const handleModelChange = useCallback((model) => {
    setLesson({ ...lessonFields, material: model });
  });

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      createLesson({
        courseId,
        lessonFields,
      });
    },
    [lessonFields]
  );

  const renderButton = useCallback(() => {
    const cls = classnames("create-lesson-from__btn", {
      disable: !title || (!video && !material),
    });

    return (
      <Button className={cls} size="md" text="Add new course" type="submit" />
    );
  }, [title, material, video]);

  return (
    <form className="create-lesson__form" onSubmit={handleFormSubmit}>
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
  );
};

export default CreateLessonForm;
