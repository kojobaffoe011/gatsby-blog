module.exports = {
    siteMetadata:{
        title: `AskJnr's Blog`,
        author: `Kojo Baffoe`
  },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: qnyln6und03k,
                accessToken: v7AS_feQ2e1bFTPE2rX8sN6zZ3NLTeyLn2lgiNYkLdw
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                    
                ]
            }
        }

    ]
}