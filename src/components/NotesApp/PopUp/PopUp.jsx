import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { unSetPopUp } from "../../../slices/popUpSlice";
import PopUpStyle from "./PopUp.module.css";

function PopUp() {
  const [groupName, setGroupName] = useState("");
  const [groupColorCode, setGroupColorCode] = useState(null);
  const dispatch = useDispatch();

  let flag = 0,
    groupInitials = "";

  const createGroup = () => {
    const arr = groupName.split(" ", 2);

    if (arr.length > 1) {
      groupInitials =
        arr[0].slice(0, 1).toUpperCase() + arr[1].slice(0, 1).toUpperCase();
      console.log(groupInitials);
    } else {
      groupInitials = arr[0].slice(0, 1).toUpperCase();
      console.log(groupInitials);
    }

    let groupInfo = [groupName, groupInitials, groupColorCode];
    let groupList = [];

    if (localStorage.hasOwnProperty("groupList")) {
      groupList = JSON.parse(localStorage.getItem("groupList"));
    }
    console.log(groupList);
    groupList.push(groupInfo);
    localStorage.setItem("groupList", JSON.stringify(groupList));

    dispatch(unSetPopUp());
  };

  const setColor = (e) => {
    if (groupColorCode !== null) {
      document.getElementById(groupColorCode).setAttribute(
        "style",
        `border: none; background: ${groupColorCode}; height: 25px;
      width: 25px; border-radius: 50%;`
      );
    }

    setGroupColorCode(e.target.id);

    document.getElementById(e.target.id).setAttribute(
      "style",
      `border: 2px solid black; background: ${e.target.id}; height: 25px;
    width: 25px; border-radius: 50%;`
    );
    setGroupColorCode(e.target.id);
  };

  return (
    <div
      onClick={() => {
        if (flag === 1) {
          flag = 0;
          return;
        }
        dispatch(unSetPopUp());
      }}
      className={PopUpStyle.container}
    >
      <div
        onClick={() => {
          flag = 1;
        }}
        className={PopUpStyle.popUpBox}
      >
        <h2 className={PopUpStyle.heading}>Create New Group</h2>
        <label className={PopUpStyle.groupName}>
          Group Name
          <input
            onChange={(e) => {
              setGroupName(e.target.value);
            }}
            placeholder="Enter group name"
            className={PopUpStyle.inputBox}
          ></input>
        </label>
        <div className={PopUpStyle.colorBox}>
          Choose Color
          <button
            onClick={(e) => {
              setColor(e);
            }}
            style={{
              background: "#B38BFA",
            }}
            className={PopUpStyle.colorButton}
            id="#B38BFA"
          ></button>
          <button
            onClick={(e) => {
              setColor(e);
            }}
            style={{
              background: "#FF79F2",
            }}
            className={PopUpStyle.colorButton}
            id="#FF79F2"
          ></button>
          <button
            onClick={(e) => {
              setColor(e);
            }}
            style={{
              background: "#43E6FC",
            }}
            className={PopUpStyle.colorButton}
            id="#43E6FC"
          ></button>
          <button
            onClick={(e) => {
              setColor(e);
            }}
            style={{
              background: "#F19576",
            }}
            className={PopUpStyle.colorButton}
            id="#F19576"
          ></button>
          <button
            onClick={(e) => {
              setColor(e);
            }}
            style={{
              background: "#0047FF",
            }}
            className={PopUpStyle.colorButton}
            id="#0047FF"
          ></button>
          <button
            onClick={(e) => {
              setColor(e);
            }}
            style={{
              background: "#6691FF",
            }}
            className={PopUpStyle.colorButton}
            id="#6691FF"
          ></button>
        </div>
        <button
          onClick={() => {
            if (groupName.length !== 0 && groupColorCode !== null) {
              createGroup();
            }
          }}
          className={PopUpStyle.createButton}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default PopUp;
