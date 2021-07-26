const express = require('express');
const UserSchema = require('../model/user');


const router = express.Router();

router.get('/get', async (req, res) => {
    console.log('This is dashboard');
    const getAll = await UserSchema.find();
    res.json({getAll})
})

module.exports = router;


