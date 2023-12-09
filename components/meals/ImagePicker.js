'use client';

import { useRef } from 'react';
import classes from './ImagePicker.module.css';

function ImagePicker({label, name}) {
    const imageInput = useRef();

    function handleClick(){
        imageInput.current.click();
    }
    
    return (
        <div className={classes.picker}>
            <label htmlForm={name}>{label}</label>
            <div className={classes.controls}>
                <input ref={imageInput} className={classes.input} type='file' id={name} accept='image/png, image/jpeg' name={name}/>
                <button className={classes.button} type='button' onClick={handleClick}>Pick an image</button>
            </div>
        </div>
    )
}

export default ImagePicker
