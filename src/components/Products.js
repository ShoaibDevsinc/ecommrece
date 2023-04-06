import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { global_context } from "./create_context";
import "../App.css";
import { Link } from "react-router-dom";

export default function Products() {
  const { products } = useContext(global_context);

  return (
    <div className="m-2">
      <div className="row w-100">
        {products.map((product) => (
          <div
            key={product.id}
            className="card main-card p-2 col-md-3 col-sm-2"
          >
              <img
                style={{ width: "40%", height: "40%" }}
                className="container"
                src={product.image}
                alt="BigCo Inc. logo"
              />
              <div className="card-body">
                <h5 className="card-title  font-size-1rem">
                <Link
                    to={`/show/${product.id}`}
                    className="text-decoration-none text-dark font-weight-bold"
                  >
                    {product.title.substring(0, 30)}....
                  </Link>
                  
                </h5>
                <p className="card-text text-lowercase">
                  {product.description.substring(0, 30)}.....{" "}
                  <Link
                    to={`/show/${product.id}`}
                    className="text-decoration-none text-primary font-weight-bold"
                  >
                    Read More
                  </Link>
                </p>
                <div className="d-flex justify-content-around">
                  <Link to={`/show/${product.id}`} className="btn btn-dark">
                    Add to cart
                  </Link>
                  <p>{product.price}$</p>
                  <ReactStars
                    classNames="container"
                    value={product.rating.rate}
                    count={5}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
