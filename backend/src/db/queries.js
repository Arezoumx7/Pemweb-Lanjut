// Query untuk operasi database
const queries = {
  // Ambil semua mobil (dengan filter opsional)
  getAllCars: `
    SELECT 
      id, name, category, subtitle, price_per_day, seats,
      transmission, bags, rating, reviews, images, badges
    FROM cars 
    WHERE deleted_at IS NULL
    ORDER BY id
  `,
  
  // Ambil mobil berdasarkan ID
  getCarById: `
    SELECT 
      id, name, category, subtitle, price_per_day, seats,
      transmission, bags, rating, reviews, images, badges
    FROM cars 
    WHERE id = $1 AND deleted_at IS NULL
  `,
  
  // Filter berdasarkan kategori
  getCarsByCategory: `
    SELECT * FROM cars 
    WHERE category = $1 AND deleted_at IS NULL
    ORDER BY id
  `,
  
  // Search mobil
  searchCars: `
    SELECT * FROM cars 
    WHERE name ILIKE $1 AND deleted_at IS NULL
    ORDER BY id
  `,
  
  // Update data mobil (hanya untuk admin nanti)
  updateCarPrice: `
    UPDATE cars 
    SET price_per_day = $1, updated_at = NOW()
    WHERE id = $2
    RETURNING *
  `
};

module.exports = queries;