import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAvatar, Logo, Notification } from "@/components/blocks";
import { PROFILE_URL } from "@/constants/routes";

import "./style.css";

const Header = ({ userData: { data } }) => {
  const { avatar } = data;
  const [notification] = useState(1);

  return (
    <header className="header">
      <Logo />
      <div className="header-right">
        <Notification notificationCount={notification} />
        <Link to={PROFILE_URL}>
          <UserAvatar size="md" imageLink={avatar} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
