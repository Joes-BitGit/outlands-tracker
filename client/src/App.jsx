import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="route-container">
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/profile/:platform/:gamertag" element={<Profile />} />
      </Routes>
    </div>
  );
}
