import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.json({dmesg: "Server running in docker"})
})

app.post("/", (request, response) => {
    const { name } = request.body;
    return response.json({name, pas: "senha" })
})

app.listen(3333, () => console.log("server running port 3333"));