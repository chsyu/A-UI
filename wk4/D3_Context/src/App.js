import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import './App.css';
import { TestContext } from "./contexts"

function App() {
  const [open, setOpen] = React.useState(false);
  const onSetAsideOpen = (state) => {
    setOpen(state);
  }
  return (
    <TestContext.Provider value={{ msg: "Hello World" }}>
      <BrowserRouter>
        <div className="grid-container">
          <Header onSetAsideOpen={onSetAsideOpen} />
          <Aside open={open} onSetAsideOpen={onSetAsideOpen} />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    </TestContext.Provider>
  );
}

export default App;
