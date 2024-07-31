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
                <button>
                  <Link to="/audio">Webviewer - Audio</Link>
                </button>
                <button>
                  <Link to="/video">Webviewer - Video</Link>
                </button>
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
