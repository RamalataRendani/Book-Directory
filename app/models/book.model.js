var sql = require('./db.js');

var Book = function(book){
    this.title = book.title;
    this.genreId = book.genreId;
    this.authorId = book.authorId;
}

//get all book
Book.getAllBook= (result) =>{
    sql.query('SELECT * FROM books', (err,res)=>{
        if(err){
        console.log('Error while fetching book details');
        result(null,err)
        }else{
            console.log('Book fetched successfully');
            result(null,res);
        }
    })
}

//get book by ID from DB
Book.getBookByID = (id,result)=>{
    sql.query('SELECT * FROM books WHERE bookId=?',id, (err,res)=>{
        if(err){
            console.log('Error while fetching book by id', err);
            result(null,err);
        }else{
            console.log('Book fetched by ID successfully');
            result(null,res);
        }
    })
}
//create new book
Book.createBook = (bookReqData, result)=>{
    sql.query('INSERT INTO books SET ? ', bookReqData, (err,res)=>{
       if(err){
           console.log('Error while inserting data ');
           result(null,err);
       } else{
           console.log('Book created successfully');
           result(null,res)
       }
    }) 
 }

 //update book
Book.updateBook = (id, bookReqData, result)=>{
    sql.query("UPDATE books SET title =?, genreId=?,authorId=? WHERE bookId =?", [bookReqData.title,bookReqData.genreId,bookReqData.authorId,id], (err,res)=>{
        if(err){
            console.log('Error while updating the book');
            result(null,err);
        }else{
            console.log("Book updated successfully");
            result(null,res);
        }
        });
}

//delete book
Book.deleteBook = (id,result)=> {
    sql.query("DELETE FROM books WHERE bookId=?", id, (err,res)=>{
        if(err){
            console.log('Error while deleting the book');
            result(null,err);
        
         }else{
         console.log("Book deleted successfully");
        result(null,res);}

         });
}

//list all authors and genre
Book.viewAllDetails = (result) =>{
    sql.query('SELECT b.bookId, b.title, g.genreId,g.genre_name,a.authorId,a.first_name,a.last_name,a.phone,a.country FROM books As b LEFT JOIN genre AS g ON g.genreId = b.genreId LEFT JOIN authors As a ON a.authorId = b.authorId', (err,res)=>{
    if(err){
        console.log('Error while feching data');
        result(null,err);
    }else{
        console.log('Data feched successfully');
        result(null,res);
    }
})
}
module.exports = Book;
