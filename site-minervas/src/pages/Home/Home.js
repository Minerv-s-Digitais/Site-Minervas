import React from "react"

import Content from "../../components/content/Content"
import Events from "../../components/events/Content"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Motivation from "../../components/motivation/Motivation"
import Partners from "../../components/partners/Partners"
import Who from "../../components/who/Who"
import Net from "../../components/net/Net"
import { BrowserRouter } from "react-router-dom";

import "./Home.scss"

function Home() {
  return (
    <BrowserRouter>
      <div className="Home" id="#">
        <Header />
        <Content />
        <Who />
        <Motivation />
        <Events />
        <Partners/>
        <Net />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Home
