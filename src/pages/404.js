import React from 'react'
import {Link} from 'gatsby'
import Head from '../components/head'


import Layout from '../components/layout'

const NotFound = () => {
    return(
        <Layout>
            <Head title = "404"/>
            <h1>Ooops! This page does not exist</h1>
            <p><Link to="/">Head Home</Link></p>
        </Layout>
    )
}

export default NotFound