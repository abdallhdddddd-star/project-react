import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProduct() {
      setProduct(null);
      setIsLoading(true);
      setError("");

      try {
        const { data } = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`,
          { signal: controller.signal }
        );
        setProduct(data);
      } catch (requestError) {
        if (!controller.signal.aborted) {
          setError(requestError.message || "Unable to load this product.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchProduct();

    return () => controller.abort();
  }, [id]);

  if (isLoading) {
    return (
      <div className="container py-5" role="status">
        Loading product...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
        <Link to="/products" className="btn btn-outline-secondary">
          Back to Products
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning" role="alert">
          Product not found.
        </div>
        <Link to="/products" className="btn btn-outline-secondary">
          Back to Products
        </Link>
      </div>
    );
  }

  const image = product.images?.[0] || product.image;
  const category =
    typeof product.category === "string"
      ? product.category
      : product.category?.name;

  return (
    <section className="py-5">
      <div className="container">
        <Link to="/products" className="btn btn-outline-secondary mb-4">
          Back to Products
        </Link>

        <div className="card border-0 shadow rounded-4 overflow-hidden">
          <div className="row g-0">
            <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-5">
              {image && (
                <img
                  src={image}
                  alt={product.title || "Product"}
                  className="img-fluid"
                  style={{ height: "400px", objectFit: "contain" }}
                />
              )}
            </div>

            <div className="col-md-7">
              <div className="card-body p-4 p-lg-5">
                {category && (
                  <span className="badge bg-primary mb-3">{category}</span>
                )}
                <h1 className="fw-bold mb-3">{product.title}</h1>
                <hr />
                <h2 className="text-primary fw-bold mb-4">
                  ${product.price}
                </h2>
                <h5 className="fw-bold mb-3">Description</h5>
                <p className="text-secondary lh-lg">{product.description}</p>

                <button type="button" className="btn btn-primary btn-lg px-4">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
