const express = require('express');
const jwt = require('jsonwebtoken');
const app = express()

app.use(express.json())

require('dotenv').config();




app.get("/", (req, res) => {

    res.send("Hoi i am Form server");

})


app.post('/auth', async (req, res) => {


    var { username, password } = req.body;

    console.log("req.body", req.body);

    if (typeof username !== "undefined" && username !== "" && typeof username !== null) { var username = username } else { return res.status(200).json({ status: 0, mesage: "userName Required" }) }

    if (typeof password !== "undefined" && password !== "" && typeof password !== null) { var password = password } else { return res.status(200).json({ status: 0, mesage: "Password Required" }) }


    if (username !== "test@gmail.com" && password !== "test") {

        return res.status(200).json({ status: 0, message: "Invalid UserName And Password" });

    } else if (username == "test@gmail.com" && password !== "test") {

        return res.status(200).json({ status: 0, message: "Invalid Password" });

    } else if (username !== "test@gmail.com" && password == "test") {

        return res.status(200).json({ status: 0, message: "Invalid UserName" });

    } else if (username == "test@gmail.com" && password == "test") {


        const token = jwt.sign({ id: 1, name: "Star", username: username }, process.env.SECRET, { expiresIn: '1m' });

        console.log("token", token)

        return res.status(200).json({ status: 1, message: "Valid Credentials Is Success" });

    }

})

const port = process.env.PORT || 4000


app.listen(port, () => {

    console.log(`Sever Running in the port http://localhost:${port}`);

})
