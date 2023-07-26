import { getShoppingCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  // get products
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  //get cart
  const savedCart = getShoppingCart();
  //   console.log("Saved Cart:", savedCart);
  for (const id in savedCart) {
    console.log("id::", id);
  }
  return products;
};
