'use client';
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faCartShopping,
  faStar,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../context/CartContext";
import styles from "../../styles/ProductCard.module.css";

export default function ProductCard(props: any) {
  const router = useRouter();
  const { product } = props;
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { addToCart } = useContext(CartContext);

  const selectProd = () => {
    console.log("Selecting prod", product);
    setSelectedProduct(product);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${product.id}`).then((response) =>
      response.json().then((data) => setSelectedProduct(data))
    );
  }, [product.id]);

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addToCart(product);
  };

  return (
    <div className="items1">
      <div className={styles.card} style={{ width: "18rem" }} key={product.id}>
        <div className="card-body">
          <Link
            href={`/products/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <div onClick={selectProd}>
              <img src={product.image} width={50} alt={product.title} />
              <h6>{product.title}</h6>
              <h6>+3 colors/patterns</h6>
              <h6>
                Sponsored <FontAwesomeIcon icon={faCircleInfo} />
              </h6>
              <h6>{product.category}</h6>
            </div>
          </Link>
          <FontAwesomeIcon icon={faStar} className={styles.star} />
          <FontAwesomeIcon icon={faStar} className={styles.star} />
          <FontAwesomeIcon icon={faStar} className={styles.star} />
          <FontAwesomeIcon icon={faStar} className={styles.star} />
          <FontAwesomeIcon icon={faStar} className={styles.star} />
          <h6>₹ {product.price}</h6>
          MRP. 999 Free Delivery for Prime Members
          <hr />
          <button
            onClick={() =>
              router.push(`/products/${product.id}`, { scroll: false })
            }
            className="btn btn-primary"
          >
            Details
          </button>
          <button className="btn btn-warning" onClick={handleAddToCart}>
            Add to cart <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() =>
              router.push(`/products?title=${product.title}`, { scroll: true })
            }
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      </div>
    </div>
  );
}
