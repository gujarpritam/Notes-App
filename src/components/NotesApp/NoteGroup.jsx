import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SendIcon from "../../assets/Send Icon.png";
import EnabledSendIcon from "../../assets/Enabled Send Icon.png";

function NoteGroup() {
  const [note, setNote] = useState("");

  useEffect(() => {
    if (note.trim().length > 0) {
      document.getElementById("enabledSendIcon").setAttribute(
        "style",
        `height: auto; width: auto;
        position: fixed;
        bottom: 4%;
        right: 4%;
        display: flex;`
      );
    } else {
      document
        .getElementById("enabledSendIcon")
        .setAttribute("style", `display: none;`);
    }
  }, [note]);
  const state = useSelector((state) => state.noteDisplay);
  let groupList, group;

  if (localStorage.hasOwnProperty("groupList")) {
    groupList = JSON.parse(localStorage.getItem("groupList"));
  }

  group = groupList[state.value];
  console.log(group);

  return (
    <div
      style={{
        background: "#DAE5F5",
        height: "100%",
        width: "70%",
        display: "flex",
        flexDirection: "column",
        color: "black",
        alignItems: "center",
        border: "2px solid red",
        // overflow: "unset",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "10%",
          width: "100%",
          margin: "0% 0% 5% 0%",
          border: "1px solid red",
          background: "#001F8B",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "45px",
            width: "45px",
            borderRadius: "50%",
            border: "none",
            color: "white",
            // textAlign: "center",
            // padding: "2% 2%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "large",
            fontWeight: "400",
            margin: "0% 3% 0% 5%",
            background: `${group[2]}`,
            border: "1px solid black",
          }}
        >
          {group[1]}
        </div>
        <h3
          style={{
            height: "auto",
            width: "auto",
            display: "flex",
            color: "white",
            alignItems: "center",
            fontSize: "x-large",
          }}
        >
          {group[0]}
        </h3>
      </div>

      <div
        style={{
          height: "30%",
          width: "70%",
          background: "#001F8B",
          position: "fixed",
          bottom: "0px",
          right: "0px",
          borderBottomLeftRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <textarea
          onChange={(e) => {
            setNote(e.target.value);
          }}
          placeholder="Enter your text here..........."
          style={{
            height: "80%",
            width: "92%",
            color: "#9A9A9A",
            fontSize: "large",
            padding: "2%",
            boxSizing: "border-box",
            border: "none",
          }}
        />

        <img
          src={SendIcon}
          style={{
            height: "auto",
            width: "auto",
            position: "fixed",
            bottom: "4%",
            right: "4%",
          }}
        />
        <img
          onClick={() => {
            console.log("hi");
          }}
          src={EnabledSendIcon}
          id="enabledSendIcon"
          style={{
            display: "none",
          }}
        />
      </div>
    </div>
  );
}

export default NoteGroup;
