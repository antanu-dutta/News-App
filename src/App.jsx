import React, { useEffect, useState } from "react";
import { SimpleNavbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progressBar, setProgressBar] = useState(0);
  useEffect(() => {
    document.body.style.background = "#373A40";
    return () => (document.body.style.background = "#373A40");
  }, []);

  return (
    <BrowserRouter>
      <div className="py-3">
        <SimpleNavbar />
        <LoadingBar
          color="#f11946"
          progress={progressBar}
          waitingTime={400}
          height={3}
        />
        <Routes>
          <Route
            key="general"
            path="/"
            element={
              <News setProgressBar={setProgressBar} category={"general"} />
            }
          />
          <Route
            key="business"
            path="/business"
            element={
              <News setProgressBar={setProgressBar} category={"business"} />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgressBar={setProgressBar}
                category={"entertainment"}
              />
            }
          />
          <Route
            key="health"
            path="/health"
            element={
              <News setProgressBar={setProgressBar} category={"health"} />
            }
          />
          <Route
            key="science"
            path="/science"
            element={
              <News setProgressBar={setProgressBar} category={"science"} />
            }
          />
          <Route
            key="sports"
            path="/sports"
            element={
              <News setProgressBar={setProgressBar} category={"sports"} />
            }
          />
          <Route
            key="technology"
            path="/technology"
            element={
              <News setProgressBar={setProgressBar} category={"technology"} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
