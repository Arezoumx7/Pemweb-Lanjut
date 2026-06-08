const { pool, initMigrationsTable } = require('../db/pool');
const { cars } = require('../../../src/data/fleet');

async function seedCars() {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    
    // Clear existing data
    await client.query('TRUNCATE cars RESTART IDENTITY CASCADE');
    
    for (const car of cars) {
      // Parse price (Rp 1.200K -> 1200000)
      let priceNumeric = 0;
      const priceMatch = car.price.match(/[\d,.]+/);
      if (priceMatch) {
        let priceStr = priceMatch[0].replace(/\./g, '');
        priceNumeric = parseInt(priceStr);
        if (car.price.includes('K') || car.price.includes('k')) {
          priceNumeric = priceNumeric * 1000;
        }
      }
      
      const query = `
        INSERT INTO cars (
          name, category, subtitle, price_per_day, seats,
          transmission, bags, rating, reviews, images, badges
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      `;
      
      await client.query(query, [
        car.name,
        car.category,
        car.subtitle || '',
        priceNumeric,
        car.seats,
        car.transmission,
        car.bags,
        car.rating || 0,
        car.reviews || 0,
        [car.image],
        JSON.stringify(car.badges || [])
      ]);
    }
    
    await client.query('COMMIT');
    console.log(`✅ Successfully seeded ${cars.length} cars to database`);
    
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Seed failed:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

seedCars();