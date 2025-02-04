import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { ProductsService } from "./services/products-service";

import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await ProductsService.getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const filteredArray_products = products.filter((f) => f.image);
  console.log(filteredArray_products);

  return (
    <>
      <div>
        {/* Bootstrap Carousel */}
        <div
          id="productCarousel"
          className={`carousel slide ${styles.productCarousel}`}
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {products.map((product: any, index: number) => (
              <div
                key={product.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={230}
                  className="d-block w-80"
                />
                </div>
              </div>
            ))}
          </div>
          <button
            className={`carousel-control-prev ${styles.carouselControlPrev}`}
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
            <span
              className={`carousel-control-prev-icon ${styles.carouselControlPrevIcon}`}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className={`carousel-control-next ${styles.carouselControlNext}`}
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
            <span
              className={`carousel-control-next-icon ${styles.carouselControlNextIcon}`}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className={styles.setalign}>
          <Link href="/products" className="nav-link">
            <h4 className={styles.shopNow}>Shop Now</h4>
          </Link>
        </div>
      </div>
    </>
  );
}
