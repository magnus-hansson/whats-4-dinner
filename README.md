# What's 4 Dinner

A simple web application to store and manage dinner ideas. Instead of detailed recipes, this app focuses on quick dinner suggestions with their main ingredients, making meal planning easier.

## Features

- Add new dinner ideas with main ingredients
- View all stored dinner ideas
- Chronological listing with Swedish date format (YYYY-DD-MM)
- Postgres database (using Vercel Postgres)
- Responsive design with Tailwind CSS

## Tech Stack

- SvelteKit 5
- Vercel Postgres with Drizzle ORM
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

3. Set up Vercel and database:
   - Install Vercel CLI: `npm i -g vercel`
   - Login to Vercel: `vercel login`
   - Create a new project: `vercel link`
   - Add Postgres database from Vercel dashboard
   - Pull environment variables: `vercel env pull`

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

This project is configured for deployment on Vercel. The easiest way to deploy is:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the SvelteKit configuration
4. Add a Postgres database from your project settings
5. Deploy!

## Local Development

The app uses Vercel Postgres which will work in both development and production. Make sure you have the correct environment variables from your Vercel project settings.
