const express = require('express');
const home = require("../controllers/page");

const routes = express.Router();

routes.get("/", home.welcomeText);

routes.get("/about", home.about);

routes.get("/jobs", home.jobs);

routes.get("/services", home.service);

routes.get("/team", home.team);

routes.get("/contact", home.contact);

module.exports = routes;