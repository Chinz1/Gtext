exports.welcomeText = (req, res, next) => {
  res.status(200).render('index', {
    pageTitle: 'Home',
    path: '/'
  });
  };

exports.about = (req, res, next) => {
  res.status(200).render('about', {
    pageTitle: 'About',
    path: '/about'
  });
  };

exports.jobs = (req, res, next) => {
  res.status(200).render('jobs', {
    pageTitle: 'Jobs',
    path: '/jobs'
  });
  };

exports.service = (req, res, next) => {
  res.status(200).render('services', {
    pageTitle: 'Services',
    path: '/services'
  });
  };
  
exports.team = (req, res, next) => {
  res.status(200).render('team', {
    pageTitle: 'Team',
    path: '/team'
  });
  };

exports.contact = (req, res, next) => {
  res.status(200).render('contact', {
    pageTitle: 'Contact',
    path: '/contact'
  });
  };
    
    
    