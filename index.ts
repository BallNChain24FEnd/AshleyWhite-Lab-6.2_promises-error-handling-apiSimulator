import {
    fetchProductCatalog,
    fetchProductReviews,
    fetchSalesReport,
} from "./apiSimulator";

console.log("Loading e-commerce dashboard...");

fetchProductCatalog()
    .then((products) => {
        console.log("Product Catalog:", products);

        return Promise.all(
            products.map((product) => {
                return fetchProductReviews(product.id).then((reviews) => {
                    console.log(`Reviews for ${product.name}:`, reviews);
                });
            })
        );
    })
    .then(() => {
        return fetchSalesReport();
    })
    .then((report) => {
        console.log("Sales Report:", report);
    });