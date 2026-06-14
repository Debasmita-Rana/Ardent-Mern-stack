const express = require('express');
const router = express.Router();

const Course = require('../models/course');

//add data
router.post('/', async (req, res) => {
    const course = await Course.create(req.body);
    res.json(course);
});

//view all
router.get('/', async (req, res) => {
    const course = await Course.find();
    res.json(course);
});
//singel view
router.get('/:id', async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.json(course);
});
//UPDATE
router.put('/:id', async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(course);
});
//delete
router.delete('/:id', async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.json({message:"course deleted successfully"});
});

module.exports = router