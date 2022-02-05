const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/', async (req, res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    } catch(err) {
        res.json({message: err})
    }
});

router.post('/', async (req, res) => {
    const todo = new Todo({
        todo: req.body.todo,
        description: req.body.description
    });
    try{
        const savedTodo = await todo.save();
        res.json(savedTodo);
    } catch(err) {
        res.json({message: err});
    }
});

router.get('/:id', async (req, res) => {
    try{
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    } catch (e) {
        res.json({message: e})
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const deletedTodo = await Todo.findByIdAndRemove({_id: req.params.id});
        res.json(deletedTodo);
    } catch (e) {
        res.json({message: e})
    }
})

router.patch('/:id', async (req, res) => {
    try{
        const updatedTodo = await Todo.updateOne(
            {_id: req.params.id},
            {$set: {todo: req.body.todo,
                    description: req.body.description
            }});
        res.json(updatedTodo);
    } catch (e) {
        res.json({message: e})
    }
})

module.exports = router;