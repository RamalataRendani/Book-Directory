const GenreModel = require('../models/genre.model');

//get all genre list
exports.getGenreList = (req,res)=>{
 //console.log('here all genre list');
 GenreModel.getAllGenre((err,genres)=>{
     console.log('We are here');
     if(err)
     res.send(err);
     console.log('Genres',genres);
     res.send(genres)
 })   
}

//get genre by ID
exports.getGenreByID = (req,res)=>{
    GenreModel.getGenreByID(req.params.id, (err, genres)=>{
        if(err)
        res.send(err);
        console.log('Single genre data',genres);
        res.send(genres);
    })
}