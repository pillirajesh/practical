import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import UserData from "./components/UserData";
import UserRegistration from "./components/UserRegistration";

const App = () => {
  return (
    <div className="App">
      <div className="left-container">
        <Header />
      </div>
      <div className="right-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userdata" element={<UserData />} />
          <Route path="/userregistration" element={<UserRegistration />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
