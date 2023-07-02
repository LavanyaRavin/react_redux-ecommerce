import React from "react";
import { useState, useEffect } from "react";
import "./Products.css";
import Skeleton from "react-loading-skeleton";

import Nav from 'react-bootstrap/Nav';

import { LinkContainer } from 'react-router-bootstrap';

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    
    const updatedList = data.filter((x)=> x.category === cat);
    setFilter(updatedList)
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            onClick={() => setFilter(data)}
            className=" btn btn-outline-dark me-2"
          >
            All
          </button>
          <button
            onClick={() => filterProduct("jewelery")}
            className="btn btn-outline-dark me-2"
          >
            Jewelry
          </button>
          <button
            onClick={() => filterProduct("electronics")}
            className="btn btn-outline-dark me-2"
          >
            Electronics
          </button>
          <button
            onClick={() => filterProduct("women's clothing")}
            className="btn btn-outline-dark me-2"
          >
            Women's Clothing
          </button>
          <button
            onClick={() => filterProduct("men's clothing")}
            className="btn btn-outline-dark me-2"
          >
            Men's Clothing
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className=" allcard col-lg-3 col-md-4">
                <div class="card" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{product.title.substring(0, 12)}</h5>
                    <div class="addTo">
                      <p class="card-text">Rs.{product.price}</p>

                        <LinkContainer to={`/products/${product.id}`} style={{border:"1px solid black", backgroundColor:"rgb(212, 40, 69)", textShadow: "3px 3px 5px black",  fontSize:"15px", borderRadius:"5px",padding:"5px"}}>
                      <Nav.Link class="btn btn-primary" style={{border:"1px solid black"}}>
                        Add to cart
                      </Nav.Link>
                      </LinkContainer>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container-fluid my-5 py-5" style={{backgroundColor:"rgb(230, 227, 227)", boxShadow:"1px 1px 5px 0px black"}}>
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="text-center">Latest Products</h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
}

export default Products;
