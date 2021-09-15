
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8888;

const getUserToken = require("./getUserToken");

const server = express();

server.use(express.json());
server.use(cors());

server.post("/", getUserToken);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));