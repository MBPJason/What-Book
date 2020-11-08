import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import Search from "./components/Search"
import Saved from "./components/Saved"
import { Route, Switch, NavLink, Link } from 'react-router-dom'


function App() {
  useEffect(() => {
    console.log("Make an API call");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <Search/>
      {/* <Saved/> */}
    </div>
  );
}

export default App;
