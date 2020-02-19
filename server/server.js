const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require('./routes/router');
const compression = require("compression");
const csurf = require("csurf");
const cors = require('cors');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));