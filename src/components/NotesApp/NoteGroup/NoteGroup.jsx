import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideNote } from "../../../slices/noteDisplaySlice";
import SendIcon from "../../../assets/Send Icon.png";
import EnabledSendIcon from "../../../assets/Enabled Send Icon.png";
import backArrow from "../../../assets/back arrow.png";
import NoteGroupStyle from "./NoteGroup.module.css";

function NoteGroup() {
  let [note, setNote] = useState("");
  let [noteObject, setNoteObject] = useState([]);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.noteDisplay);
  let groupList, group;

  if (localStorage.hasOwnProperty("groupList")) {
    groupList = JSON.parse(localStorage.getItem("groupList"));
  }

  group = groupList[state.value];

  useEffect(() => {
    if (note.trim().length > 0) {
      document.getElementById("enabledSendIcon").setAttribute(
        "style",
        `height: auto; width: auto;
        position: fixed;
        bottom: 4%;
        right: 4%;
        display: flex;
        cursor: pointer;`
      );
    } else {
      document
        .getElementById("enabledSendIcon")
        .setAttribute("style", `display: none;`);
    }
  }, [note]);

  const notesRepo = JSON.parse(localStorage.getItem("notesRepo"));
  const topicNotes = notesRepo[state.value];

  const displayHomePage = () => {
    dispatch(hideNote());
  };

  const addNote = () => {
    if (note.trim().length > 0) {
      const d = Date();
      console.log("date()", Date());
      let dateTimeArr = d.split(" ", 5);
      console.log(dateTimeArr);

      // console.log("date()", typeof Date());

      // const d = JSON.stringify(
      //   new Date().toLocaleString(undefined, { timeZone: "Asia/Kolkata" })
      // );

      // console.log("after stringify", d);

      // let dateTimeArr = d.split(",", 2);

      // const dateArr = dateTimeArr[0].slice(1).split("/", 3);
      // const months = [
      //   "Jan",
      //   "Feb",
      //   "Mar",
      //   "Apr",
      //   "May",
      //   "Jun",
      //   "Jul",
      //   "Aug",
      //   "Sep",
      //   "Oct",
      //   "Nov",
      //   "Dec",
      // ];

      // let dateTimeArr1 = dateTimeArr[1].split(" ", 3);
      const timeArr = dateTimeArr[4].split(":", 2);
      // console.log(timeArr);
      const hour = timeArr[0] > 12 ? timeArr[0] % 12 : timeArr[0];

      const meridian = timeArr[0] > 11 ? "PM" : "AM";
      console.log(meridian);
      noteObject.push(
        note,
        dateTimeArr[2],
        dateTimeArr[1],
        dateTimeArr[3],
        hour,
        timeArr[1],
        meridian
      );

      notesRepo[state.value].push(noteObject);
      localStorage.setItem("notesRepo", JSON.stringify(notesRepo));
      setNoteObject([]);
    }
  };

  return (
    <div className={NoteGroupStyle.container}>
      <div className={NoteGroupStyle.headingBox}>
        <img
          onClick={() => displayHomePage()}
          src={backArrow}
          className={NoteGroupStyle.backArrow}
        />
        <div
          className={NoteGroupStyle.headingIcon}
          style={{
            background: `${group[2]}`,
          }}
        >
          {group[1]}
        </div>
        <h3 className={NoteGroupStyle.heading}>{group[0]}</h3>
      </div>

      <div className={NoteGroupStyle.notesContainer}>
        {topicNotes.map((data, index) => {
          return (
            <div className={NoteGroupStyle.noteBox}>
              <div className={NoteGroupStyle.noteText}>{data[0]}</div>
              <div className={NoteGroupStyle.timeStamp}>
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
                {data[4] + ":" + data[5] + " " + data[6]}
              </div>
            </div>
          );
        })}
      </div>

      <div className={NoteGroupStyle.inputBoxContainer}>
        <textarea
          onChange={(e) => {
            setNote(e.target.value);
          }}
          placeholder="Enter your text here..........."
          className={NoteGroupStyle.textBox}
        />

        <img src={SendIcon} className={NoteGroupStyle.disabledSendIcon} />
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
