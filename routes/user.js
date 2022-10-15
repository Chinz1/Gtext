const express = require('express');
const auth = require("../controllers/auth");

const routes = express.Router();

routes.post("/signup", auth.signUp);