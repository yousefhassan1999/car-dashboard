import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
const App = () => {
  return (
    <div className="Main">
      <SideBar />
      <div className="TOP-DownDiv">
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default App;
