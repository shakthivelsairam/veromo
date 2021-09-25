import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";
import helmet from "helmet";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
    res.send('Well done!');
})

const PORT: number = parseInt(process.env.PORT as string, 10);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});