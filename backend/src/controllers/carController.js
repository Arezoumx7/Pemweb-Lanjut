const { pool } = require('../db/pool');

// Ambil semua mobil
const getAllCars = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = `
      SELECT 
        id, name, category, subtitle, price_per_day, seats,
        transmission, bags, rating, reviews, image, badges
      FROM cars 
      WHERE deleted_at IS NULL
    `;
    const params = [];

    if (category && category !== 'all') {
      query += ` AND category = ?`;
      params.push(category);
    }

    if (search) {
      query += ` AND name LIKE ?`;
      params.push(`%${search}%`);
    }

    query += ` ORDER BY id`;

    const [rows] = await pool.query(query, params);
    
    // Debug log untuk melihat data transmission
    console.log('📊 Data dari database:', rows.map(car => ({ 
      id: car.id, 
      name: car.name, 
      transmission: car.transmission 
    })));
    
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Ambil detail mobil berdasarkan ID
const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const query = `
      SELECT 
        id, name, category, subtitle, price_per_day, seats,
        transmission, bags, rating, reviews, image, badges,
        COALESCE(fuel_type, 'Bensin') as fuel_type,
        COALESCE(year, 2024) as year
      FROM cars 
      WHERE id = ? AND deleted_at IS NULL
    `;
    
    const [rows] = await pool.query(query, [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Car not found' });
    }
    
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error fetching car detail:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get semua kategori
const getCategories = async (req, res) => {
  try {
    const query = `
      SELECT DISTINCT category 
      FROM cars 
      WHERE deleted_at IS NULL 
      ORDER BY category
    `;
    const [rows] = await pool.query(query);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = { getAllCars, getCarById, getCategories };