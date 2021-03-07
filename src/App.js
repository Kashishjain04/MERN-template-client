import React, { useEffect, useState } from "react";
import { appInstance as axios } from "./api";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  useEffect(() => {
    axios
      .post("/data", { source: "From Client" })
      .then(({ data }) => setResult(data.source))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>{result}</h3>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
