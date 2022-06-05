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

//create new genre
exports.createNewGenre = (req,res)=>{
    const genreReqData = new GenreModel(req.body);
    console.log('genreReqData', genreReqData);
     //check null
     if(req.body.constructor === Object && Object.keys(req.body).length===0){
        res.send(400).send({success: false, message: 'Please fill all fields' });   
     }else{
         GenreModel.createGenre(genreReqData, (err,genre)=>{
             if(err)
             res.send(err);
             res.json({status: true, message : 'Genre created successfully',data: genre.insertId })

         })
     }
}

//update genre
exports.updateGenre = (req,res) =>{
    const genreReqData = new GenreModel(req.body);
    console.log('genreReqData update', genreReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success: false, message: 'Please fill all fields'}); 
    }else{
        GenreModel.updateGenre(req.params.id,genreReqData, (err,genre )=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Genre updated Successfully'})
        } )
    }
}

//delete genre
exports.deleteGenre = (req,res)=>{
    GenreModel.deleteGenre(req.params.id, (err, genre)=>{
        if(err)
        res.send(err);
        res.json({success: true, message: 'genre deleted successfully!'});
    })
}