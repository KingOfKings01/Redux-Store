import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productsSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status == "loading") {
    return <h1>Loading...</h1>;
  }

  if (status == "error") {
    return (
      <div className="text-danger">
        <h1>Sorry for inconvenience</h1>
        <h2>We are currently fixing this issue</h2>
        <h2>Please try after some time</h2>
      </div>
    );
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product, idx) => (
    <div key={idx} className="col-md-3 my-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body>
          <Card.Title className="fs-5">{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
}
