const express=require ('express')
const app =express()
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/home', function (req, res) {
    res.send('Estas en home.')})
app.get('/about', function ( req, res) {
            res.send('Estas en about.')
        } )
app.listen(3000, () => console.log('Example app listening on port 3000!'))
