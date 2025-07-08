# QShop - Mini E-commerce SPA

A small e-commerce Single Page Application (SPA) built with Next.js and TypeScript. This project was created as an assessment task for Qtec Solution Limited.

## Features

- Responsive design that works on all devices
- Product listing with images, titles, and prices
- Product detail pages with comprehensive information
- Cart functionality with add/remove/update quantity
- Cart sidebar that slides in/out
- Checkout modal with form submission

## Pages

1. **Home Page**
   - List of products (minimum 6)
   - Each product shows image, title, price, and "Add to Cart" button
   - Click on a product to view details

2. **Product Detail Page**
   - Full product information
   - Product image, title, description, price, and category
   - "Add to Cart" button

3. **Cart Sidebar**
   - Slides in/out from the side
   - Shows all added products
   - Allows increasing/decreasing quantities
   - Displays total amount
   - "Checkout" button

4. **Checkout Modal**
   - Appears after clicking "Checkout" button
   - Form with name, email, and address fields
   - Submit button to simulate order placement

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- React Context API for state management

## Getting Started

First, clone the repository:

```bash
git clone [repository-url]
cd qshop-frontend
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Build for Production

```bash
npm run build
# or
yarn build
```

## Deployment

This project can be easily deployed on Vercel or Netlify.

## License

This project is created for assessment purposes only.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
