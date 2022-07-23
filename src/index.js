import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import GameList from "./pages/GameList";
import RockPaperScissors from "./pages/RockPaperScissors";
import PageNotFound from "./pages/PageNotFound";
import PlayGame from "./pages/PlayGame";
import Players from "./pages/Players";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/gameList" element={<GameList />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
      <Route path="/play-game" element={<PlayGame />} />
      <Route path="/players" element={<Players />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
