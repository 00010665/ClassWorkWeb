const epxress = require('express')
const app = epxress()

app.set('view engine', 'pug')

app.use('/static', epxress.static('public')) // or assets

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(8000)