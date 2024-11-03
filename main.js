// Task 2: Fetch Products from the API Using Fetch and Promises
const productsContainer = document.getElementById('products-container');
const apiEndpoint = 'https://www.course-api.com/javascript-store-products';

// Fetch products from the API
fetch(apiEndpoint)
  .then(function(response) {
    // Check the response; otherwise, throw an error
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse JSON response and return for the next .then()
    return response.json();
  })
  .then(function(products) {
    // Task 3: Display Product Details Dynamically
    displayProducts(products);
  })
  .catch(function(error) {
    // Task 4: Handle Errors Gracefully
    console.error("Fetch error:", error); // Log error to console
    displayErrorMessage("Failed to load products. Please try again later.");
  });
// Task 3 - Display Product Details Dynamically
function displayProducts(products) {
  productsContainer.innerHTML = ''; // Clear container
  // Loop through products and add them to the page
  products.forEach(function(product) {
    const productFields = product.fields; // Access product fields
    const imgUrl = productFields.image[0].url;
    // Create div for each product
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    // Create and set image element
    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = productFields.name;
    // Create and set product name element
    const nameElement = document.createElement('h2');
    nameElement.textContent = productFields.name;
    // Create and set company element
    const companyElement = document.createElement('p');
    companyElement.textContent = 'Company: ' + productFields.company;   
    // Create and set price element
    const priceElement = document.createElement('p');
    priceElement.textContent = 'Price: $' + (productFields.price / 100).toFixed(2);
    // Append elements to product div
    productDiv.appendChild(img);
    productDiv.appendChild(nameElement);
    productDiv.appendChild(companyElement);
    productDiv.appendChild(priceElement);
    // Append product div to container
    productsContainer.appendChild(productDiv);
  })};
// Task 4 - Handle Errors Gracefully 
function displayErrorMessage(message) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.style.color = 'red';
  errorMessage.style.textAlign = 'center';
  productsContainer.innerHTML = ''; // Clear previous content
  productsContainer.appendChild(errorMessage); // Display error message
}
