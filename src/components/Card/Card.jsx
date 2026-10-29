import { Link } from "react-router-dom";

export default function Card({ product }) {
  const image = product?.images?.[0] || product?.image;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div 
        className="card h-100 border-0 shadow-sm overflow-hidden"
        style={{
          borderRadius: "16px",
          transition: "all 0.3s ease-in-out",
          backgroundColor: "#fff"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 1rem 3rem rgba(0,0,0,.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
        }}
      >
        {/* حاوية الصورة عشان تعمل Zoom خفيف وقت الـ Hover */}
        <div style={{ overflow: "hidden", position: "relative" }}>
          <img
            src={image}
            alt={product?.title || "Product"}
            className="card-img-top"
            style={{
              height: "260px",
              objectFit: "cover",
              transition: "transform 0.4s ease"
            }}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          />
        </div>

        <div className="card-body d-flex flex-column p-4">
          <h5 
            className="card-title fw-bold text-dark text-truncate mb-2" 
            style={{ fontSize: "1.1rem" }}
          >
            {product?.title}
          </h5>

          <p className="card-text text-muted small text-truncate mb-3">
            {product?.description}
          </p>

          <div className="d-flex align-items-center justify-content-between mt-auto pt-2">
            <span className="fw-bold text-primary fs-5">
              ${product?.price}
            </span>

            <Link
              to={`/products/${product?.id}`}
              className="btn btn-primary btn-sm px-4 py-2"
              style={{
                borderRadius: "8px",
                fontWeight: "500",
                transition: "background-color 0.2s"
              }}
            >
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}