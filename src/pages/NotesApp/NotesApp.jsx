import React from "react";
import NotesList from "../../components/NotesApp/NotesList";
import NotesDisplay from "../../components/NotesApp/NotesDisplay";
import PopUp from "../../components/NotesApp/PopUp/PopUp";
import { useSelector } from "react-redux";

function NotesApp() {
  const state = useSelector((state) => state.popUp);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {state.value === 1 && <PopUp />}
      <NotesList />
      <NotesDisplay />
    </div>
  );
}

export default NotesApp;
