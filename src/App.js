import "./Style/style.scss";
// import Wrapper from "./Components/Wrapper/Wrapper";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="Container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
