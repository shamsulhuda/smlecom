import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Orders() {
  const products = useLoaderData();
  return (
    <div>
      <h2>Orders ({products.products.length})</h2>
    </div>
  );
}
