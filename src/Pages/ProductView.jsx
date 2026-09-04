import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";

export default function ProductView() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function getProductView() {
    try {
      setIsLoading(true);
      setError("");

      const { data } = await axios.get(
        "https://fakestoreapi.com/products/" + id
      );

      setProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProductView();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          {error}
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <section className="py-5">
      <div className="container">

        <Link
          to="/products"
          className="btn btn-outline-secondary mb-4"
        >
          ← Back to Products
        </Link>

        <div className="card border-0 shadow rounded-4 overflow-hidden">
          <div className="row g-0">

            {/* Image */}
            <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-5">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
                style={{
                  height: "400px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Product Details */}
            <div className="col-md-7">
              <div className="card-body p-4 p-lg-5">

                {/* Category */}
                <span className="badge bg-primary mb-3">
                  {product.category}
                </span>

                {/* Title */}
                <h1 className="fw-bold mb-3">
                  {product.title}
                </h1>

                {/* Rating */}
                <div className="d-flex align-items-center gap-2 mb-3">

                  <span className="text-warning fs-5">
                    ★★★★★
                  </span>

                  <span className="text-muted">
                    {product.rating.rate}
                  </span>

                  <span className="text-muted">
                    ({product.rating.count} reviews)
                  </span>

                </div>

                <hr />

                {/* Price */}
                <h2 className="text-primary fw-bold mb-4">
                  ${product.price}
                </h2>

                {/* Description */}
                <h5 className="fw-bold mb-3">
                  Description
                </h5>

                <p className="text-secondary lh-lg">
                  {product.description}
                </p>

                {/* Buttons */}
                <div className="d-flex gap-3 mt-4">

                  <button className="btn btn-primary btn-lg px-4">
                    Add To Cart
                  </button>

                  <button className="btn btn-outline-danger btn-lg">
                    ♡
                  </button>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}