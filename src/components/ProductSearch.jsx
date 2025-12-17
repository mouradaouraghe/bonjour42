import React, { useState } from "react";
import { getProductByName } from "../api/productService";

function ProductSearch() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState(null);

  const searchProduct = () => {
    getProductByName(name)
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        alert("Produit non trouvé");
        setProduct(null);
      });
  };

  return (
    <div>
      <h2>Rechercher un produit</h2>

      <input
        type="text"
        placeholder="Nom du produit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={searchProduct}>Rechercher</button>

      {product && (
        <div>
          <p>Nom : {product.name}</p>
          <p>Prix : {product.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductSearch;
