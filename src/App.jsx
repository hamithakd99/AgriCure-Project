import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import ResultPage from "./Pages/Result_Page/ResultPage";
import News from "./Pages/News";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/disease/:diseaseKey" element={<ResultPage />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
