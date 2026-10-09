# Lab 6.2 — Promises and Error Handling Challenge

## Overview
This TypeScript application simulates an e-commerce dashboard that fetches products, reviews, and sales reports using Promises. It demonstrates asynchronous programming and error handling.

## Features
- Fetches products, reviews, and sales data.
- Uses Promises to handle API requests.
- Handles errors and retries failed requests.

## How to Run
1. Run `npm install`.
2. Run `npx tsx index.ts`.
3. View the results in the terminal.

## Critical Thinking Questions

**1. Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?**

Handling errors individually helps identify which request failed. It also allows other requests to continue instead of stopping the entire application.

**2. How does using custom error classes improve debugging and error identification?**

Custom error classes make it easier to identify specific problems, such as network failures or invalid data, instead of receiving generic error messages.

**3. When might a retry mechanism be more effective than an immediate failure response?**

Retrying is helpful when a request fails because of a temporary network issue. It gives the request another chance to succeed without immediately stopping the application.