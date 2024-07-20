const express = require("express");
const cors = require("cors");
const randomChar = require("anime-character-random");
const app = express();
const port = 3000;

// Sử dụng middleware CORS
app.use(cors());

app.get("/character", async (req, res) => {
  const character = await randomChar.GetChar();
  res.json(character);
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
