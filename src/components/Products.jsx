import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productsSlice";
import { Pagination } from "@mui/material";


export default function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  const [pageNumber, setPageNumber] = useState(1);
  const recordsPerPage = 12;
  const lastIndex = pageNumber * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const numOfPages = Math.ceil(products.length / recordsPerPage);

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

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  const cards = products.slice(firstIndex, lastIndex).map((product, idx) => {
    return (
      <div key={idx} className="col-md-3 my-2">
        <Card style={{ width: "18rem"}} className="d-flex flex-column">
          <Card.Img className="card-img-top" variant="top" src={product.images[0]} />
          <Card.Body style={{height: "120px"}}>
            <Card.Title className="fs-6">{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <div className="row align-items-stretch">{cards}</div>
      {/* pageNumber: {pageNumber}
      <br />
      products : {products.length} */}
      <div className="d-flex justify-content-center">
        <Pagination
          className="center"
          color="primary"
          count={numOfPages}
          siblingCount={3}
          page={pageNumber}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
