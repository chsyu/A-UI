import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import './App.css';


function App() {
  const [open, setOpen] = React.useState<boolean>(false);
  const onSetAsideOpen = (openState: boolean) => {
    setOpen(openState);
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header onSetAsideOpen={onSetAsideOpen} />
        <Aside open={open} onSetAsideOpen={onSetAsideOpen} />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
