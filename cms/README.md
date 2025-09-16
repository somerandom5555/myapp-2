# TradersPool CMS

This directory contains the Payload CMS backend for the TradersPool application.

## Setup

1. Copy the environment file:
   ```bash
   cp .env.example .env
   ```

2. Update the environment variables in `.env`:
   - `PAYLOAD_SECRET`: A secure secret key for Payload
   - `DATABASE_URI`: MongoDB connection string
   - `FRONTEND_URL`: URL of your Next.js frontend

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the admin panel at: http://localhost:3002/admin

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run generate:types` - Generate TypeScript types

## Collections

- **Users**: Admin authentication and user management
- **Pages**: Content pages that can be consumed by the frontend

## Configuration

The Payload configuration is located in `src/payload.config.js`. This file defines:
- Collections and their fields
- Admin panel settings
- Database adapter
- CORS and CSRF settings

## Integration with Next.js

This CMS is designed to work alongside the Next.js frontend. The frontend can consume content via Payload's REST API or GraphQL API.