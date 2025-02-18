import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Cast from "./pages/Cast";
import Rating from "./pages/Rating";
import Home from "./pages/Home";


function App() {
  const [bgImage, setBgImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGS5ddSUO4qCKi1uf-0kKCBb8ixoSVEVIMA&s"
  );

  const changeBackground = () => {
    const images = [
      "https://example.com/movie1.jpg",
      "https://example.com/movie2.jpg",
      "https://example.com/movie3.jpg",
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBgImage(randomImage);
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <BrowserRouter>
        <Navbar />
        <button className="bg-button" onClick={changeBackground}>
          Change Background
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
