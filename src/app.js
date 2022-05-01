const express = require("express");
require("./db/conn");

const router = require("./routers/men");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//Using Express Router from men.js

app.use(router);

app.listen(port, () => {});
