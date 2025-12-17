import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/productService";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erreur :", error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des produits</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
