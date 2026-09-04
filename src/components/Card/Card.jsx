import { Link } from "react-router-dom";
import { formatstar } from "../../lib/formatstar";

export default function Card({ product }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card-img px-4 text-center p-4 position-relative">
        <div className="card-img-top text-center p-2">
          <img
            className="img-fluid"
            style={{ height: "200px", objectFit: "contain" }}
            src={product?.image}
            alt={product?.title || "product"}
          />
        </div>
        <div className="card-body">
          <h2 className="fw-bold">
            {product?.title?.split(" ").slice(0, 4).join(" ")}......
          </h2>

          <span
            style={{ top: "20px", left: "10px" }}
            className="bg-primary badge position-absolute"
          >
            {product?.category}
          </span>

          <div className="d-flex align-items-center justify-content-between">
            <span className="text-primary fw-bold">
              ${product?.price}
            </span>
            <Link to={`/products/${product.id}`} className="btn btn-primary">View</Link>
          </div>

          <div className="d-flex align-items-center">
            <span>{formatstar(product?.rating?.rate)}</span>
            ( <span className="text-muted">{product?.rating?.count}</span> )
          </div>
        </div>
      </div>
    </div>
  );
}