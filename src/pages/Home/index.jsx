import React from "react";
import { Card } from "../../components/Card";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: "blueviolet",
          marginTop: 84,
          marginBottom: 24,
        }}
      >
        TO DO LIST
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          style={{
            borderRadius: 5,
            height: 20,
            padding: 10,
            backgroundColor: "rgb(211, 211, 211)",
            width: 300
          }}
          type="text"
          placeholder="Digite Aqui"
        />
        <button
          type="button"
          style={{
            margin: 10,
            padding: 10,
            color: "black",
            borderRadius: 5,
            cursor: "pointer",
            backgroundColor: "aqua",
          }}
        >
          Adicionar
        </button>

        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
