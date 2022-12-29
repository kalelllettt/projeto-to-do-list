import React, { useState } from "react";
import Card from "../../components/Card";

function Home() {
  const [studentName, setSudentName] = useState('');
  const [students, setStudents] = useState([]);
 
 function handleAddStudent(){
   const newStudent = {
    name: studentName,
   
  
   }

   setStudents(prevState => [...prevState, newStudent]);

 }
 
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
            width: 300,
          }}
          onChange={e => setSudentName(e.target.value)}
          type="text"
          placeholder="Digite Aqui"
        />

        <input
          style={{
            borderRadius: 5,
            height: 20,
            padding: 10,
            backgroundColor: "rgb(211, 211, 211)",
            width: 300,
         }}
          type="number & string"
          placeholder="Horário"
        />

        <button
          type="button"
          onClick={handleAddStudent}
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
        {
          students.map(student =>  <Card name={student.name} time={student.time}/>)
      
          }
      </div>
    </div>
  );
}

export default Home;
