// index.js

/**
 * Required External Modules
 */

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');

/**
 * Connect DATABASE
 */

const db = require('./config/db/connect')
db.connect()


/**
 * App Variables
 */

const app = express();
// const port = 3000
const port = process.env.PORT || 3000;

/**
 *  App Configuration
 */
const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
app.use(express.static(path.join(__dirname, 'public'), options));
app.use(morgan('combined'));
app.use(express.urlencoded());
app.use(express.json());
app.engine(
    '.hbs',
    exphbs({
        extname: '.hbs',
    }),
);

// app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('views', path.join(__dirname, 'resources/views'));

// console.log("Path:", path.join(__dirname, "resources/views"))
// handlebars
app.set('view engine', 'hbs');
// pug
app.set('view engine', 'pug');

/**
 * Routes Definitions
 */

const route = require('./routes');
route(app);

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
