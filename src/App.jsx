import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./webpages/header/header";
import Hero from "./webpages/hero/hero";
import Client from "./webpages/clients/client";
import Community from "./webpages/community/community";
import Unlock from "./webpages/Unlock/Unlock";
import Achieve from "./webpages/Achievements/Achieve";
import Cal from "./webpages/Calender/Cal";
import Customer from "./webpages/Customers/Customers";
import Communityupd from "./webpages/community-updates/community-upd";
import Foot from "./webpages/footer/foot";
import Login from "./backend/login"; // Your Login.jsx
import SignUp from "./backend/signup"; // Your SignUp.jsx
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page with Header and Footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Client />
              <Community />
              <Unlock />
              <Achieve />
              <Cal />
              <Customer />
              <Communityupd />
              <Foot />
            </>
          }
        />
        
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
