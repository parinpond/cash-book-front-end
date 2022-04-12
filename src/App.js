
import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPortal from "./components/Login/Login";
function App() {
  const [token, setToken] = useState();
  if(!token) {
    return <LoginPortal setToken={setToken} />
  }
}

export default App;
