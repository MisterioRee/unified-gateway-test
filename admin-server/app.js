const express = require("express"); 
const app = express();

const rqeuestsRoutes = require('./api/routes/constructionRequests');

app.use(express.json());

const mongoose = require("mongoose");
mongoose
  .connect(`mongodb+srv://admin:Rehan_123@node-ecom-cluster.jmrtf.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

//CORS 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authrization');
  if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Header', 'PUT, GET, POST, PATCH, DELETE');
      return res.status(200).json({});
  }
  next();
});
 
//Routs
app.use('/requests', rqeuestsRoutes);

module.exports = app;