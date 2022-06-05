const express = require('express');
const router = express.Router();

const genreController = require('../controllers/genre.controller');
const authorController = require('../controllers/author.controller');
//genre route : beginning
//get all genre
router.get('/genre',genreController.getGenreList);

//get genre by ID
router.get('/genre/:id', genreController.getGenreByID);

//create new genre
router.post('/genre',genreController.createNewGenre);

//update genre
router.put('/genre/:id',genreController.updateGenre);

//delete genre
router.delete('/genre/:id',genreController.deleteGenre);
//genre route :ending


//author route: start
//get all authors
router.get('/author',authorController.getAuthorList);

//get author by ID
router.get('/author/:id',authorController.getAuthorByID);

//create new author
router.post('/author',authorController.createNewAuthor);

//update author
router.put('/author/:id',authorController.updateAuthor);

//dete author
router.delete('/author/:id',authorController.deleteAuthor);
module.exports = router;