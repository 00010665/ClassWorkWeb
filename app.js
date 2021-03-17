const epxress = require('express')
const app = epxress()

app.set('view engine', 'pug')

app.use('/static', epxress.static('public')) // or assets

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.get('/notes', (req, res) => {
    res.render('notes', {noteList: ['First', 'Second']})
})

app.get('/notes/detail', (req, res) => {
    res.render('detail')
})

app.listen(8000, err => {
    if (err) console.log(err)
    console.log("App is running on port 8000 ...")
})