import express, {Request, Response} from 'express';
const app = express();
const port = 9000;

const text = "Hello World"

app.get('/', (_req: Request, res: Response) => res.send(text));
app.listen(port);

console.log('Server start')