import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Button, ListGroup, Card } from 'react-bootstrap'
import Rating from '../Components/Rating'
import products from '../products'
const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Items>
              <h3>{product.name}</h3>
            </ListGroup.Items>
            <ListGroup.Items>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroup.Items>
            <ListGroup.Items>price: {product.price}</ListGroup.Items>
            <ListGroup.Items>
              description: {product.description}
            </ListGroup.Items>
          </ListGroup>
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  )
}

export default ProductScreen
