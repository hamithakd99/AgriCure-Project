import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import ResultPage from "./Pages/Result_Page/ResultPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <NavigationBar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>

      <ResultPage />
    </div>
  );
}

export default App;
