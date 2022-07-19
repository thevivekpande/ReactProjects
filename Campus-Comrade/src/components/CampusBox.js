import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./CampusBox.css";

export default function CampusBox() {
  const user = useSelector(selectUser);

  return (
    <div className="campusBox">
      <div className="campusBox__info">
        <Avatar
          src={
            user.photo
              ? user.photo
              : "https://pixlok.com/wp-content/uploads/2021/03/default-user-profile-picture.jpg"
          }
          className="campusBox__infoAvatar"
        />
        <h5>{user.displayName ? user.displayName : user.email}</h5>
      </div>
      <div className="campusBox__campus">
        <p>What is your Doubt?</p>
      </div>
    </div>
  );
}
