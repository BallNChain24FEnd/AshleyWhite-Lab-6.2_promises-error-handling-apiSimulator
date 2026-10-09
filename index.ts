import { fetchProductCatalog } from "./apiSimulator";

fetchProductCatalog()
  .then((products) => {
    console.log("Product Catalog:", products);
  })
  .catch((error) => {
    console.error("Error:", error);
  });