import dynamic from "next/dynamic";
import Link from "next/link";

const ProductList = dynamic(() => import("@/components/product-list/ProductList"), {
  ssr: false, 
  loading: () => <span style={{ color: "red" }}>Loading.....</span>, // Fallback UI
});

export default function Products() {
  return (
    <div>
      <Link
        href="#recommended"
        style={{
          textDecoration: "none",
          color: "red",
          fontSize: "15px",
          fontStyle: "italic",
        }}
      >
        Go to end of the page 👇
      </Link>
      <div>
        <ProductList />
      </div>
      <h3
        id="recommended"
        style={{ color: "red", fontSize: "15px", fontStyle: "italic" }}
      >
        End of the Page
      </h3>
    </div>
  );
}
