const AuthorModel = require('../models/author.model');

//get all authors
exports.getAuthorList =  (req,res)=>{

    AuthorModel.getAllAuthor((err,author)=>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Authors',author);
        res.send(author)
    })
}

//get author by ID
exports.getAuthorByID = (req,res)=>{
    AuthorModel.getAuthorByID(req.params.id, (err, author)=>{
        if(err)
        res.send(err);
        console.log('Single author data',author);
        res.send(author);
    })
}

//create new author
exports.createNewAuthor = (req,res)=>{
    const authorReqData = new AuthorModel(req.body);
    console.log('authorReqData', authorReqData);
     //check null
     if(req.body.constructor === Object && Object.keys(req.body).length===0){
        res.send(400).send({success: false, message: 'Please fill all fields' });   
     }else{
         AuthorModel.createAuthor(authorReqData, (err,author)=>{
             if(err)
             res.send(err);
             res.json({status: true, message : 'Author created successfully',data: author.insertId })

         })
     }
}

//update author
exports.updateAuthor = (req,res) =>{
    const authorReqData = new AuthorModel(req.body);
    console.log('authorReqData update', authorReqData);
    //check null
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success: false, message: 'Please fill all fields'}); 
    }else{
        AuthorModel.updateAuthor(req.params.id,authorReqData, (err,author )=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Author updated Successfully'})
        } )
    }
}

//delete author
exports.deleteAuthor = (req,res)=>{
    AuthorModel.deleteAuthor(req.params.id, (err, author)=>{
        if(err)
        res.send(err);
        res.json({success: true, message: 'Author deleted successfully!'});
    })
}