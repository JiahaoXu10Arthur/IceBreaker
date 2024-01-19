import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./Homepage";
import JoinRoomPage from "./JoinRoomPage";
import WaitRoomPage from "./WaitRoomPage";
import UserProfilePage from "./UserProfilePage";
import reportWebVitals from "./reportWebVitals";
import CreateRoomPage from "./CreateRoomPage";
import ChatRoomPage from "./ChatRoomPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/CreateRoomPage" element={<CreateRoomPage />} />
        <Route path="/JoinRoompage" element={<JoinRoomPage />} />
        <Route path="/WaitRoomPage" element={<WaitRoomPage />} />
        <Route path="/UserProfilePage" element={<UserProfilePage />} />
        <Route path="/" element = {<ChatRoomPage/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
