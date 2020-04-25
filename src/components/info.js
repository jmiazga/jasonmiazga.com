import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style={{ color: "white" }}>Hello, I'm</span> <br />
        Jason Miazga.
      </div>
      <div className="h1 code mt-4 mb-3">{"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        Senior Developer at VNDLY.
        <br /> Organizer for{" "}
        <a href="https://momentumdevcon.com/">
          Momentum Developer Conference
        </a>{" "}
        and{" "}
        <a href="https://www.meetup.com/Cincinnati-Software-Craftsmanship/">
          Cincinnati Software Craftsmanship Meetup
        </a>
        .
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/jmiazga">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://github.com/jmiazga">
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/jasonmiazga/"
        >
          <Linkedin />
        </a>
        <a className="mr-5 icon" href="mailto://jmiazga+website@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
