import { Router, Request, Response } from 'express';

const router = Router();

// Temporary in-memory store — replaced by TypeORM on Day 4
interface Game {
  id: number;
  title: string;
  genre: string;
  platform: string;
  releaseYear: number;
  totalHoursPlayed: number;
}

let games: Game[] = [
  { id: 1, title: 'Elden Ring',       genre: 'RPG',     platform: 'PC',   releaseYear: 2022, totalHoursPlayed: 120 },
  { id: 2, title: 'Hollow Knight',    genre: 'Metroidvania', platform: 'PC', releaseYear: 2017, totalHoursPlayed: 45 },
  { id: 3, title: 'Hades',            genre: 'Roguelike', platform: 'PC',  releaseYear: 2020, totalHoursPlayed: 80 },
];

let nextId = 4;

// GET /games — return all games
router.get('/', (_req: Request, res: Response) => {
  res.json(games);
});

// GET /games/:id — return one game
router.get('/:id', (req: Request, res: Response) => {
  const idParam = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  const game = games.find(g => g.id === parseInt(idParam, 10));
  if (!game) {
    res.status(404).json({ error: 'Game not found' });
    return;
  }
  res.json(game);
});

// POST /games — add a new game
router.post('/', (req: Request, res: Response) => {
  const { title, genre, platform, releaseYear, totalHoursPlayed } = req.body;

  if (!title || !genre || !platform || !releaseYear) {
    res.status(400).json({ error: 'title, genre, platform, and releaseYear are required' });
    return;
  }

  const newGame: Game = {
    id: nextId++,
    title,
    genre,
    platform,
    releaseYear,
    totalHoursPlayed: totalHoursPlayed ?? 0,
  };

  games.push(newGame);
  res.status(201).json(newGame);
});

// PATCH /games/:id — update a game
router.patch('/:id', (req: Request, res: Response) => {
  const idParam = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  const index = games.findIndex(g => g.id === parseInt(idParam, 10));
  if (index === -1) {
    res.status(404).json({ error: 'Game not found' });
    return;
  }

  games[index] = { ...games[index], ...req.body, id: games[index].id };
  res.json(games[index]);
});

// DELETE /games/:id — remove a game
router.delete('/:id', (req: Request, res: Response) => {
  const idParam = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  const index = games.findIndex(g => g.id === parseInt(idParam, 10));
  if (index === -1) {
    res.status(404).json({ error: 'Game not found' });
    return;
  }

  const deleted = games.splice(index, 1)[0];
  res.json({ message: `'${deleted.title}' deleted successfully` });
});

export default router;