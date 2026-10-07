import express from "express"

const app = express ();

app.get("/carros", (req,res)=>{
    res.send("servidor de carro funcionando");
})

app.listen(3001, ()=>{console.log("servidor rodando")});

app.get("/carros/mercedes", (req,res)=>{
    res.send("servidor da mercedes");
});