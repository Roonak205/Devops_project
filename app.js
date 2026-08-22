const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello! My Node.js DevOps application is running properly, Hurry!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "Best Performing than before"
    });

   
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});