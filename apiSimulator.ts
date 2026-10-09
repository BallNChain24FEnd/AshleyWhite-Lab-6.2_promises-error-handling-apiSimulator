import { NetworkError, DataError } from "./errors";
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
                reject(new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};
export const fetchProductReviews = (
    productId: number
): Promise<{ productId: number; rating: number; comment: string }[]> => {
    if (!Number.isInteger(productId) || productId <= 0) {
        return Promise.reject(new DataError("Invalid product ID"));
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { productId, rating: 5, comment: "Excellent product!" },
                    { productId, rating: 4, comment: "Good quality!" },
                ]);
            } else {
                reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
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
                reject(new NetworkError("Failed to fetch sales report"));
            }
        }, 1000);
    });
};