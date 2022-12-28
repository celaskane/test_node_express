import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import afazeresRoutes from './routes/afazeres';

const app = express();

app.use(json());
app.use('/afazeres', afazeresRoutes);

//middleware function (express.js)
//app.use((err: Error, req: Express.Request, res: Express.Response, next: NextFunction) => {});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ mensagem: err.message });
});

app.listen(3000);