const express = require("express")

const app = express();                        //express ejectuado en app.(nuestro server)

//establecer rutas

app.get("/", (req, res) => {                  //request handler
    res.send({
        name: "Rober",
        edad: 22,
        })                                    //send no está deprecado como end
})

app.get("/usuarios", (req, res) => {          //request handler
    res.send("Estos son usuarios!!")
})

app.listen(3000, () => {    
    //levantando els erver
    console.log("Server on http://localhost:3000")
})















