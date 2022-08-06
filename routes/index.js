var express = require('express');
const path = require('path');
const fs = require('fs');
var router = express.Router();

const productAll = require('../public/assets/products.js');
console.log(productAll);

let products = [
  {
    name: 'Custom Keto Diet',
    description: 'Get A Custom Ketogenic Meal Plan Designed Just For You Based On The Foods You Love And Your Goals',
    navUrl: '/keto-diet',
    imgUrl: 'assets/img/keto.png',
    affiliateUrl: 'https://199dbnla25vcuftmlc4a7r0sf3.hop.clickbank.net/'
  },
  {
    name: 'Okinawa Flat Belly Tonic',
    description: 'Okinawa Flat Belly Tonic',
    imgUrl: 'assets/img/okinawa.png',
    navUrl: '/okinawa-tonic',
    affiliateUrl: 'https://f7bb7gwb662aonn6pe3kxa7wa3.hop.clickbank.net/'
  }
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Globals product deals avalabel', products: products });
});

/* GET Health & Fitness page. */
router.get('/products', function (req, res, next) {
  res.render('products', { title: 'Products', productAll: productAll });
});

// Tea Burn Pages
router.get('/promo1', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo2', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo3', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo4', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo5', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo6', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo7', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo8', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo9', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo10', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo11', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo12', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo13', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo14', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo15', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo16', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo17', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo18', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo19', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo20', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo21', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo22', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo23', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo24', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/promo25', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/offer1', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/offer2', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/offer3', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/offer4', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/offer5', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/offer6', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/offer7', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/offer8', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/offer9', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/offer10', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;
