import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import EmailEditor from "./components/EmailEditor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Email Bulider
      </header>
      <EmailEditor />
    </div>
  );
}

export default App;
