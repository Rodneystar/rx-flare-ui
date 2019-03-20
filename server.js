import express from 'express';

const app = express();
const port = 3000

app.use(express.static(__dirname + '/../dist/'))
app.listen(port, () => {
    console.log(`serving: ${__dirname + '/../dist/'}`)
    console.info(`Example app listening on ${port}`)
})