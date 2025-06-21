/*
  # Add welcome image and guest category fields

  1. Changes
    - Add welcome_image column to settings table
    - Add category column to guests table with default 'regular'

  2. Security
    - No changes to existing RLS policies
*/

-- Add welcome_image column to settings table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'settings' AND column_name = 'welcome_image'
  ) THEN
    ALTER TABLE settings ADD COLUMN welcome_image TEXT;
  END IF;
END $$;

-- Add category column to guests table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'guests' AND column_name = 'category'
  ) THEN
    ALTER TABLE guests ADD COLUMN category TEXT DEFAULT 'regular' CHECK (category IN ('regular', 'premium', 'family'));
  END IF;
END $$;

-- Update existing guests to have 'regular' category if null
UPDATE guests SET category = 'regular' WHERE category IS NULL;