import React, { useState, useCallback } from "react";
import {
  InfoBlock,
  ProfileInfo,
  UserAvatar,
  Loader,
} from "@/components/blocks";
import { Tags } from "@/components/controls";
import { LOGOUT_ICON, SETTING_ICON } from "@/constants/icons";
import useStickySidebar from "@/hooks/useStickySidebar";
import "./style.css";
import EditUserForm from "@/forms/EditUserForm";

const ProfileSidebar = ({
  userData: { data },
  logout,
  userDetailsLoading,
  userDetails,
}) => {
  const { id, avatar, email, firstName, secondName, roles, loading } = data;

  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);

  useStickySidebar();

  const renderContent = useCallback(() => {
    if (isEdit) {
      return <EditUserForm userFields={userDetails} />;
    }
    return (
      <div className="profile-wrapper">
        {" "}
        <div className="profile-setting">
          {" "}
          <img className="profile-edit" src="/image/edit.png" alt="edit" />{" "}
        </div>
        <img
          className="profile-logout"
          src="https:/ / cdn.iconscout.com / icon / free / png - 512 / exit - 93 - 458494. png "
          alt="
      exit "
        />
        <div
          className="
      avatar - wrapper avatar - wrapper - xl "
        >
          <img
            className="
      avatar - image "
            src="
      https: //mir-s3-cdn-cf.behance.net/project_modules/max_1200/d1c64938267389.575aefd5063e6.png"
            alt="avatar"
          />
        </div>
        <div className="profile-email">tanya@gmail.com</div>
        <div className="profile-fullName">Tanya Yemelyanovich</div>
        <div className="profile-roles-wrapper">
          <span className="profile-role Teacher">Teacher</span>
        </div>
        <div className="profile-information">
          <div>
            <h4 className="information-title">Information:</h4>
            <div className="profile-information-courses__cards">
              <div className="info-block">
                <span className="info-block-subtitle">Courses in Progress</span>
                <span className="info-block-title">0</span>
              </div>
              <div className="info-block">
                <span className="info-block-subtitle">Courses Done</span>
                <span className="info-block-title">2</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="information-title">Achievements:</h4>
            <div className="profile-information-courses__achievements">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    );
  });

  if (userDetailsLoading) {
    return <Loader />;
  }

  return (
    <div className="profile-wrapper">
      <div onClick={handleEditClick} className="profile-setting">
        {isEdit ? (
          <img
            className="profile-not-edit"
            src={`${process.env.PUBLIC_URL}/image/not-edit.png`}
            alt="cross"
          />
        ) : (
          <img
            className="profile-edit"
            src={`${process.env.PUBLIC_URL}/image/edit.png`}
            alt="edit"
          />
        )}
      </div>
      <img
        onClick={logout}
        className="profile-logout"
        src={LOGOUT_ICON}
        alt="exit"
      />
      <UserAvatar size="xl" imageLink={avatar} />
      <div className="profile-email">{email}</div>
      <div className="profile-fullName">
        {firstName} {secondName}
      </div>
      <div className="profile-roles-wrapper">
        <Tags className="profile-role" items={roles} />
      </div>
      <div className="profile-information">
        <ProfileInfo title="Information:">
          <div className="profile-information-courses__cards">
            <InfoBlock title="0" subtitle="Courses in Progress" />
            <InfoBlock title="2" subtitle="Courses Done" />
          </div>
        </ProfileInfo>
        <ProfileInfo title="Achievements:">
          <div className="profile-information-courses__achievements">
            Coming Soon
          </div>
        </ProfileInfo>
      </div>
    </div>
  );
};

export default ProfileSidebar;
