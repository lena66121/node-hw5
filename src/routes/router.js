const express = require('express');
const routers = express.Router();

const productsRoute = require('./products/productsRoutes');
const notFoundRoute = require('./notFound/404');
const usersRoute = require('./users/users');
const findProductById = require('./products/productById');
const products = require('./products/products');
const findUserById = require('./users/userById');
const ordersRoute = require('./orders/orders');
const orderById = require('./orders/orderById');
const registerUser = require('./auth/register');
const loginUser = require('./auth/login');
const logoutUser = require('./auth/logout');
const createIngredient = require('./ingredients/ingredients');
const getComment = require('./comments/getComments');
const createComment = require('./comments/createComment');
const getCurrentUser = require('./auth/current')

const authMiddleware = require('../middleware/auth')

routers
.get('/products/:id', authMiddleware, findProductById) 
.put('/products/:id', authMiddleware, findProductById) 
.get('/products/*', authMiddleware, productsRoute)
.get('/products', authMiddleware, products)

.post('/ingredients', authMiddleware, createIngredient)


.post('/auth/register', registerUser)
.post('/auth/login', loginUser)
.get('/auth/logout', authMiddleware, logoutUser)
.get('/auth/current', authMiddleware, getCurrentUser)

.post('/orders', authMiddleware, ordersRoute)
.get('/orders/:id', authMiddleware, orderById)

.put('/user/:id', authMiddleware, findUserById)
//.post('/users', usersRoute)
.get('/users/:id', findUserById)

.get('/comments/*', authMiddleware, getComment)
.post('/comments', authMiddleware, createComment)

.get('*', notFoundRoute)


module.exports = routers;
