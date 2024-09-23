import express from 'express';
export const router = express.Router();

//middleware that is specific to this router
const timelog = (req, res, next)=>{
    console.log(`Time: ${Date.now()}`);
    next();
}

router.use(timelog);

//define the homepage route
router.get('/',(req, res)=>{
    res.send(`Birds home page`);
});

router.get('/about',(req, res)=>{
    res.send(`About birds`);
});


