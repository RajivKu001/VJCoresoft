import express from "express";
import bodyParser from "body-parser"
import cors from "cors";
import userRoutes from "./routes/tasks.js";

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors())

app.use('/', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('*', (req, res) => {
  res.send("That route doesn't exist")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})