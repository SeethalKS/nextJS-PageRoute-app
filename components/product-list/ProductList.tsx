
'use client';
import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../product-card/ProductCard";
import { ProductsService } from "../../pages/services/products-service";
import CartContext from "../../context/CartContext";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await ProductsService.getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);
  /********************************************************** */
  // Filter products based on search text
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>(products);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    const filtered = products.filter((prod) =>
      prod.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText, products]);

  /********************************************************** */
  return (
    <>
      <form
        className="d-flex mb-4 p-2"
        onSubmit={handleSearchSubmit}
        role="search"
      >
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="d-flex flex-row flex-wrap gap-2">
        {filteredProducts.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}
