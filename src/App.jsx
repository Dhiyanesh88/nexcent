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
import Cal from "./webpages/Calender/Cal";
import Customer from "./webpages/Customers/Customers";
import Communityupd from "./webpages/community-updates/community-upd";
import Foot from "./webpages/footer/foot";
import "./App.css";


function App() {
  return (
    <>
      <Header />
        <Hero />
        <Client />
        <Community />
        <Unlock />
        <Achieve />
        <Cal />
        <Customer />
        <Communityupd />
      <Foot />
    </>
  );
}

export default App;
