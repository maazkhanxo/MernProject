import Client from "./Components/Client";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex" style={{ justifyContent: "space-around" }}>
        <Client />
        <Form />
      </div>
    </div>
  );
}

export default App;
