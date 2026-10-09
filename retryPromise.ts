export function retryPromise<T>(
  fn: () => Promise<T>,
  attempts: number = 3,
  delay: number = 500
): Promise<T> {
  return fn().catch((error) => {
    if (attempts <= 1) {
      return Promise.reject(error);
    }

    console.log("Request failed. Retrying...");

    return new Promise<void>((resolve) => {
      setTimeout(resolve, delay);
    }).then(() => retryPromise(fn, attempts - 1, delay));
  });
}