import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItem";

function App() {
  return (
    <div>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
