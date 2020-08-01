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
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/posts/post1/images`
            }
        },
        'gatsby-transformer-sharp',
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