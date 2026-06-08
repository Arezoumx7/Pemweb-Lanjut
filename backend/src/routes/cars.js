const express = require('express');
const router = express.Router();
const { getAllCars, getCarById, getCategories } = require('../controllers/carController');

// Route untuk mobil
router.get('/', getAllCars);           // GET /api/cars
router.get('/categories', getCategories); // GET /api/cars/categories
router.get('/:id', getCarById);        // GET /api/cars/:id

module.exports = router;