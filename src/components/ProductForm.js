import React, { useState } from "react";
import { createProduct } from "../api/productService";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name: name,
      price: price,
    };

    createProduct(product)
      .then(() => {
        alert("Produit ajouté avec succès");
        setName("");
        setPrice("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <input
          type="number"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <br />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default ProductForm;
