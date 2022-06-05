const BookModel = require('../models/book.model');

//get all authors
exports.getBookList =  (req,res)=>{

    BookModel.getAllBook((err,book)=>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Book',book);
        res.send(book)
    })
}

//get author by ID
exports.getBookByID = (req,res)=>{
    BookModel.getBookByID(req.params.id, (err, book)=>{
        if(err)
        res.send(err);
        console.log('Single book data',book);
        res.send(book);
    })
}

//create new author
exports.createNewBook = (req,res)=>{
    const bookReqData = new BookModel(req.body);
    console.log('bookReqData', bookReqData);
     //check null
     if(req.body.constructor === Object && Object.keys(req.body).length===0){
        res.send(400).send({success: false, message: 'Please fill all fields' });   
     }else{
         BookModel.createBook(bookReqData, (err,book)=>{
             if(err)
             res.send(err);
             res.json({status: true, message : 'Book created successfully',data: book.insertId })

         })
     }
}

//update book
exports.updateBook = (req,res) =>{
    const bookReqData = new BookModel(req.body);
    console.log('bookReqData update', bookReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success: false, message: 'Please fill all fields'}); 
    }else{
        BookModel.updateBook(req.params.id,bookReqData, (err,book )=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Book updated Successfully'})
        } )
    }
}

//delete book
exports.deleteBook = (req,res)=>{
    BookModel.deleteBook(req.params.id, (err, book)=>{
        if(err)
        res.send(err);
        res.json({success: true, message: 'Book deleted successfully!'});
    })
}

//view all book details
exports.viewAllDetails =  (req,res)=>{

    BookModel.viewAllDetails((err,book)=>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Books details',book);
        res.send(book)
    })
}
