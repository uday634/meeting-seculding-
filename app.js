const bodyParser = require("body-parser");
const express = require("express");
const Sequelize = require("sequelize");
const cors = require("cors");
const dataController = require("./controllers/meetdata");
const sequelize = require("./models/sqldata");
const MeetingData = require("./models/sqldata");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/data',dataController.sendData)

app.post("/api", dataController.addData);

app.delete('/data/:id', dataController.deleteData);


sequelize
  .sync()
  .then((result) => {
    app.listen(port, () => {
      console.log(`app is running at port ${port}`);
    });
  })
  .catch((err) => console.log(err));
