const express = require('express');
const jwt = require('jsonwebtoken');
const app = express()
const cors = require('cors')
app.use(express.json())

require('dotenv').config();

app.use(cors({
    origin: true
}))



app.get("/", (req, res) => {

    res.send("Hoi i am Form server");

})


app.post('/auth', async (req, res) => {


    var { email, password } = req.body;

    console.log("req.body", req.body);

    if (typeof email !== "undefined" && email !== "" && typeof email !== null) { var email = email } else { return res.status(200).json({ status: 0, mesage: "Email Required" }) }

    if (typeof password !== "undefined" && password !== "" && typeof password !== null) { var password = password } else { return res.status(200).json({ status: 0, mesage: "Password Required" }) }


    if (email !== "test@gmail.com" && password !== "test") {

        return res.status(200).json({ status: 0, message: "Invalid Email And Password" });

    } else if (email == "test@gmail.com" && password !== "test") {

        return res.status(200).json({ status: 0, message: "Invalid Password" });

    } else if (email !== "test@gmail.com" && password == "test") {

        return res.status(200).json({ status: 0, message: "Invalid Email" });

    } else if (email == "test@gmail.com" && password == "test") {


        const token = jwt.sign({ id: 1, name: "User", email: email }, process.env.SECRET, { expiresIn: '1m' });

        // console.log("token", token)

        return res.status(200).json(
            {
                status: 1,
                message: "Login Succesfully",
                data: {
                    name: "User",
                    token
                }
            });

    }

})

const port = process.env.PORT || 4000


app.listen(port, () => {

    console.log(`Sever Running in the port http://localhost:${port}`);

})
