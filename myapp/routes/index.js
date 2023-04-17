var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET map page. */
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Express' });
});

/* GET export-map page. */
router.get('/export-map', function(req, res, next) {
  res.render('export_map', { 
    title: 'Express',
    lat: 35,
    lng: 138,
    zoom: 14,
  });
});

/* GET business-map page. */
router.get('/business-map', function(req, res, next) {
  res.render('business_map', { 
    title: 'Express',
  });
});

module.exports = router;
