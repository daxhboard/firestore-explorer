import React from "react";
import "./styles/App.css";
import CardDocument from "./component/Cards/CardDocument";

function App() {
  return (
    <div className="App container">
      <CardDocument cardTitle="Spexware DB" cardId="spexware-db" />
    </div>
  );
}

export default App;
