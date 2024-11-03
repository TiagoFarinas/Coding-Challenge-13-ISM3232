// Task 2: Fetch Products from the API Using Fetch and Promises
const productsContainer = document.getElementById('products-container');
const apiEndpoint = 'https://www.course-api.com/javascript-store-products';
fetch(apiEndpoint)
  .then(function(response) {
    // Check the response, otherwise throw error
    if (!response.ok) {
      throw new Error("Network response was not ok")};
    // Parse JSON response and return for next .then()
    return response.json()})
  .then(function(products) {
    // Task 3 will handle displaying the products
  })
  .catch(function(error) {
    // Task 4 will handle error display
    console.error("Fetch error:", error); // Log error to console
  });