 import React from 'react';
 import { Link } from 'gatsby'
 import {
    Badge,
    Card,
    CardTitle,
    CardText,
    CardSubtitle,
    CardBody,
  } from 'reactstrap'

 const Post =({ title, author, path, date, body}) => {
     return(
         <Card>
             <CardBody>
                 <CardTitle>
                     <Link to={Path2D}>{title}</Link>
                 </CardTitle>
                 <CardSubtitle>
                <span className="text-info">{date}</span> by{' '}
                <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
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