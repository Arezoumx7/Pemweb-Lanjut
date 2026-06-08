-- Tabel cars
CREATE TABLE IF NOT EXISTS cars (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    subtitle VARCHAR(200),
    price_per_day INTEGER NOT NULL,
    seats INTEGER NOT NULL,
    transmission VARCHAR(10) NOT NULL,
    bags INTEGER NOT NULL,
    rating DECIMAL(2,1) DEFAULT 0,
    reviews INTEGER DEFAULT 0,
    images TEXT[] DEFAULT '{}',
    badges JSONB DEFAULT '[]',
    fuel_type VARCHAR(20) DEFAULT 'Bensin',
    year INTEGER DEFAULT 2024,
    deleted_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index untuk performa
CREATE INDEX IF NOT EXISTS idx_cars_category ON cars(category);
CREATE INDEX IF NOT EXISTS idx_cars_price ON cars(price_per_day);
CREATE INDEX IF NOT EXISTS idx_cars_name ON cars(name);
CREATE INDEX IF NOT EXISTS idx_cars_badges ON cars USING GIN(badges);