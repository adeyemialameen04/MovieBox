<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->

# MovieBox

MovieBox is a web application built with Next.js 13 and TypeScript that allows users to discover information about movies using the TMDB (The Movie Database) API.

![MovieBox Screenshot](./screenshot.png)

## Features

- View upcoming movies.
- Search for movies by title.
- View movie details, including the title, overview, release date, and more.
- Watch movie trailers.

## Technologies Used

- [Next.js 13](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TMDB API](https://www.themoviedb.org/documentation/api)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/moviebox.git
   ```

2. Navigate to the project directory:
   ```bash  
   cd moviebox
   ```

3. Install dependencies:
   ```bash  
   npm install
   # or
   yarn install
   ```

4. Set up your TMDB API key:
     Visit the TMDB API website to obtain an API key.
     Create a .env.local file in the root directory of your project.
     Add your API key to the .env.local file:   