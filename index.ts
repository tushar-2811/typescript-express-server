import 'dotenv/config'
import express from 'express'
import type { Request , Response } from 'express';

const app = express();
const port = process.env.PORT || 9000;

app.get('/' , (req: Request , res: Response) => {
      res.send('<h1> Hello world </h1>');
})

app.listen(port , () => {
    console.log(`The server is running on port : ${port}`);
})