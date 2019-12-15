import * as express from 'express';

const PORT = 3000;

const app = express();

// Middlewares
app.set('views', 'src/views');
app.set('view engine', 'pug');

// Routes
app.get('/', (req, res) => {
  const authed = req.query.authed === 'true';

  if (authed) {
    return res.render('secured', { authed });
  }

  return res.render('unsecured', { authed });
});

// Start server
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
