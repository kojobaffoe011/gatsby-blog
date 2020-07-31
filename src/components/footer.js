import React from 'react'
import { Link,graphql,useStaticQuery } from "gatsby"
import footerStyles from './footer.module.scss'
import {FontAwesome, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    
    `)
    return (
        <footer className={footerStyles.footer}>
            
            <div>
            <p>Created by {data.site.siteMetadata.author}, © 2020
                <a className={footerStyles.socialLink} href="https://twitter.com/kojobaffoe100" target = "_blank"><FaTwitter></FaTwitter></a>
                <a className={footerStyles.socialLink} href="https://instagram.com/k.baffs" target = "_blank"><FaInstagram></FaInstagram></a>   
                </p> 
            </div>
        </footer>
    )
}

export default Footer 