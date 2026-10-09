import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator";

fetchProductCatalog()
  .then((products) => console.log("Products:", products))
  .catch((error) => console.error("Product Error:", error));

fetchProductReviews(1)
  .then((reviews) => console.log("Reviews:", reviews))
  .catch((error) => console.error("Review Error:", error));

fetchSalesReport()
  .then((report) => console.log("Sales Report:", report))
  .catch((error) => console.error("Sales Error:", error));