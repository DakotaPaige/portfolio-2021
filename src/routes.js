const routes = [
  {
    path: '/',
    component: 'pages/Home'
  },
  {
    path: '/about',
    component: 'pages/About'
  }
];

const generateRoutes = function() {
  let generatedRoutes = routes;

  // Add the wildcard route at the end to redirect to 404 page.
  generatedRoutes.push({
    path: '*',
    component: 'pages/NotFound'
  });

  return generatedRoutes;
};

module.exports = generateRoutes();
