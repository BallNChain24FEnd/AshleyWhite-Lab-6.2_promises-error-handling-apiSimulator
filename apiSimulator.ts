export const fetchProductCatalog = (): Promise<
    { id: number; name: string; price: number }[]
> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            } else {
                reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};
export const fetchProductReviews = (
    productId: number
): Promise<{ productId: number; rating: number; comment: string }[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { productId, rating: 5, comment: "Excellent product!" },
                    { productId, rating: 4, comment: "Good quality!" },
                ]);
            } else {
                reject(`Failed to fetch reviews for product ID ${productId}`);
            }
        }, 1500);
    });
};
export const fetchSalesReport = (): Promise<{
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({
                    totalSales: 14000,
                    unitsSold: 20,
                    averagePrice: 700,
                });
            } else {
                reject("Failed to fetch sales report");
            }
        }, 1000);
    });
};