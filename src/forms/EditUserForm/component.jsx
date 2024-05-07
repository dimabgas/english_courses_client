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

const EditUserForm = ({ userFields, editUser, loading }) => {
  const [userFieldsState, setUser] = useState(userFields);
  const { _id, avatar, email, firstName, secondName, roles } = userFieldsState; // id, title, video, material

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setUser({ ...userFieldsState, [name]: value });
  });

  const handleModelChange = useCallback((model) => {
    setUser({ ...userFieldsState, material: model });
  });

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();

      editUser({
        userId: _id,
        userFields: userFieldsState,
      });
    },
    [userFieldsState]
  );

  const renderButton = useCallback(() => {
    const cls = classnames("create-user-from__btn", {
      disable: !avatar || (!firstName && !secondName),
    });

    return <Button className={cls} size="md" text="Edit" type="submit" />;
  }, [avatar, firstName, secondName]);

  return (
    <>
      {loading && (
        <div className="loader-wrap">
          <div className="loader">
            <Loader />
          </div>
        </div>
      )}
      <form className="edit-user__form" onSubmit={handleFormSubmit}>
        <Input
          name="avatar"
          placeholder="Link to image"
          type="text"
          value={avatar}
          onInputChange={handleChange}
        />

        <Input
          name="Fullname"
          placeholder="Enter your full name"
          type="link"
          value={secondName}
          onInputChange={handleChange}
        />

        {renderButton()}
      </form>
    </>
  );
};

export default EditUserForm;
