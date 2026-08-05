CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE todos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL
  -- completed BOOLEAN DEFAULT FALSE,
  -- created_at TIMESTAMPTZ DEFAULT NOW(),
  -- completed_at TIMESTAMPTZ
);