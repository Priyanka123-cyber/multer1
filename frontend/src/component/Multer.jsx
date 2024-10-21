import React, { useState } from 'react'
import axios from 'axios'


const Multer = () => {
    const [file,SetFile]=useState();

    const upload=()=>{

        const formdata= new FormData();
        formdata.append('file',file)
        axios.post('http://localhost:3001/upload',formdata)
        .then(res=>{})
        .catch(error=>{console.log(error)})
    }

  return (
    <div>
       <input type='file' onChange={(e)=>SetFile(e.target.files[0])}/>
       <button type="button" onClick={upload}>Upload</button>

    </div>
  )
}

export default Multer