/*MODULES*/
import React from "react"

/*COMPONENTS*/
import Navbar from "./Navbar"
import Footer from "./Footer"

/*CSS*/
import "../assets/css/normalize.css"
import "../assets/css/layout.css"

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Navbar />
      <>{children}</>
      <Footer />
    </main>
  )
}

export default Layout
