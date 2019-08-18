 import React from 'react';
 import { Link } from 'gatsby'
 import Img from 'gatsby-image'
 import {slugify} from "../util/utilityFunctions"
 import {
    Badge,
    Card,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody,
  } from 'reactstrap'

 const Post =({ title, author, tags, path, date, body, fluid}) => {
     return(
         <Card>
             <Link to={Path2D}>
      <Img className="card-image-top" fluid={fluid} />
      </Link>

             <CardBody>
                 <CardTitle>
                     <Link to={Path2D}>{title}</Link>
                 </CardTitle>
                 <CardSubtitle>
                <span className="text-info">{date}</span> by{' '}
                <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <ul className="post-tags">
                {tags.map(tag => (
                <li key={tag}>
            <Link to={`/tag/${slugify(tag)}`}>
              <Badge color="primary" className="text-uppercase">
                {tag}
              </Badge>
            </Link>
          </li>
        ))}
      </ul>

                <Link
        to={Path2D}
        className="btn btn-outline-primary float-right text-uppercase"
      >
          Read More
      </Link>
             </CardBody>
         
         </Card>
     )
 }

 export default Post