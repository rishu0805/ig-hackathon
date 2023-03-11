import React,{useState} from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');
    console.log(value)
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
        <h1>Publish</h1>
        <span>
            <b>Status:</b>Draft
        </span>
        <span>
            <b>Visibilty:</b>Public
        </span>
        <input style={{display:"none"}} type="file" name="" id="file"/>
        <label className="file" htmlFor="file">Upload Image</label>
        <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
        </div>
        </div>
        <div className="item">
            <h1>Category</h1>
            <div className="cat">
                <input type="radio" name="cat" value="Indian" id="indian"/>
                <label htmlFor="indian">Indian</label>
            </div>
            <div className="cat">
                <input type="radio" name="cat" value="Foreign Counteries" id="fc"/>
                <label htmlFor="fc">Foreign Counteries</label>
            </div>
            
            
        </div>
        
        
      </div>
    </div>
  )
}

export default Write
