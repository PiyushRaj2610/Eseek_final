import React from "react";
import { Home } from "./pages/Home.js";
import { SignUp } from "./pages/SignUp.js";
import { Join } from "./pages/Join.js";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Games } from "./pages/Games.js";
import Profile from "./pages/Profile.js";

function App() {
  return (
    <div className="bg-black relative w-full h-screen">

      {/* Main Content */}
      <div className="relative z-10">
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Join />} />
              <Route path="/dashboard/games" element={<Games />} />
              <Route path="/profile" element={<Profile   />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </div>
    </div>
  );
}

export default App;
