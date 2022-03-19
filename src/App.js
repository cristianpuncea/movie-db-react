import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Content />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
