import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SendIcon from "../../assets/Send Icon.png";
import EnabledSendIcon from "../../assets/Enabled Send Icon.png";

function NoteGroup() {
  let [note, setNote] = useState("");
  let [noteObject, setNoteObject] = useState([]);

  const state = useSelector((state) => state.noteDisplay);
  let groupList, group;

  if (localStorage.hasOwnProperty("groupList")) {
    groupList = JSON.parse(localStorage.getItem("groupList"));
  }

  group = groupList[state.value];
  console.log(group);

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

  const notesRepo = JSON.parse(localStorage.getItem("notesRepo"));
  const topicNotes = notesRepo[state.value];

  const addNote = () => {
    if (note.trim().length > 0) {
      const d = JSON.stringify(
        new Date().toLocaleString(undefined, { timeZone: "Asia/Kolkata" })
      );

      let dateTimeArr = d.split(",", 2);
      console.log(dateTimeArr);
      const dateArr = dateTimeArr[0].slice(1).split("/", 3);
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      let dateTimeArr1 = dateTimeArr[1].split(" ", 3);
      console.log(dateTimeArr1[1]);
      console.log(dateTimeArr1[2].slice(0, 2));

      noteObject.push(
        note,
        dateArr[1],
        months[dateArr[0] - 1],
        dateArr[2],
        dateTimeArr1[1].slice(0, 5),
        dateTimeArr1[2].slice(0, 2)
      );

      console.log(noteObject);

      notesRepo[state.value].push(noteObject);
      localStorage.setItem("notesRepo", JSON.stringify(notesRepo));
      setNoteObject([]);
    }
  };

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
        // border: "2px solid red",

        // overflow: "unset",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "10%",
          width: "100%",
          // margin: "0% 0% 5% 0%",
          // border: "1px solid red",
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
            // border: "1px solid black",
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
          height: "60%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "scroll",
          // border: "2px solid black",
        }}
      >
        {topicNotes.map((data, index) => {
          return (
            <div
              style={{
                height: "auto",
                width: "90%",
                background: "white",
                margin: "1.5% 1.5%",
                borderRadius: "5px",
                boxSizing: "border-box",

                boxShadow: "0px 4px 20px 0px #00000040",
              }}
            >
              <div
                style={{
                  height: "auto",
                  width: "100%",
                  background: "white",
                  // border: "1px solid black",
                  padding: "10px",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  // boxSizing: "border-box",
                }}
              >
                {data[0]}
              </div>
              <div
                style={{
                  height: "auto",
                  width: "100%",
                  padding: "10px",
                  background: "white",
                  // border: "1px solid blue",
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                  display: "flex",
                  justifyContent: "flex-end",
                  // boxSizing: "border-box",
                  // alignItems: "center",
                }}
              >
                {data[1] + " " + data[2] + " " + data[3] + "  "}
                <span
                  style={{
                    height: "auto",
                    width: "auto",
                    color: "#353535",
                    fontWeight: "900",
                  }}
                >
                  &nbsp;&nbsp;&#x2022;&nbsp;&nbsp;
                </span>{" "}
                {data[4] + " " + data[5]}
              </div>
            </div>
          );
        })}
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
            addNote();
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
