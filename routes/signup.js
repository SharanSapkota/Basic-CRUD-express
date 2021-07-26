const express = require('express');
const UserSchema = require('../model/user');

const router = express.Router();
router.post('/post', () => {
    console.log('this is post');
})

router.patch('/patch', ()=> {
    console.log('this is patch');
})

router.get('/get', async (req, res) => {
  const getAllUsers = await UserSchema.find();
  res.status(200).json({getAllUsers});
})

module.exports = router;


