import * as express from 'express';

const PORT = 3000;

const app = express();

app.set('views', 'src/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('home'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
