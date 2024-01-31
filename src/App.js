import "./App.css";
import { useState } from "react";
import { getUser } from "./utilities/users-service.js";
import AuthPage from "./pages/AuthPage.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  const [user, setUser] = useState(getUser());
  
  return <>
  {user ? <Profile/>:<AuthPage />}
  </>;
}

export default App;
