import React from "react"
import "../style.css"
import Info from "../components/info"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  return (
    <div>
      <Info social={data.site.siteMetadata.social} />
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={data.site.siteMetadata.description} />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
    </div>
  )
}

export default Index

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        social {
          twitter
          github
          linkedin
          email
        }
      }
    }
  }
`
