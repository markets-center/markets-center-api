import { Router } from "express";
const { filterBySellerAndCategories, filterByStatus } = require('../controllers/filters/filters.controllers')
const { all, product, createReview } = require('../controllers/products/product.controllers');
const { allCategories } = require('../controllers/categories/categories.controllers');
const {auth} = require('../middlewares/auth')

const router = Router();

/* Products */
router.get('/products', all);
router.get('/product/:id', product);


/* Categories */
router.get('/categories', allCategories);

/* Filters */
router.get('/filter', filterBySellerAndCategories);
router.get('/filter/status', filterByStatus)

/* Reviews */
router.post('/product/:id/review/add', auth, createReview)
/* router.get('/reviews', allReviews);
router.put('/review/update/:id', updateReview);
router.delete('/review/delete/:id', deleteReview); */

module.exports = router;