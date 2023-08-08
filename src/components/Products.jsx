import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import axios from "axios";

export default function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((res) => {
      setProduct(res.data);
    });
  }, []);

  const cards = product.map((product, idx) => (
    <div key={idx} className="col-md-3 my-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body>
          <Card.Title className="fs-5" >{product.title}</Card.Title>
          <Card.Text>
            ${product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Add to cart</Button>
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
