import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import Header from "./webpages/header/header";
import Hero from "./webpages/hero/hero";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
