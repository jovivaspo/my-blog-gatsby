/*MODULES*/
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

/*COMPONENTS*/

/*CSS*/
import "../assets/css/logo.css"

const Logo = () => {
  return (
    <div className="logo-container">
      <StaticImage src="../assets/images/Logo.png" alt="Logo de prueba" />
    </div>
  )
}

export default Logo
