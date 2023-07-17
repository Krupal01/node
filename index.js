const express = require('express');
const app = express();
const data = require("./data");
// const endPoint = require('./data');
const port = 3000;


app.use(express.json());
app.post(data.endPoint, (req, res) => {

  const body = JSON.stringify(req.body);
  const token = req.headers['token'];
  const userId = req.headers['user_id'];

  try{
    if (
      body == JSON.stringify(data.data_module.body)
    && token == "impl" && userId == "impl"
    ) {
      return res.json( data.data_module.data);
    }
  
    return res.json(data.data_module.errormsg);
  }catch (error) {
    return res.status(400).json({ error: 'Invalid JSON format' });
  }

})
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


