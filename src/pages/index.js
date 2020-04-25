import React from "react"
import "../style.css"
import Info from "../components/info"
import { Helmet } from "react-helmet"

function index() {
  return (
    <div>
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <title>jasonmiazga.com</title>
      </Helmet>
    </div>
  )
}

export default index
