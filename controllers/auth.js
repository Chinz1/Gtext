const User = require("../models/users");

exports.signUp = (res, req) => {
    const newUser = await User.create(req.body);

    res.status(201).render('index', {
        pageTitle: 'Signup',
        path: '/signup',
        data: {
            user: newUser
        } 
    });
}