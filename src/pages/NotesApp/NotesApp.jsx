import React from "react";
import NotesList from "../../components/NotesApp/NotesList";
import NotesDisplay from "../../components/NotesApp/NotesDisplay";
import NoteGroup from "../../components/NotesApp/NoteGroup";
import PopUp from "../../components/NotesApp/PopUp/PopUp";
import { useSelector } from "react-redux";

function NotesApp() {
  const state = useSelector((state) => state.popUp);
  const state1 = useSelector((state) => state.noteDisplay);
  console.log(state1.value);

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
      {state1.value === -1 ? <NotesDisplay /> : <NoteGroup />}
    </div>
  );
}

export default NotesApp;
