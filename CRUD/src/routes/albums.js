
const express= require('express');
const router = express.Router();

const albumsController = require('../controllers/albumsControler');

router.get('/', albumsController.list);

router.post('/add', albumsController.save);


module.exports= router;
