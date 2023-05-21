// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  let toggleMode1 = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#031536d9';
      showAlert("Dark Mode has been enabled", "success")
    }
  }
  let toggleMode2 = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#660505';
      showAlert("Dark Mode has been enabled", "success")
    }
  }
  let toggleMode3 = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode has been enabled", "success")
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#084103';
      showAlert("Dark Mode has been enabled", "success")
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="My App" aboutText="About Us" mode={mode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} />
      <Alert alert={alert} />
      <div className="container mt-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} /> */}
        {/* </Routes> */}
      </div >
      {/* </Router> */}
    </>
  );
}

export default App;
