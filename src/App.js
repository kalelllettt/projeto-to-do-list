import React from "react";

function App() {
  return (
    <div style={{display:"flex", alignItens:"center", flexDirection:"column", backgroundColor:"rgb(198, 86, 0)"}}>
      <h1 style={{display:"flex", alignItems:"center", flexDirection:"column", color: "blue", margin:"84 0 24",  }}>TO DO LIST</h1>
      <input style={{backgroundColor:"rgb(156, 146, 225)", padding:"50"}} type="text" placeholder="Digite Aqui" />
      <button type="button" style={{backgroundColor:"rgb(58, 25, 79)", color:"rgb(12, 125, 125)"}}>Adicionar</button>
    </div>
  );
}

export default App;
