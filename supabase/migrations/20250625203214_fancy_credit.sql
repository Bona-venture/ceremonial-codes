/*
  # Update welcome images functionality

  1. Changes
    - Ensure welcome_images column exists and can store up to 6 image URLs
    - Update existing data structure if needed

  2. Security
    - No changes to existing RLS policies
*/

-- Ensure welcome_images column exists (it should already exist from previous migration)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'settings' AND column_name = 'welcome_images'
  ) THEN
    ALTER TABLE settings ADD COLUMN welcome_images JSONB DEFAULT '[]'::jsonb;
  END IF;
END $$;

-- Update any existing settings to have empty welcome_images array if null
UPDATE settings SET welcome_images = '[]'::jsonb WHERE welcome_images IS NULL;