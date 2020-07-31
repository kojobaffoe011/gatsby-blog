import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'



const AboutPage = () => {
    return (
        <Layout>
            <Head title = "About"/>
            <h1>About</h1>
            <p1>About Ashong-Sam Kingsley Junior</p1>
            <p>Wanna talk? <Link to="/contact">Reach me </Link></p>
        </Layout>
    )
}

export default AboutPage