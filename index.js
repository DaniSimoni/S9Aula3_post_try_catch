const express = require('express');
const connection = require('./src/database');
const Task = require('./src/models/task');


const app = express();
app.listen(3333, () => console.log("Aplicação Online Lindamente ^^ S2"));


app.get('/', (req, res) => {
    console.log("Cheguei aqui!")
    res.json({mensagem: "Vem chegando!"})
});

app.use(express.json());

/* const tarefas = []; */

connection.authenticate()
connection.sync()
console.log('Okkkkkkkkkkkkkkk')



app.post('/tarefas', async (req, res) => {

    try {
    const tarefa = {
        name: req.body.name,
        description: req.body.description
    }

    if (!tarefa.name) {
        return res.status(401).json({message: 'Nome é Obrigatório'});
    } 

    if (!tarefa.description) {
        return res.status(401).json({message: 'Descrição é Obrigatório'});
    } 

    const newTask = await Task.create(tarefa)

    res.status(201).json(newTask); 

    } catch (error) {
        res.status(500).json({message: "Não foi possível processar sua solicitação"})
        console.log('Errou')
    }
    

   
});


app.get('/tarefas', async (req, res) => {
    try {
           const tasks = await Task.findAll()
           res.json(tasks)
    } catch (error) {
        res.status(500).json({message: "Não foi possível processar sua solicitação"})
    }

});





