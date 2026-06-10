# GameVault 🎮

A self-hosted REST API for tracking games, play sessions, players, and achievements.

Built with Node.js, Express, TypeScript, TypeORM, and SQLite.

## Getting started

```bash
git clone https://github.com/YOUR_USERNAME/gamevault.git
cd gamevault
npm install
cp .env.example .env
npm run dev
```

API runs at `http://localhost:3000`

## Routes so far

| Method | Endpoint | Description |
|---|---|---|
| GET | /games | Get all games |
| GET | /games/:id | Get a single game |
| POST | /games | Add a new game |
| PATCH | /games/:id | Update a game |
| DELETE | /games/:id | Delete a game |

## Project structure

src/
├── entities/     # TypeORM models (Day 4)
├── routes/       # Express route handlers
├── config/       # Database connection
└── index.ts      # Entry point