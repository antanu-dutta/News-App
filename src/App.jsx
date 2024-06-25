import React, { useEffect } from "react";
import { SimpleNavbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News";

function App() {
  useEffect(() => {
    document.body.style.background = "#373A40";
    return () => (document.body.style.background = "#373A40");
  }, []);

  return (
    <BrowserRouter>
      <div className="py-3">
        <SimpleNavbar />

        <Routes>
          <Route
            key="general"
            path="/"
            element={<News category={"general"} />}
          />
          <Route
            key="business"
            path="/business"
            element={<News category={"business"} />}
          />
          <Route
            path="/entertainment"
            element={<News category={"entertainment"} />}
          />
          <Route
            key="health"
            path="/health"
            element={<News category={"health"} />}
          />
          <Route
            key="science"
            path="/science"
            element={<News category={"science"} />}
          />
          <Route
            key="sports"
            path="/sports"
            element={<News category={"sports"} />}
          />
          <Route
            key="technology"
            path="/technology"
            element={<News category={"technology"} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
