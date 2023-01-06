import "./App.css";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Dashboard from "./Components/Body/DashboarPage/Dashboard";
import Booking from "./Components/Body/BokkingPage/Booking";

const App = () => {
  return (
    <div className="Main">
      <SideBar />
      <div className="TOP-DownDiv">
        <Header />
        <Routes>
          <Route exact path="/" element={<Body />}>
            <Route index element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Booking" element={<Booking />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
