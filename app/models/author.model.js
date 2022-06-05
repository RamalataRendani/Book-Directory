var sql = require('./db.js');

var Author = function(author){
    this.first_name = author.first_name;
    this.last_name = author.last_name;
    this.phone = author.phone;
    this.country = author.country;
}

//get all authors
Author.getAllAuthor= (result) =>{
    sql.query('SELECT * FROM authors', (err,res)=>{
        if(err){
        console.log('Error while fetching author details');
        result(null,err)
        }else{
            console.log('Authors fetched successfully');
            result(null,res);
        }
    })
}

//get author by ID from DB
Author.getAuthorByID = (id,result)=>{
    sql.query('SELECT * FROM authors WHERE authorId=?',id, (err,res)=>{
        if(err){
            console.log('Error while fetching author by id', err);
            result(null,err);
        }else{
            console.log('Author created successfully');
            result(null,res);
        }
    })
}
//create new author
Author.createAuthor = (authorReqData, result)=>{
    sql.query('INSERT INTO authors SET ? ', authorReqData, (err,res)=>{
       if(err){
           console.log('Error while inserting data ');
           result(null,err);
       } else{
           console.log('Author created successfully');
           result(null,res)
       }
    }) 
 }

 //update author
Author.updateAuthor = (id, authorReqData, result)=>{
    sql.query("UPDATE authors SET first_name =?, last_name=?,phone=?,country=? WHERE authorId =?", [authorReqData.first_name,authorReqData.last_name,authorReqData.phone,authorReqData.country,id], (err,res)=>{
        if(err){
            console.log('Error while updating the author');
            result(null,err);
        }else{
            console.log("Author updated successfully");
            result(null,res);
        }
        });
}

//delete author
Author.deleteAuthor = (id,result)=> {
    sql.query("DELETE FROM authors WHERE authorId=?", id, (err,res)=>{
        if(err){
            console.log('Error while deleting the author');
            result(null,err);
        
         }else{
         console.log("Author deleted successfully");
        result(null,res);}

         });
}

module.exports = Author;
