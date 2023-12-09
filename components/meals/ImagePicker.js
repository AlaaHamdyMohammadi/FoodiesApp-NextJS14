"use client";

import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handleClick() {
    imageInput.current.click();
  }

  function handleChange(e) {
    const file = e.target.files[0];

    if(!file) {
        setPickedImage(null);
        return
    };

    const fileRead = new FileReader();

    fileRead.onload = () => {
        setPickedImage(fileRead.result);
    }

    fileRead.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlForm={name}>{label}</label>
      <div className={classes.controls}>
      <div className={classes.preview}>
        {!pickedImage && <p>No image picked yet.</p>}
        {pickedImage && <Image src={pickedImage} alt="The image selected by user" fill/>}
      </div>
        <input
        className={classes.input}
        type="file"
        id={name}
        accept="image/png, image/jpeg"
        name={name}
        required
        ref={imageInput}
        onChange={handleChange}
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
