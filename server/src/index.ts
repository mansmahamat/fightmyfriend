import express, {Request, Response} from 'express';
const app = express();
const port = 9000;

const text: string = "Hello World"

app.get('/', (req: Request, res: Response) => res.send(text));
app.listen(port);

console.log('Server start')