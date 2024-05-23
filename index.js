const express = require('express');
const app = express();
// console.dir  are used for print expess directories 
// console.dir(app);

const port = 8080;

app.listen(port, () => {
    console.log(`app are listening on port ${port}`);
})

// app.use((req, res) => {
//     console.log(`request recived`);
//     //forward the responce
//     res.send(`You are geting the response form the server side !`);
// })

/* app.get() Methood are  used for forward different-different responce for different-
different search */

app.get("/", (req, res) => {
    res.send(`You are connected to root path home1`);
})

app.get("/:username", (req, res) => {
    // req.params are used for print request parameter.
    console.log(req.params);
    res.send(`right now you are avalable in username path`);
})

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send(`result not avalable now!`);
})

// app.get("/fruits", (req, res) => {
//     res.send(`You are connected to root path fruits2`);
// })

// app.get("/sports", (req, res) => {
//     res.send(`You are connected to root path3 sports`);
// })

// app.get("*", (req, res) => {
//     res.send(`This page does not exist`);
// })
