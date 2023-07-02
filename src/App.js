import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blog/:id" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
