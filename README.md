# What's 4 Dinner

A simple web application to store and manage dinner ideas. Instead of detailed recipes, this app focuses on quick dinner suggestions with their main ingredients, making meal planning easier.

## Features

- Add new dinner ideas with main ingredients
- View all stored dinner ideas
- Chronological listing with Swedish date format (YYYY-DD-MM)
- SQLite database for data storage
- Responsive design with Tailwind CSS

## Tech Stack

- SvelteKit 5
- SQLite with Drizzle ORM
- TailwindCSS
- Vercel deployment ready

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/magnus-hansson/whats-4-dinner.git
   cd whats-4-dinner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment:
   - Copy `.env.example` to `.env`
   - The default SQLite database path is `./data.db`

4. Initialize the database:
   ```bash
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

## Deployment

This project is configured for deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments.

## Local Development

The app uses SQLite for data storage, making it easy to develop locally without any external database dependencies.
