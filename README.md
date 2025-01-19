
# mysecretdrawer-headerless

This project integrates WordPress API with CoCart using Nuxt.js and Vue.js.

## Overview

The **mysecretdrawer-headerless** project aims to enhance WordPress functionality by integrating the CoCart API with a frontend built on Nuxt.js and Vue.js.

## Features

- **WordPress Integration**: Utilizes WordPress API to fetch and manage data.
- **CoCart Integration**: Integrates CoCart for efficient shopping cart functionality.
- **Nuxt.js Framework**: Utilizes Nuxt.js for server-side rendering and SEO benefits.
- **Vue.js Components**: Implements Vue.js for dynamic frontend interactions and a smooth user experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js installed**
- **NPM (Node Package Manager) installed**
- **Access to a WordPress site with the CoCart plugin installed and configured**

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mysecretdrawer-headerless
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Define environment variables for WordPress API and CoCart credentials:
     ```dotenv
     WORDPRESS_API_URL=<your-wordpress-api-url>
     WORDPRESS_API_KEY=<your-wordpress-api-key>
     CART_API_URL=<your-cocart-api-url>
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application running.

## Usage

### Example API Calls

- **Fetch WordPress Posts**:
   ```javascript
   async function getPosts() {
       const response = await fetch(`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts`);
       const data = await response.json();
       console.log(data);
   }
   ```

- **Add Item to Cart**:
   ```javascript
   async function addToCart(productId, quantity) {
       const response = await fetch(`${process.env.CART_API_URL}/cart/add-item`, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${process.env.WORDPRESS_API_KEY}`
           },
           body: JSON.stringify({ id: productId, quantity })
       });
       const data = await response.json();
       console.log(data);
   }
   ```

### Frontend Components

- **Product List**:
   A Vue.js component to display products dynamically fetched from WordPress API.
   ```vue
   <template>
       <div>
           <h1>Products</h1>
           <div v-for="product in products" :key="product.id">
               <h2>{{ product.title }}</h2>
               <button @click="addToCart(product.id)">Add to Cart</button>
           </div>
       </div>
   </template>

   <script>
   export default {
       data() {
           return {
               products: []
           };
       },
       async mounted() {
           const response = await fetch(`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/products`);
           this.products = await response.json();
       },
       methods: {
           async addToCart(productId) {
               // Call the addToCart API
           }
       }
   };
   </script>
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -am 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
