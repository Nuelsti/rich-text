import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function MyComponent() {
  const [value, setValue] = useState('');
  var toolBarOptions = [
    // ['bold', 'italic'], [{ 'list': 'ordered'}, { 'list': 'bullet' }]
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // supers
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // out
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']        
  ];

  const modules = {toolbar: toolBarOptions};

  return <ReactQuill 
            module= {modules}
            theme="snow" 
            value={value} 
            onChange={setValue}             
        />;
}

export default MyComponent;