import React from "react"
import Header from "../header/Header.jsx" 
import MainComponent from "../main-component/MainComponent.jsx"
import Footer from "../footer/Footer.jsx"
import './main-layout.scss'

function App() {
  return (
    <div className="main-layout">
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;