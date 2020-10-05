const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PROT || 5000;
app.listen(PORT, () => console.log(`Server is listing to PORT : ${PORT}`));
