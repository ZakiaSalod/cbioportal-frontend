# cbioportal-frontend
[![Build Status](https://travis-ci.org/cBioPortal/cbioportal-frontend.svg?branch=master)](https://travis-ci.org/cBioPortal/cbioportal-frontend)
[![codecov](https://codecov.io/gh/cbioportal/cbioportal-frontend/branch/master/graph/badge.svg)](https://codecov.io/gh/cbioportal/cbioportal-frontend)
[![Code Climate](https://codeclimate.com/github/cBioPortal/cbioportal-frontend/badges/gpa.svg)](https://codeclimate.com/github/cBioPortal/cbioportal-frontend)

This is the new React frontend for cBioPortal, currently under development. 

Add .env file in root of project. Put the following in that file.  The host can be set to whatever instance of the api you want to use as a backend.  
```
API_ROOT=www.cbioportal.org
```

To embed in cBioPortal site, place the following in any jsp

```html
<div id="root">fd</div>
<script src="//localhost:3000/app.js"></script>
```

To install all app and dev dependencies 
```
npm install
```

To start dev server with hot reload enabled
```
npm start
```

To run unit/integration tests
```
npm test
```

To run linting
```
npm run lint
```
