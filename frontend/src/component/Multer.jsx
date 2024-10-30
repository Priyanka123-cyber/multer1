import React, { useState } from 'react'
import axios from 'axios'

 
const Multer = () => {
    const [file,SetFile]=useState();
    //This defines a functional component named Multer.
    //A state variable file is created with an initial value of undefined.
    // The SetFile function will be used to update the file value.

    const upload=()=>{
        // function that handles the file upload process.
        const formdata= new FormData();
        //creates a FormData object, which is used to send files and other data as form-encoded multipart data.
        formdata.append('file',file)
        //adds the selected file to the FormData object with the key 'file'.
        axios.post('http://localhost:3001/upload',formdata)
        // sends a POST request to the specified server endpoint (http://localhost:3001/upload) with the formdata containing the file.
        //path server sends the request for upload
        .then(res => {alert("Upload Successful");})
        .catch(error=>{console.log(error);
          alert("upload failed");
        });
    }

  return (
    <div>
       <input type='file' onChange={(e)=>SetFile(e.target.files[0])}/>
       <button type="button" onClick={upload}>Upload</button>

    </div>
  )
}

export default Multer