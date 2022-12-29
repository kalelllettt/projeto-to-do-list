import React from "react";
import "./styles.css";

export default function Card(props) {
  return (
    <div
      style={{
        borderRadius: 5,
        height: 70,
        padding: 10,
        backgroundColor: "#735bf2",
        width: 250,
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <strong style={{ fontSize: 18, padding: 10 }}>{props.name}</strong>
      <small style={{ padding: 10, fontSize: 18 }}>{props.time}</small>
    </div>
  );
}
