import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


async function main(){
    await mongoose.connect("mongodb://localhost:27017/test");
    const noteSchema = new mongoose.Schema({
        title: String,
        content: String,
        date:{
            type: Date,
            default: Date.now
        }
    });
    const Note = mongoose.model('Note',noteSchema);
    router.post('/create',async (req, res)=>{
        console.log(req.body.title);
        console.log(req.body.content);
        const obj = new Note({
            title: req.body.title,
            content: req.body.content
        });
        await obj.save();
        res.send("Over");
    });
    router.get('/read',async (req, res)=>{
        const data = await Note.where('_id').exists();
        res.json(data);
    });
    router.post('/update', async (req, res)=>{
        const query = { title: req.body.title};
        const newBody = {title: req.body.newBody.title,
            content: req.body.newBody.content
        }
        const got = await Note.findOneAndUpdate(query, newBody);
        if(got){
            res.send("The data has been updated");
        }
    });

}

main();
export {router}
