import "./App.css";
import { useState } from "react";
import { getUser } from "./utilities/users-service.js";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";

function App() {
  const [user, setUser] = useState(getUser());
  
  return <>
    {user ? <Homepage user={user} setUser={setUser} />  : <AuthPage/>}
    {/* <AuthPage /> */}
    
  </>;
}

export default App;
