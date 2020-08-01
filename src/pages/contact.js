import React from "react"
import {Link,graphql,useStaticQuery} from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Head from '../components/head'

const ContactPage = () => {const data = useStaticQuery( graphql`
query {
   file(relativePath: { eq: "homeImg.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`)

    return (
        <Layout>
            <Head title = "Contact"/>
            <h1>Contact</h1>
            <p>Contact Ashong-Sam Kingsley Junior <a href="https://twitter.com/niiobliteye" target = "_blank">@niiobliteye</a> on Twitter!</p>
            <p><Img fluid = {data.file.childImageSharp.fluid} /></p>
        </Layout>
    ) 
}

export default ContactPage