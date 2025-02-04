import { GetServerSideProps } from "next";
import { ProductsService } from "../../../services/products-service";

export default function ProductDetail({ product }: { product: any }) {
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h6 style={{ padding: "10px" }}>{product.title}</h6>
      <hr />
      {product.image && <img src={product.image} height={50} width={50} />}
      ₹ {product.price}
      <h6>{product.description}</h6>
    </div>
  );
}

// Server-side fetching using getServerSideProps
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.params as { productId: string };

  // Convert productId to a number
  const numericProductId = Number(productId);

  // If conversion fails, return 404
  if (isNaN(numericProductId)) {
    return {
      notFound: true, 
    };
  }

  try {
    const product = await ProductsService.getProductsById(numericProductId);
    return {
      props: { product },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: { product: null },
    };
  }
};

