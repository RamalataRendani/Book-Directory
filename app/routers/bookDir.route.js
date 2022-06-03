const express = require('express');
const router = express.Router();

const genreController = require('../controllers/genre.controller');

//get all genre
router.get('/genre',genreController.getGenreList);

//get genre by ID
router.get('/genre/:id', genreController.getGenreByID);

module.exports = router;