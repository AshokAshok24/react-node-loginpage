const express = require('express')
const app = express()

app.use(express.json())

require('dotenv').config;




app.get("/", (req, res) => {

    res.send("Hoi i am Form server");

})


app.post('/auth', async (req, res) => {


    var { username, password } = req.body;

    console.log("req.body", req.body);

    if (typeof username !== "undefined" && username !== "" && typeof username !== null) { var userName = username } else { return res.status(200).json({ status: 0, mesage: "userName Required" }) }

    if (typeof password !== "undefined" && password !== "" && typeof password !== null) { var password = password } else { return res.status(200).json({ status: 0, mesage: "Password Required" }) }




})

const port = process.env.PORT || 4000


app.listen(port, () => {

    console.log(`Sever Running in the port http://localhost:${port}`);

})
