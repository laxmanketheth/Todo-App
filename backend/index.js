
const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ToDo = require('./models/Task');

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB connection successful'))
    .catch((err) => console.log(err))

app.listen(8080, () => {
    console.log("listening to port 8080");
});


app.get('/', async (req, res) => {
    try {
        const allTodos = await ToDo.find()
        // console.log(allTodos);
        res.json(allTodos)
    }
    catch (err) {
        console.log(err);
    }
});

app.post('/addtodo', async (req, res) => {
    const newToDo = new ToDo({
        task: req.body.task
    })
    try {
        const savedTodo = await newToDo.save()
        res.json(savedTodo)
        // console.log(savedTodo)
    }
    catch (err) {
        console.log(err);
    }
});


app.delete('/todo/:id', async (req, res) => {
    const deleteTodo = req.params.id
    // console.log(req.params.id);

    try {
        await ToDo.findByIdAndDelete(deleteTodo)
        res.json('todo has been deleted')
    }
    catch (err) {
        console.log(err);
    }
});


app.delete('/deleteAlltodos', async(req, res)=>{
   try{
    const result = await ToDo.deleteMany({});
    // console.log('Deleted', result.deletedCount, 'documents');
    res.json('All todos have been deleted');
   } 
   catch(err) {
    console.log('an error occured');
   }
});
