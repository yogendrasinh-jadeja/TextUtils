import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [switchtxt, setswitchtxt] = useState("Enable DarkMode");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-light')
  }
  const toggleMode = (cls) => {
    console.log(cls)
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setmode("dark");
      setswitchtxt("Disable Darkmode");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark Mode has been enabled", "success");
    } else {
      setmode("light");
      setswitchtxt("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode has been enabled", "success");
    }
    

  };
  return (
    <>
      <Router>
          <Navbar
            title="TextUtils"
            mode={mode}
            toggleMode={toggleMode}
            txt={switchtxt}
          />
          <Alert alert={alert} />
          <div className="container my-3">
            {/* <TextForm
          showalert={showalert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        <About /> */}
            <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showalert={showalert}
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                />
              }
            />
            <Route exact path="/About" element={<About mode={mode} />} />
            </Routes>
          </div>

      </Router>
    </>
  );
}

export default App;
