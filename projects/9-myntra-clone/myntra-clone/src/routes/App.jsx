import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/FetchItem";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <div>
      <Header />
      <FetchItems />
      {fetchStatus.cureentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </div>
  );
}

export default App;
