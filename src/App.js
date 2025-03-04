import "./App.css";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import PrimaryNav from "./Components/PrimaryNav";
import TextArea from "./Components/TextArea";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [btnText, setBtnText] = useState("Dark Mode");
  const [newColor, setNewColor] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const changeColor = () => {
    if (btnText === "Dark Mode") {
      setBtnText("Light Mode");
      setNewColor({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setBtnText("Dark Mode");
      setNewColor({
        color: "black",
        backgroundColor: "white",
      });
    }
  };
  document.body.style.backgroundColor = newColor.backgroundColor;
  document.body.style.color = newColor.color;
  return (
    <Router>
      <div style={newColor}>
        <PrimaryNav
          title="TextGuru"
          home="Home"
          about="About Us"
          contact="Contact US"
          btnText={btnText}
          newColor={newColor}
          changeColor={changeColor}
        />

        <Routes>
          <Route
            path="/"
            element={
              <div className="container my-4">
                <TextArea
                  primaryHeading="TextGuru - The Best Text Utility Tool For Your Daily Need"
                  UpperCase="CLICK TO UPPERCASE"
                  LowerCase="click to lowercase"
                  CapitalCase="Click To Capital Case"
                  toSentence="Click to sentence case"
                  ClearText="Clear Text"
                  newColor={newColor}
                  Copy="Copy Your Text"
                  rmvExtraSpaces="Click to Remove Extra Spaces"
                />
              </div>
            }
          />
          <Route path="about" element={<About newColor={newColor}/>} />
          <Route path="contact" element={<ContactUs newColor={newColor}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
