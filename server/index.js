const express = require ('express')
const app = express();
app.use(express.json())

const port = 4200

app.listen(port, () => {
    console.log(`running on port ${port}`)
})