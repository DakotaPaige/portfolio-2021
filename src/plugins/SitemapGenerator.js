import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';
import { routesParser as parseRoutes } from 'react-router-sitemap';
// import { paramsApplier as applyParams } from 'react-router-sitemap';
import routes from '../routes';
import path from 'path';
import fs from 'fs';

/* 
  IF THERE ARE DYNAMIC SUBROUTES:
   - uncomment import of paramsApplier
   - uncomment & populate subroutes array with strings of all subpages
   - uncomment config & update '/work/:id' to what the dynamic subroute is for the site (this should match what is in routes.js) (if :id changes, make sure to change the key in the {id: subroutes} object)
   - uncomment const paths = applyParams(parsedRoutes, config); && comment out the line after.
   - Dynamic subroutes should now be written in the sitemap during the build! Take care to add any new subpaths in the future to the subroutes array.
*/

// const subroutes = [];

// const config = {
//   '/work/:id': [
//     // in our case slug is the parameter
//     { id: subroutes }, // so we will use id for the pattern replace here
//   ],
// };

const parsedRoutes = parseRoutes(routes);

const hostname = process.env.npm_package_host;

// define our destination folder and sitemap file name
const dest = path.resolve('./public', 'sitemap.xml');

// Merge our route paths with config pattern
// const paths = applyParams(parsedRoutes, config);
const paths = parsedRoutes;

const sitemap = buildSitemap(hostname, paths);

// write sitemap.xml file in /public folder
// Access the sitemap content by converting it with .toString() method
fs.writeFileSync(dest, sitemap.toString());
