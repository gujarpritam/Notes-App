import React from "react";
import MainPageImage from "../../../assets/Main Page Image.png";
import EncryptionImage from "../../../assets/encryption.png";
import NotesDisplayStyle from "./NotesDisplay.module.css";

function NotesDisplay() {
  return (
    <div className={NotesDisplayStyle.container}>
      <div style={{ height: "33%", width: "45%", marginTop: "10%" }}>
        <img style={{ height: "100%", width: "100%" }} src={MainPageImage} />
      </div>
      <h1 className={NotesDisplayStyle.heading}>Pocket Notes</h1>
      <p className={NotesDisplayStyle.paragraph}>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>

      <p className={NotesDisplayStyle.encryptionBox}>
        <img style={{ height: "15px", width: "13px" }} src={EncryptionImage} />
        &nbsp;end-to-end encrypted
      </p>
    </div>
  );
}

export default NotesDisplay;
