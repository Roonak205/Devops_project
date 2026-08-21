const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello! My Node.js DevOps application is running 🚀");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
app.get("/check", (req, res) => {
    res.json({
        status: "down"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});