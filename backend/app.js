const express=require('express');
const cors=require('cors');
const multer=require('multer')
const path = require('path');

const app= new express();
app.use(cors());
app.use(express.json());


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/Images'); // Specify folder
    },
    filename: function (req, file, cb) {
      cb(null, `${file.originalname}_${Date.now()+path.extname(file.originalname)}`); // Keep original name with timestamp
    }
  });
  const upload = multer({ storage: storage });
  

//const upload=multer({dest:'public/Images'});//now we have the above function which defines where the destination is. else give the path directly where storage is given



app.post('/upload',upload.single('file'),(req,res)=>{
    //upload.single is a multer middleware which happens which uploads the file to the path
    console.log(req.body);
    console.log(req.file);

})

app.listen(3001,()=>{
    console.log(`Server is listening at port 3001`);
})