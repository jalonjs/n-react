import express from 'express'
import path from 'path'

let app = express();
app.use(express.static(path.join(__dirname, '../client')));

// api
app.get('/api/name', (req, res) => {
    console.log('/api/name')
    res.json({
        name: 'Jalon'
    });
})

app.listen(9000, function () {
    console.log('listening 9000');
});
