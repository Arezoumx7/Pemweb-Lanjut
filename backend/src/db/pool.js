const mysql = require('mysql2/promise');
require('dotenv').config();

// Buat connection pool untuk MySQL (tanpa password)
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || 'rental_cars_db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',  // ← KOSONGKAN
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test koneksi
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Connected to MySQL Database');
    connection.release();
    
    // Cek database yang aktif
    const [rows] = await pool.query('SELECT DATABASE() as db_name');
    console.log(`📁 Database: ${rows[0].db_name}`);
    
  } catch (error) {
    console.error('❌ MySQL Connection failed:', error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('1. Pastikan MySQL service running');
    console.log('2. Cek database "rental_cars_db" sudah dibuat');
    console.log('3. Cek user root tidak perlu password');
  }
}

testConnection();

module.exports = { pool };