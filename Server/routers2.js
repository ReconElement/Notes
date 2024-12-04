import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

async function main(){
    await mongoose.connect("mongodb://localhost:27017/myapp");
    const noteSchema = new mongoose.Schema({
        _id: Number,
        title: String,
        content: String,
        date: {
            type: Date,
            default: Date.now,
        }
    });
    const Note = mongoose.model('Note',noteSchema);
    router.post('/', async (req, res)=>{
        console.log(req.body.title);
        console.log(req.body.content);
        const data = Note.where('_id').exists();
        const len = (await data).length;
        const obj = new Note({
            _id: len+1,
            title: req.body.title,
            content: req.body.content
        });
        const x = await obj.save();
        if(x){
            res.send("The document has been saved");
        }
    });
    router.get('/', async (req, res)=>{
        const data = await Note.where('_id').exists();
        res.json(data);
    });
    router.put('/:id', async (req, res)=>{
        const id = req.params.id;
        const update = {
            title: req.body.title,
            content: req.body.content
        };
        const x = await Note.findByIdAndUpdate(id, update);
        if(x){
            res.send("The document has been updated");
        }
    });
    router.delete('/:id', async (req, res)=>{
        const id = req.params.id;
        const x = await Note.findByIdAndDelete(id);
        if(x){
            res.send("The document has been deleted");
        }
    });
}

main();
export {router};