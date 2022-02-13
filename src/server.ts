import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.json({dmesg: "Server running in docker"})
})

app.listen(3333, () => console.log("server running port 3333"));