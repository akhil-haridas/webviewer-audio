import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import WebAudio from "./components/WebAudio";
import WebVideo from "./components/WebVideo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/audio">Audio</Link>
                  </li>
                  <li>
                    <Link to="/video">Video</Link>
                  </li>
                </ul>
              </nav>
            </div>
          }
        />
        <Route path="/audio" element={<WebAudio />} />
        <Route path="/video" element={<WebVideo />} />
      </Routes>
    </Router>
  );
};

export default App;
