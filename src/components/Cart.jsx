/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

export default function Cart() {
  const products = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const removeToCart = (id) => {
    dispatch(remove(id))
  }

  const cards = products.map((product, idx) => (
    <div key={idx} className="col-md-3 my-2 d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body style={{height: "120px"}}>
          <Card.Title className="fs-5" >{product.title}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={()=> removeToCart(product.id)}>Remove</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <div className="row">
        {cards.length ? cards : <div style={{height:"500px"}} className='d-flex flex-column justify-content-center'><h1>Cart is empty</h1></div>}
      </div>
    </div>
  )
}