const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const routes = require("./routes/page");
const error = require('./controllers/error');
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 5000;
const DB = process.env.DATABASE;

// MIDDLEWARES
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));


app.use("", routes);
app.get('/500', error.get500);
app.use(error.get404);

// CONNECTING TO THE DB
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully');
}).catch(err => {
    console.log(err);
});

app.listen(port, () => {
  console.log(
    `GTEXT_JOBS is running on http://localhost:${port}`
  );
});

