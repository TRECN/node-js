const express=require('express');
const router = express.Router();

const Book = require('../../models/Book');


router.get('/test',(req,res)=> res.send('book route testing!'));

router.get('/',(req,res)=>{
    Book.find()
        .then(books=>res.json(books))
        .catch(er=>res.status(404).json({nobooksfund:'No Books Found'}));
});

router.get('/:id',(req,res)=>{
    Book.findById(req.params.id)
        .then(book=>res.json(book))
        .catch(er=>res.status(404).json({nobooksfund:'No Books Found'}));

});

router.post('/',(req,res)=>{
    Book.create(req.body)
        .then(book=>res.json({msg:'Book added successfully'}))
        .catch(er => res.status(400).json({error:'Unable to add book'}));
});

router.put('/:id',(req,res)=>{
    Book.findByIdAndUpdate(req.params.id,req.body)
        .then(book=>res.json({msg:'Updated Successfully'}))
        .catch(er => res.status(400).json({error:'Unable to update'}));
});


router.delete('/:id',(req,res)=>{
    Book.findByIdAndRemove(req.params.id,req.body)
        .then(book=>res.json({msg:'Book deleted successfully'}))
        .catch(er => res.status(404).json({error:'NO such book'}));
});

module.exports=router;