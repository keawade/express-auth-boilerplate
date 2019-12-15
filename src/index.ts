import * as express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (req, res) => res.send('This is only a test.'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
