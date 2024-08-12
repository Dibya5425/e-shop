# E-shop

E-shop is a simple and responsive e-commerce website built using React.js. It features a product listing page, individual product pages, a shopping cart, and an inventory management system.

## Features

- **Responsive Design**: The website is fully responsive and mobile-friendly.
- **Product Listing**: Displays a list of products with images, descriptions, and prices.
- **Individual Product Page**: Detailed view of each product with an option to add it to the cart.
- **Shopping Cart**: Allows users to add products to the cart and view them before proceeding to checkout.
- **Cart Icon with Count**: The cart icon in the navigation bar shows the number of items added to the cart.
- **Footer**: A footer is included at the bottom of every page with company information.

## Technologies Used

- **React.js**: Frontend library used to build the user interface.
- **React Router**: For handling routing between pages.
- **FontAwesome**: For icons used in the navbar and other UI elements.
- **CSS Flexbox**: For layout management to ensure responsiveness and alignment.

## Getting Started

### Prerequisites

- **Node.js**: Ensure that Node.js is installed on your system.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Dibya5425/e-shop.git
    ```
   
2. Navigate to the project directory:
    ```bash
    cd e-shop
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## File Structure

```plaintext
├── public
│   └── index.html
├── src
│   ├── assets
│   │   ├── S23 FE.webp
│   │   ├── IPHONE 15.webp
│   │   └── PIXEL 7A.webp
│   ├── components
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── ProductCard.js
│   │   └── ProductCard.css
│   ├── contexts
│   │   └── CartContext.js
│   ├── data
│   │   └── products.js
│   ├── pages
│   │   ├── HomePage.js
│   │   ├── HomePage.css
│   │   ├── ProductPage.js
│   │   ├── ProductPage.css
│   │   └── CartPage.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
