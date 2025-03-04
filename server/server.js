/* const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });


let count = 0;

document.getElementById("increaseButton").onclick = function() {
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
}
  */

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "public"))); // Serves static files
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
