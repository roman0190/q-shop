# QShop - Mini E-commerce SPA

## Overview

QShop is a modern, responsive e-commerce Single Page Application built with Next.js 15 and TypeScript. The application features a clean design with full cart functionality, product listings, detailed product pages, and a complete checkout flow.

## 🌟 Features

- **Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- **Product Catalog** - Browse clothing items with filtering for men's and women's categories
- **Product Details** - Comprehensive product information with ratings and reviews
- **Cart Sidebar** - Sliding cart interface with Add/remove items, adjust quantities, view totals
- **Checkout Process** - Complete order form with validation
- **State Management** - React Context API for global cart state
- **Loading States** - Smooth loading indicators throughout the app
- **Error Handling** - Graceful error handling and user feedback

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: React Context API
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Ratings**: [React Stars](https://github.com/ekeric13/react-stars)
- **Image Optimization**: Next.js Image component

## 🎨 Design Inspiration

This project is inspired by the [Simple Fashion E-Commerce Figma Design](https://www.figma.com/design/lOFuK94wVdgCY0QVOXpX3a/Simple-Fashion-E-Commerce--Elmore---Community-?node-id=2-2&t=QhJZ4Oc6Ke53CZ4H-0) from the Figma Community. The design has been adapted and implemented using modern web technologies while maintaining the clean, minimalist aesthetic of the original concept.


## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd qshop
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading component
│   ├── not-found.tsx      # 404 page
│   ├── page.tsx           # Home page
│   └── product/[id]/      # Dynamic product pages
├── components/            # Reusable UI components
│   ├── CartProduct.tsx    # Individual cart item
│   ├── CartSidebar.tsx    # Sliding cart interface
│   ├── CheckoutModal.tsx  # Checkout form modal
│   ├── FeatureSection.tsx # Featured collections
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Landing hero section
│   ├── Navbar.tsx         # Navigation bar
│   ├── ProductCard.tsx    # Product grid item
│   └── ProductsSection.tsx # Product listing section
├── context/               # React Context providers
│   └── CartContext.tsx    # Cart state management
└── types/                 # TypeScript type definitions
    ├── CartContextType.ts # Cart context interface
    ├── CheckoutFormData.ts # Checkout form interface
    └── Product.ts         # Product data interface
```

## 🎯 Key Features Details

### Cart Management
- **Add to Cart**: Products can be added with a single click
- **Quantity Control**: Increase/decrease item quantities
- **Remove Items**: Delete items from cart
- **Persistent State**: Cart state maintained across navigation
- **Real-time Updates**: Live cart count and total calculation

### Product Catalog
- **API Integration**: Fetches products from [Fake Store API](https://fakestoreapi.com/)
- **Category Filtering**: Shows only men's and women's clothing
- **Rating Display**: Star ratings with review counts
- **Best Seller Tags**: Dynamic badges based on rating count

### Checkout Process
- **Form Validation**: Complete checkout form with field validation
- **User Information**: Name, email, address, phone collection
- **Order Summary**: Total calculation with item breakdown
- **Success Feedback**: Order confirmation with cart clearing

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎨 Design System

- **Primary Color**: Blue (#2890f1)
- **Background**: Light gray (#f5f5f5)
- **Text**: Dark gray (#1f1f1f)
- **Cards**: White with subtle shadows
- **Borders**: Light gray with rounded corners

## 🔄 State Management

Uses React Context API with the following providers:
- **CartContext**: Manages cart items, quantities, and total calculations

## 📋 Type Safety

Full TypeScript implementation with interfaces for:
- [`Product`](src/types/Product.ts) - Product data structure
- [`CartContextType`](src/types/CartContextType.ts) - Cart context interface  
- [`CheckoutFormData`](src/types/CheckoutFormData.ts) - Checkout form structure

## 🐛 Error Handling

- **API Errors**: Graceful handling of network failures
- **404 Pages**: Custom not-found page
- **Form Validation**: Real-time validation with user feedback
- **Loading States**: Skeleton loading for better UX

## 📄 License

This project was created for demonstration purposes only.

## 🤝 Contributing

This is a demonstration project. Feel free to fork and modify for your own use.

---

**Live Demo**: [https://q-shop-nine.vercel.app/]  
**Author**: [Roman Howladar]  
**Created**: 2025
