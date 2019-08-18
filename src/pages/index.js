import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby";
import Post from "../components/Post"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home page</h1>
    <StaticQuery query={indexQuery} render={data => {
          return(
            <div>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <Post
              // key={node.id}
              title={node.frontmatter.title}
              // slug={node.fields.slug}
              author={node.frontmatter.author}
              body={node.excerpt}
              date={node.frontmatter.date}
              // fluid={node.frontmatter.image.childImageSharp.fluid}
              // tags={node.frontmatter.tags}
            />

          ))}
            </div>

          )
        }}/>
  </Layout>
)

const indexQuery = graphql`
query{
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 2
  )
  {
    edges{
      node{
        id
        frontmatter{
          title
          date(formatString: "MMM Do YYYY")
          author
          path
        }
        excerpt
      }
    }
  }
}
`

export default IndexPage
