import React from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductSearch from "./components/ProductSearch";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestion des Produits</h1>

      <ProductForm />
      <hr />

      <ProductSearch />
      <hr />

      <ProductList />
    </div>
  );
}

export default App;
