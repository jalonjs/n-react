import express from 'express'
import path from 'path'

let app = express();
app.use(express.static(path.join(__dirname, '../client')));
console.log(process.env.NODE_ENV);

app.use((req, res) => {
    console.log('server');
});

app.listen(9000, function () {
    console.log('listening 9000');
});
