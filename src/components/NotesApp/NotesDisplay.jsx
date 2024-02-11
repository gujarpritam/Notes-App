import React from "react";
import MainPageImage from "../../assets/Main Page Image.png";
import EncryptionImage from "../../assets/encryption.png";

function NotesDisplay() {
  return (
    <div
      style={{
        background: "#DAE5F5",
        height: "100%",
        width: "70%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "",
        alignItems: "center",
      }}
    >
      <div style={{ height: "33%", width: "45%", marginTop: "10%" }}>
        <img style={{ height: "100%", width: "100%" }} src={MainPageImage} />
      </div>
      <h1
        style={{
          height: "auto",
          width: "70%",
          // border: "1px solid black",
          textAlign: "center",
          padding: "10px",
          fontWeight: "bolder",
        }}
      >
        Pocket Notes
      </h1>
      <p
        style={{
          height: "auto",
          width: "43%",
          // border: "1px solid black",
          textAlign: "center",
          color: "#292929",
          Weight: "500",
          lineHeight: "1.2",
        }}
      >
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>

      <p
        style={{
          color: "#292929",
          height: "auto",
          width: "auto",
          // border: "1px solid red",
          bottom: "2px",
          marginTop: "32vh",
        }}
      >
        <img style={{ height: "15px", width: "13px" }} src={EncryptionImage} />
        &nbsp;end-to-end encrypted
      </p>
      {/* <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          height: "30%",
        }}
      >
      </div> */}
    </div>
  );
}

export default NotesDisplay;
