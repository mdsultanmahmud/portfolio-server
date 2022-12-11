const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const projects = require('./data/projects.json')
// middleware 
app.use(cors())

// import data 
// const project = './data/projects.json'
// console.log(projects)
app.get('/', (req,res) =>{
    res.send('server is running')
})

app.listen(port, () =>{
    console.log(`Server is running from port: ${port}`)
})

app.get('/projects', (req, res) =>{
    res.send(projects)
})

app.get('/projects/:id', (req, res) =>{
    const id = req.params.id
    console.log(id)
    const project = projects.find(pro => pro.id == id)
    console.log(project)
    res.send(project)
})