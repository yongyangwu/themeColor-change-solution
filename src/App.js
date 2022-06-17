import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Case1 from "./pages/case1/index.js";
import Case3 from "./pages/case3/index.js";
import Case4 from "./pages/case4/index.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Case1 />}>

          <Route path="case3" element={<Case3 />} />
          <Route path="case4" element={<Case4 />} />
        </Route> */}
        <Route path="/" element={<Case1 />} />
        <Route path="case3" element={<Case3 />} />
        <Route path="case4" element={<Case4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
