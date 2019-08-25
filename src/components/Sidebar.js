import React from 'react'
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Form,
  FormGroup,
  Input,
} from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = ({ author, authorFluid }) => (
    <div>
       {author && (
      <Card>
        <Img className="card-image-top" fluid={authorFluid} />
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-3">
            {author.name}
          </CardTitle>
          <CardText>{author.bio}</CardText>
          <div className="author-social-links text-center">
            <ul>
              <li>
                <a
                  href={author.facebook}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="facebook"
                >
                  <i className="fab fa-facebook-f fa-lg" />
                </a>
              </li>
              <li>
                <a
                  href={author.twitter}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="twitter"
                >
                  <i className="fab fa-twitter fa-lg" />
                </a>
              </li>
              <li>
                <a
                  href={author.instagram}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
                  <i className="fab fa-instagram fa-lg" />
                </a>
              </li>
              <li>
                <a
                  href={author.google}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="google"
                >
                  <i className="fab fa-google fa-lg" />
                </a>
              </li>
              <li>
                <a
                  href={author.linkedin}
                  targe="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                >
                  <i className="fab fa-linkedin fa-lg" />
                </a>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
    )}
         <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your email address.."
            />
          </FormGroup>
          <button className="btn btn-outline-success text-uppercase">
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>

<Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Contact Form
        </CardTitle>
<form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
  <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <p>
    <label>Email: <input type="text" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
//         <form name="Contact" method= "POST" data-netlify="true">
//   <p>
//     <label>Your Name: <input type="text" name="name" placeholder="Your Name" /></label>   
//   </p>
//   <p>
//     <label>Your Email: <input type="email" name="email" placeholder="Your email address.." /></label>
//   </p>
  
//   <p>
//     <label>Message: <textarea name="message" placeholder="Enter Your Message"></textarea></label>
//   </p>
//   <p>
//     <button type="submit"  className="btn btn-outline-success text-uppercase">Send</button>
//   </p>
// </form>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="Advert"
          style={{ width: '100%' }}
        />
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Recent Posts
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          
        }
      }
    }
  }
`

export default Sidebar
