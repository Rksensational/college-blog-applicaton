/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const authors = require('./src/util/authors')
const { slugify } = require('./src/util/utilityFunctions')
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
      const slugFromTitle = slugify(node.frontmatter.title)
      createNodeField({
        node,
        name: 'slug',
        value: slugFromTitle,
      })
    }
  }

  exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
  
    // Page templates
    const singlePostTemplates = path.resolve('src/templates/single-post.js')
    return graphql(`
    
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
          
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then  (res =>{
    if (res.errors) return Promise.reject(res.errors)

    // Extracting all posts from res
  const posts = res.data.allMarkdownRemark.edges

  // Create single post pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: singlePostTemplates,
      context: {
        // Passing slug for template to use to fetch the post
        slug: node.fields.slug,
        // Find author imageUrl from author array and pass it to template
        imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl
      },
    })
  })

  })
  }