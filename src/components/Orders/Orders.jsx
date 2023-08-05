import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Orders() {
  const { products, initialCart } = useLoaderData();
  return (
    <div>
      <h2>Orders ({products.length})</h2>
      <h2>initialCart ({initialCart.length})</h2>
    </div>
  );
}
