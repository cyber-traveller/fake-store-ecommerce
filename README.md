# Fake Store Cart App

A simple React-based e-commerce application that fetches products from the Fake Store API. Users can browse products, add items to their cart, view cart items in a modal, and remove items from the cart. The application is styled with Tailwind CSS and is deployed on Netlify.

## Features

- Fetches product data from the Fake Store API.
- Displays product images, titles, and prices.
- Adds items to the cart and prevents duplicate additions.
- Shows the current cart item count in the Navbar.
- Displays a modal with all cart items when the cart button is clicked.
- Allows users to remove items from the cart.
- Responsive layout suitable for desktop and mobile.

## Tech Stack

- **ReactJS**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for responsive styling.
- **Axios**: Promise-based HTTP client for fetching data from APIs.
- **Netlify**: Hosting platform for fast, reliable deployment.

## Setup

To get started locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/cyber-traveller/fake-store-ecommerce.git
Navigate to the project directory:

  ```bash
cd fake-store-ecommerce
Install dependencies:

  ```bash

npm install
Start the development server:

 ```bash
 npm run dev

The application will run on http://localhost:5173.

To create a production build:


 ```bash
npm run build
Deployment
This project is deployed on Netlify. For deploying your own version, follow these steps:

Create a production build:


npm run build

Push the project to a GitHub repository.

Go to Netlify and create a new site by importing the repository.

Configure the build settings:
Build Command: npm run build
Publish Directory: build

Deploy the site and get your live URL.

https://fake-storeecommerce.netlify.app/


Example API URL

https://fakestoreapi.com/products
License

This project is open-source and available under the MIT License.

Acknowledgements

Fake Store API for providing the product data.
Netlify for deployment hosting.
Thank you for checking out this project! Feel free to contribute, report issues, or suggest new features.
