# Testimonials Slider

A responsive testimonials slider built with React, TypeScript, SCSS (BEM), and Swiper.

## Demo
You can view the live demo of the project here: [DEMO LINK](https://testimonials-app-beta.vercel.app/)

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **SCSS** (BEM methodology)
- **Vite**
- **Swiper**

## 📁 Project Structure
```
src/
├── api/
├── assets/
├── components/
│ ├── TestimonialCard/ # Single testimonial card component
│ └── Testimonials/ # Swiper container for testimonial cards
├── styles/
│ ├── blocks/ # SCSS files for individual BEM blocks
│ └── utils/ # Global variables, mixins, etc.
├── types/
├── App.tsx
├── main.tsx
```
## 💡 Features

- Responsive Swiper slider with breakpoints
- Looping autoplay, navigation arrows, and pagination
- BEM-based SCSS structure
- Centralized SCSS variables and mixins

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview