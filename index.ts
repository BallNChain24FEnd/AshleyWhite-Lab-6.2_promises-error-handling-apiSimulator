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
                return fetchProductReviews(product.id)
                    .then((reviews) => {
                        console.log(`Reviews for ${product.name}:`, reviews);
                    })
                    .catch((error) => {
                        console.error(`Review Error for ${product.name}:`, error);
                    });
            })
        );
    })
    .then(() => {
        return fetchSalesReport()
            .then((report) => {
                console.log("Sales Report:", report);
            })
            .catch((error) => {
                console.error("Sales Report Error:", error);
            });
    })
    .catch((error) => {
        console.error("Product Catalog Error:", error);
    })
    .finally(() => {
        console.log("All API calls have been attempted.");
    });