# Deployment Guide

Deploying this modern React application is very straightforward, as it compiles to purely static assets. There is no need for any backend storage or active runtime environment.

### Using Vercel (Recommended)
Vercel provides a free tier that is perfect for fast static hosting.
1. Create a [Vercel](https://vercel.com/) account.
2. If your project is on GitHub, simply import the repository into Vercel.
3. Vercel will automatically detect `Vite` and run `npm run build`.
4. Your site will be deployed and both the new React landing page and the `quiz.html` will be accessible!

### Using Netlify
1. Create a [Netlify](https://www.netlify.com/) account.
2. Drag and drop the `dist/` folder (after running `npm run build` locally) OR connect your GitHub repository and let Netlify auto-deploy.
3. The root path (`/`) points to the fluid landing page, and `/quiz.html` directly hosts the quiz logic.
