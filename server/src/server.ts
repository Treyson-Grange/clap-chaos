import express, { Request, Response } from 'express';

const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
