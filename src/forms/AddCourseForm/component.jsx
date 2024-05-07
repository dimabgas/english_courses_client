import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import objectToArray from "@/helpers/objectToArray";
import { Button, Input, Select } from "@/components/controls";

import courseConstants from "@/constants/courseConstants";
import { VALID_LINK, VALID_TITLE } from "@/constants/validation";

import "./style.css";

const AddCourseForm = ({ addCourse }) => {
  const { handleSubmit, register, errors } = useForm();

  const courseLevels = objectToArray(courseConstants.levels);

  const [formData, setFormData] = useState({
    image: courseConstants.defaultImage,
    title: "",
    description: "",
    level: courseLevels[0],
  });

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );

  const handleFormSubmit = useCallback(
    (data, event) => {
      event.preventDefault();

      addCourse(formData);
    },
    [formData, addCourse]
  );

  return (
    <form
      className="add-course__from"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Input
        name="image"
        myRef={register(VALID_LINK)}
        validationErrors={errors.image ? errors.image.message : null}
        placeholder="Enter the image link"
        type="text"
        onInputChange={handleChange}
      />
      <Input
        name="title"
        myRef={register(VALID_TITLE)}
        validationErrors={errors.title ? errors.title.message : null}
        placeholder="Enter the title"
        type="text"
        onInputChange={handleChange}
      />
      <textarea
        className="add-course__textarea"
        name="description"
        rows="5"
        placeholder="Enter the description"
        onChange={handleChange}
      />
      <Select
        name="level"
        textLabel="Select the level"
        values={courseLevels}
        onChange={handleChange}
      />
      <Button size="lg" type="submit" text="Add new course" />
    </form>
  );
};

export default AddCourseForm;
