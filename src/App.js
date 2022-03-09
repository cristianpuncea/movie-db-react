import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        {/* <Content />
        <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
