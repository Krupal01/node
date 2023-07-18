const express = require('express');
const multer = require('multer');
const app = express();
const data = require("./data");
// const endPoint = require('./data');
const port = 3000;


const upload = multer({ dest: 'uploads/' });

app.use(express.json());

app.post(data.endPoint, (req, res) => {

  const body = JSON.stringify(req.body);
  const token = req.headers['token'];
  const userId = req.headers['user_id'];

  try{
    if (
      body == JSON.stringify(data.data_module.body)
    && (data.checkHeader ? (token == "impl" && userId == "impl") : true)
    ) {
      return res.json( data.data_module.data);
    }
  
    return res.json(data.data_module.errormsg);
  }catch (error) {
    return res.status(400).json({ error: 'Invalid JSON format' });
  }
})


app.post('/upload_file', upload.single('file'), (req, res) => {

  const body = JSON.stringify(req.body);
  const token = req.headers['token'];
  const userId = req.headers['user_id'];

  try {
    if (
      body == JSON.stringify(data.data_module.body) &&
      (data.checkHeader ? (token === "impl" && userId === "impl") : true) &&
      req.file
    ) {
      return res.status(200).json({"success": true, "message": 20005 ,"user": "sadasd"});
    }
    return res.status(400).json({ "success": false, "message": 20007 ,"user": null });
  } catch (error) {
    return res.status(400).json({ "success": false, "message": 20006 ,"user": null });
  }
});
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

