import React, { useEffect, useState, useCallback } from "react";
import { ProfileSidebar, Popup, UserCourses } from "@/components/blocks";
import { Button } from "@/components/controls";
import SetLevelForm from "@/forms/SetLevelForm";
import AddCourseForm from "@/forms/AddCourseForm";
import userConstant from "@/constants/userConstants";
import "./style.css";

const Profile = ({ getUser, userData: { data }, levels, setLevels }) => {
  const { roles } = data;
  let isTeacher = false;

  roles.includes(userConstant.roles.teacher) && (isTeacher = true);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="profile-content">
      <div className="courses">
        <div className="profile-courses-header">
          <h2 className="profile-courses-title">My Courses:</h2>
          <div className="profile-courses__created-button">
            <CreateLevelButton levels={levels} setLevels={setLevels} />
            {isTeacher && <CreateCourseButton />}
          </div>
        </div>
        <UserCourses levels={levels} isTeacher={isTeacher} />
      </div>
      <div className="profile-sidebar__wrapper">
        <ProfileSidebar />
      </div>
    </div>
  );
};

const CreateLevelButton = ({ setLevels, levels }) => {
  const [isShow, setIsShow] = useState(false);

  const showModalHandler = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <React.Fragment>
      <Popup
        show={isShow}
        onClick={showModalHandler}
        popupContent={
          <SetLevelForm initialLevels={levels} setLevels={setLevels} />
        }
      >
        <Button
          size="md"
          text="Select the Level"
          styleType="outline"
          icon="+"
          onClick={showModalHandler}
        />
      </Popup>
    </React.Fragment>
  );
};

const CreateCourseButton = () => {
  const [isShow, setIsShow] = useState(false);

  const showModalHandler = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <React.Fragment>
      <Popup
        show={isShow}
        onClick={showModalHandler}
        popupContent={<AddCourseForm />}
      >
        <Button
          size="md"
          text="Add Course"
          styleType="outline"
          icon="+"
          onClick={showModalHandler}
        />
      </Popup>
    </React.Fragment>
  );
};

export default Profile;
