import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import RecommendedContent from "./RecommendedContent"

import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app_page">
        <Sidebar />
        <RecommendedContent />
    </div>
    </div>
  );
}

export default App;
