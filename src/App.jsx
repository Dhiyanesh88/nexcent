import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import Header from "./webpages/header/header";
import Hero from "./webpages/hero/hero";
import Client from "./webpages/clients/client";
import Community from "./webpages/community/community";
import Unlock from "./webpages/Unlock/Unlock";
import Achieve from "./webpages/Achievements/Achieve";
import "./App.css";


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Client />
        <Community />
      </main>
      <main>
        <Unlock />
        <Achieve />
      </main>
    </>
  );
}

export default App;
