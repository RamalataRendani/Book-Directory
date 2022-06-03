var sql = require("./db.js");

var Genre = function(genre){
    this.genre_name = genre.genre_name;
}

//get all genre
Genre.getAllGenre = (result)=>{
    sql.query('SELECT * FROM genre',(err,res)=>{
       if(err){
           console.log('Error while fetching genre ',err);
           result(null,err);
       } else{
           console.log('Genre fetched successfully');
           result(null,res);
       }
       
    })
}

//get genre by ID from DB
Genre.getGenreByID = (id,result)=>{
    sql.query('SELECT * FROM genre WHERE genreId=?',id, (err,res)=>{
        if(err){
            console.log('Error while fetching genre by id', err);
            result(null,err);
        }else{
            console.log('Genre created successfully');
            result(null,res);
        }
    })
}


module.exports = Genre;