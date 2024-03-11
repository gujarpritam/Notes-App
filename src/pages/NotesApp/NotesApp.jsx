import React from "react";
import NotesList from "../../components/NotesApp/NotesList/NotesList";
import NotesDisplay from "../../components/NotesApp/NotesDisplay/NotesDisplay";
import NoteGroup from "../../components/NotesApp/NoteGroup/NoteGroup";
import PopUp from "../../components/NotesApp/PopUp/PopUp";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

function NotesApp() {
  const state = useSelector((state) => state.popUp);
  const state1 = useSelector((state) => state.noteDisplay);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 431px)" });
  // console.log(state1.value);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {isMobileScreen ? (
        <div
          style={{
            height: "100%",
            width: "100vw",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {state.value === 1 && <PopUp />}
          {state1.value === -1 && <NotesList />}
          {state1.value !== -1 && <NoteGroup style={{ width: "100vw" }} />}
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default NotesApp;
