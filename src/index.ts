import * as express from 'express';
import * as bodyParser from 'body-parser';

const PORT = 3000;

const app = express();

// Middlewares
app.set('views', 'src/views');
app.set('view engine', 'pug');
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  const authed = req.query.authed === 'true';

  if (authed) {
    return res.render('secured', { authed });
  }

  return res.render('unsecured', { authed });
});

app.get('/login', (req, res) => {
  const authed = req.query.authed === 'true';

  if (authed) {
    return res.redirect('/?authed=true');
  }

  return res.render('login', { authed });
});

app.post('/login', bodyParser.urlencoded({ extended: false }), (req, res) => {
  const { username, password } = req.body;

  if (username === 'keawade' && password === 'test123') {
    return res.redirect('/?authed=true');
  }

  return res.redirect('/login');
});

// Start server
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
