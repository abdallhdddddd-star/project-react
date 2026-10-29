import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

const ITEMS_PER_PAGE = 10;

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    async function fetchProducts() {
      try {
        const { data } = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        if (isActive) {
          setProducts(data);
          setError("");
        }
      } catch (requestError) {
        if (isActive) {
          setError(requestError.message || "Unable to load products.");
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    fetchProducts();

    return () => {
      isActive = false;
    };
  }, []);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section>
      <div className="container py-4">
        <header className="text-center mb-4">
          <h2 className="fw-bold">Our Featured Products</h2>
          <p className="text-muted small mb-0">
            Discover our handpicked selection of products.
          </p>
        </header>

        {isLoading && <p className="text-center">Loading products...</p>}
        {error && <div className="alert alert-danger">{error}</div>}
        {!isLoading && !error && products.length === 0 && (
          <p className="text-center">No products found.</p>
        )}

        {!isLoading && !error && products.length > 0 && (
          <>
            <div className="row g-3">
              {currentProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>

            <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm px-3"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => page - 1)}
              >
                Prev
              </button>
              <span className="small text-muted fw-semibold">
                {currentPage} / {totalPages}
              </span>
              <button
                type="button"
                className="btn btn-primary btn-sm px-3"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((page) => page + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
