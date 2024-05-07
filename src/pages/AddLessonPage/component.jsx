import React, { useState } from "react";
import { useParams } from "react-router";
import {
  CreateLessonPreview,
  Loader,
  WithoutPermission,
} from "@/components/blocks";
import CreateLessonForm from "@/forms/CreateLessonForm";

import "./style.css";

const AddLessonPage = ({ createLesson, loading, courseData }) => {
  const { courseId } = useParams();
  const [lesson, setLesson] = useState({
    title: "Enter your new Title",
    video: "",
    material: `<div><div><p style="text-align: justify; line-height: 1.5;"><strong fr-original-style="margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: " open="" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-weight: 700;"><span style="color: rgb(51, 51, 51); font-size: 14px;">Lorem Ipsum</span></strong><span open="" style="color: rgb(51, 51, 51); font-size: 14px;">&nbsp;is simply dummied text<span style="font-family: Arial, Helvetica, sans-serif;">&nbsp;of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex</span>t ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span></p><ul style="list-style-type: circle;"><li style="line-height: 1.5;"><span style="font-size: 14px;">This is the first item in this list</span></li><li style="line-height: 1.5;"><span style="font-size: 14px;">And this is the second ❄</span></li><li style="line-height: 1.5;"><span style="font-size: 14px;">Surprise!!! <span fr-original-class="fr-emoticon fr-deletable fr-emoticon-img" fr-original-style="background: url(https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f601.svg);" style="background: url(&quot;https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/1f601.svg&quot;); font-weight: normal; font-family: &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, NotoColorEmoji, &quot;Segoe UI Symbol&quot;, &quot;Android Emoji&quot;, EmojiSymbols; display: inline-block; line-height: 1; font-size: inherit; height: 1em; width: 1em; min-height: 20px; min-width: 20px; margin: -0.1em 0.1em 0.1em; vertical-align: middle;" color="">&nbsp;</span> This is the third</span></li></ul><table fr-original-style="width: 100%;" style="width: 100%; border: none; border-collapse: collapse; empty-cells: show; max-width: 100%;"><thead><tr fr-original-style="" style="user-select: none;"><th fr-original-style="text-align: center;" style="text-align: center; background: rgb(236, 236, 236); border: 1px solid rgb(221, 221, 221); user-select: text;">1</th><th fr-original-style="text-align: center;" style="text-align: center; background: rgb(236, 236, 236); border: 1px solid rgb(221, 221, 221); user-select: text;">1</th></tr></thead><tbody><tr fr-original-style="" style="user-select: none;"><td fr-original-style="width: 50%; text-align: center;" style="width: 50%; text-align: center; min-width: 5px; border: 1px solid rgb(221, 221, 221); user-select: text;">2</td><td fr-original-style="width: 50%; text-align: center;" style="width: 50%; text-align: center; min-width: 5px; border: 1px solid rgb(221, 221, 221); user-select: text;">4</td></tr><tr fr-original-style="" style="user-select: none;"><td fr-original-style="width: 50%; text-align: center;" style="width: 50%; text-align: center; min-width: 5px; border: 1px solid rgb(221, 221, 221); user-select: text;">Hello</td><td fr-original-style="width: 50%; text-align: center;" style="width: 50%; text-align: center; min-width: 5px; border: 1px solid rgb(221, 221, 221); user-select: text;">Nice</td></tr></tbody></table></div><p><img src="https://cdn.dribbble.com/users/230124/screenshots/9553435/media/545505cae04d2c068447f5ff071893cd.jpg" fr-original-style="width: 300px; display: inline-block; vertical-align: bottom; margin: 5px 5px 5px 0px; text-align: left; max-width: calc(100% - 5px); float: left;" fr-original-class="fr-draggable" style="width: 300px; display: inline-block; vertical-align: bottom; margin: 5px 5px 5px 0px; text-align: left; max-width: calc(100% - 5px); float: left; position: relative; cursor: pointer; padding: 0px 1px;"></p><pre fr-original-class="fr-text-gray" fr-original-style="line-height: 1.5;" style="line-height: 1.5; white-space: pre-wrap; overflow-wrap: break-word; overflow: visible;"><span style="font-size: 14px;"><span open="" style="color: rgb(51, 51, 51); font-family: Arial, Helvetica, sans-serif;">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker<sup>2</sup> including versions of Lorem Ipsum. U</span><span style="font-family: Arial, Helvetica, sans-serif;"><span open="" style="color: rgb(51, 51, 51);">sing 'Content here, content here', making it look like readable English. </span></span></span></pre><pre fr-original-style="line-height: 1.5;" style="line-height: 1.5; white-space: pre-wrap; overflow-wrap: break-word; overflow: visible;"><span style="font-size: 14px;"><span style="font-family: Arial, Helvetica, sans-serif;"><span open="" style="color: rgb(51, 51, 51);">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. U</span>sing 'Content here, content here', making it look like readable English.</span></span></pre><hr fr-original-style="" style="clear: both; user-select: none; break-after: page;"><p style="line-height: 1.5; text-align: justify;"><span open="" style="color: rgb(51, 51, 51); font-size: 14px;">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).</span></p></div>`,
  });
  const { isTeacher } = courseData;

  if (!isTeacher) {
    return <WithoutPermission />;
  }

  return (
    <>
      {loading && (
        <div className="loader-wrap">
          <div className="loader">
            <Loader />
          </div>
        </div>
      )}
      <div className="create-lesson">
        <div className="create-lesson-card create-form">
          <h2 className="create-lesson-card__title">Form</h2>
          <CreateLessonForm
            lessonFields={lesson}
            setLesson={setLesson}
            courseId={courseId}
            createLesson={createLesson}
          />
        </div>
        <div className="create-lesson-card create-preview">
          <h2 className="create-lesson-card__title">Preview</h2>
          <CreateLessonPreview lesson={lesson} />
        </div>
      </div>
    </>
  );
};

export default AddLessonPage;
