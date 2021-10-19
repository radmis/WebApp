const expr=require("express");
const app=expr();

app.use((req, res) => {
    console.log("We got a new request")
    res.send("<h1>HELLO WORLD!</h1>")
})

app.listen(8080,()=> {
    console.log("Listening on Port 8080")
})