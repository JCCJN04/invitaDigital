-- 1. Agregar columna children_count a la tabla guests
ALTER TABLE guests ADD COLUMN IF NOT EXISTS children_count INT DEFAULT 0;

-- 2. Actualizar familias con ninos
UPDATE guests SET children_count = 1 WHERE token = 'roberto_eduardo_grajales__d59e';
UPDATE guests SET children_count = 2 WHERE token = 'osvaldo_rodriguez_hernade_cf9b';
UPDATE guests SET children_count = 1 WHERE token = 'daniel_gerardo_gomez_dori_33d7';
UPDATE guests SET children_count = 1 WHERE token = 'mtra_fd8a';