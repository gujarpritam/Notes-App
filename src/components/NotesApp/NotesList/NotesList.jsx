import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPopUp } from "../../../slices/popUpSlice";
import { showNote } from "../../../slices/noteDisplaySlice";
import NotesListStyle from "./NotesList.module.css";

function NotesList() {
  const dispatch = useDispatch();
  const [background, setBackground] = useState(-1);

  let groupList = [];
  if (localStorage.hasOwnProperty("groupList")) {
    groupList = JSON.parse(localStorage.getItem("groupList"));
  }

  const selectElement = (id) => {
    if (background !== -1) {
      document.getElementById(background).setAttribute(
        "style",
        `display: flex;
        height: auto;
        width: 100%;
        margin: 3% 0% 5% 0%;
        border-radius: 10px;
        cursor: pointer;`
      );
    }
    setBackground(id);

    document.getElementById(id).setAttribute(
      "style",
      `display: flex;
      height: auto;
      width: 100%;
      margin: 3% 0% 5% 0%;
      border-radius: 10px;
      cursor: pointer;
      background: #2F2F2F2B;`
    );
  };

  return (
    <div className={NotesListStyle.container}>
      <h1 className={NotesListStyle.heading}>Pocket Notes</h1>

      <div className={NotesListStyle.notesContainer}>
        {groupList.map((groupInfo, i) => {
          return (
            <div
              key={i}
              id={i}
              onClick={(e) => {
                selectElement(e.target.id);
                dispatch(showNote(e.target.id));
              }}
              className={NotesListStyle.noteName}
            >
              <div
                id={i}
                onClick={(e) => {
                  dispatch(showNote(e.target.id));
                }}
                className={NotesListStyle.noteIcon}
                style={{ background: `${groupInfo[2]}` }}
              >
                {groupInfo[1]}
              </div>
              <h3
                id={i}
                onClick={(e) => {
                  dispatch(showNote(e.target.id));
                }}
                className={NotesListStyle.noteHeading}
              >
                {groupInfo[0]}
              </h3>
            </div>
          );
        })}
      </div>

      <div
        onClick={() => {
          dispatch(setPopUp());
        }}
        className={NotesListStyle.createNote}
      >
        +
      </div>
    </div>
  );
}

export default NotesList;
