import React from "react";
import "./styles.css";

export default function Card(props) {
  return (
    <div
    style={{
        borderRadius: 5,
        height: 80,
        padding: 10,
        backgroundColor: "#735bf2",
        width: 250,
        marginBottom: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <strong style={{ marginTop: 35, fontSize: 25, padding: 10 }}>{props.name}</strong>
      <small style={{ padding: 10, fontSize: 18 }}>{props.time}</small>
      <button
          type="button"          
          style={{
            margin: 10,
            padding: 10,
            color: "black",
            cursor: "pointer",
            backgroundColor: "aqua",
            borderRadius: 1000,
            marginLeft: 200,
            position: "relative",
            bottom: 50
          }}
        >
         Excluir
        </button>
    </div>
  );
}
