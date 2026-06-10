CREATE TABLE games (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  title        TEXT    NOT NULL,
  genre        TEXT    NOT NULL,
  platform     TEXT    NOT NULL,
  release_year INTEGER NOT NULL,
  cover_url    TEXT
);

CREATE TABLE players (
  id         INTEGER  PRIMARY KEY AUTOINCREMENT,
  username   TEXT     NOT NULL UNIQUE,
  email      TEXT     NOT NULL UNIQUE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sessions (
  id             INTEGER  PRIMARY KEY AUTOINCREMENT,
  game_id        INTEGER  NOT NULL REFERENCES games(id)   ON DELETE CASCADE,
  player_id      INTEGER  NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  duration_mins  INTEGER  NOT NULL,
  played_at      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  notes          TEXT
);

CREATE TABLE achievements (
  id          INTEGER  PRIMARY KEY AUTOINCREMENT,
  player_id   INTEGER  NOT NULL REFERENCES players(id) ON DELETE CASCADE,
  game_id     INTEGER  NOT NULL REFERENCES games(id)   ON DELETE CASCADE,
  name        TEXT     NOT NULL,
  unlocked_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);