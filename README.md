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
```env

TMDB_API_KEY=your_api_key_here
```

5. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and access the app at [http://localhost:3000](http://localhost:3000).

## Usage

- **Home Page**: The homepage displays a random upcoming movie with a backdrop image, title, and overview. Users can click the "Watch Trailer" button to watch the trailer or click "View Details" to see more information about the movie.

- **Search**: Users can search for movies by title using the search bar in the navigation.

- **Movie Details**: When a user clicks on a movie's "View Details" button, they are taken to a page with detailed information about the movie, including the title, overview, release date, vote average, and more. If available, the user can also watch the movie's trailer.

## Contributing

Contributions are welcome! If you would like to contribute to MovieBox, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to your branch: `git push origin feature/new-feature`.
5. Open a pull request on the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Please replace `"https://github.com/your-username/moviebox.git"` in the cloning instructions with the actual URL of your project's Git repository, and ensure that you replace `"your_api_key_here"` with your actual TMDB API key in the `.env.local` file.