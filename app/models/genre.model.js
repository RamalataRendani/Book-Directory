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

//create new genre
Genre.createGenre = (genreReqData, result)=>{
   sql.query('INSERT INTO genre SET ? ', genreReqData, (err,res)=>{
      if(err){
          console.log('Error while inserting data ');
          result(null,err);
      } else{
          console.log('Genre created successfully');
          result(null,res)
      }
   }) 
}
//update genre
Genre.updateGenre = (id, genreReqData, result)=>{
    sql.query("UPDATE genre SET genre_name =? WHERE genreId =?", [genreReqData.genre_name,id], (err,res)=>{
        if(err){
            console.log('Error while updating the genre');
            result(null,err);
        }else{
            console.log("Genre updated successfully");
            result(null,res);
        }
        });
}

//delete genre
Genre.deleteGenre = (id,result)=> {
    sql.query("DELETE FROM genre WHERE genreId=?", id, (err,res)=>{
        if(err){
            console.log('Error while deleting the genre');
            result(null,err);
        
         }else{
         console.log("Genre deleted successfully");
        result(null,res);}

         });
}


module.exports = Genre;