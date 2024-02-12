import React from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unSetPopUp } from "../../slices/popUpSlice";

function PopUp() {
  const dispatch = useDispatch();
  let flag = 0;
  return (
    <div
      onClick={() => {
        if (flag === 1) {
          flag = 0;
          return;
        }
        dispatch(unSetPopUp());
      }}
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "2px solid red",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: "1",
      }}
    >
      <div
        onClick={() => {
          flag = 1;
        }}
        style={{
          height: "40%",
          width: "35%",
          background: "white",
          overflow: "hidden",
          position: "relative",
          // border: "1px solid black",
        }}
      >
        <h2 style={{ height: "auto" }}>Create New Group</h2>
        <label style={{ height: "auto" }}>
          Group Name
          <input
            placeholder="Enter group name"
            style={{ paddingLeft: "5px", height: "auto", width: "auto" }}
          ></input>
        </label>
        <div
          style={{
            height: "auto",
            width: "auto",
            border: "2px solid red",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Choose Color
          <button
            style={{
              background: "#B38BFA",
              height: "25px",
              width: "25px",
              border: "none",
              borderRadius: "50%",
              // border: "1px solid red",
            }}
            id="#B38BFA"
          ></button>
          <button
            style={{
              background: "#FF79F2",
              height: "25px",
              width: "25px",
              border: "none",
              borderRadius: "50%",
            }}
            id="#FF79F2"
          ></button>
          <button
            style={{
              background: "#43E6FC",
              height: "25px",
              width: "25px",
              border: "none",
              borderRadius: "50%",
            }}
            id="#43E6FC"
          ></button>
          <button
            style={{
              background: "#F19576",
              height: "25px",
              width: "25px",
              border: "none",
              borderRadius: "50%",
            }}
            id="#F19576"
          ></button>
          <button
            style={{
              background: "#0047FF",
              height: "25px",
              width: "25px",
              border: "none",
              borderRadius: "50%",
            }}
            id="#0047FF"
          ></button>
          <button
            style={{
              background: "#6691FF",
              height: "25px",
              width: "25px",
              border: "none",
              borderRadius: "50%",
            }}
            id="#6691FF"
          ></button>
        </div>
        <button
          style={{
            background: "#001F8B",
            color: "#FFFFFF",
            borderRadius: "5px",
            height: "30px",
            width: "80px",
            border: "none",
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default PopUp;
