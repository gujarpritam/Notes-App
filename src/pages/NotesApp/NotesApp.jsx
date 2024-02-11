import React from "react";
import NotesList from "../../components/NotesApp/NotesList";
import NotesDisplay from "../../components/NotesApp/NotesDisplay";
import PopUp from "../../components/NotesApp/PopUp";

function NotesApp() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* {popUpValue && <PopUp />} */}
      <NotesList />
      <NotesDisplay />
    </div>
  );
}

export default NotesApp;
