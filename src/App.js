import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
const [loggedIn, setLoggedIn] = useState(false);

const savedToken = localStorage.getItem("token");

useEffect(() => {
  if (savedToken) {
    setLoggedIn(true);
  }
}, [savedToken])

  return (
    <BrowserRouter>
      <Navbar loginStatus={loggedIn} handleLoginStatus={setLoggedIn} />
      <Content loginStatus={loggedIn} handleLoginStatus={setLoggedIn} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
