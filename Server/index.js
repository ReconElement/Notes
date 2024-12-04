import express from 'express';
import bodyParser from 'body-parser'
import * as routers from './routers2.js';
import * as auth_router from './auth.js';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());
app.use('/router',routers.router);

app.use('/auth',auth_router.router);


app.listen(port, ()=>{
    console.log(`Listening to port: ${port}`);
});