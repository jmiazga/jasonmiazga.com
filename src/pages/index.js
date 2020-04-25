import React from "react"
import "../style.css"
import Info from "../components/info"
import { Helmet } from "react-helmet"

function index() {
  return (
    <div>
      <Info />
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content="Jason Miazga Cincinnati, OH web developer" />
        <title>jasonmiazga.com</title>
      </Helmet>
    </div>
  )
}

export default index
