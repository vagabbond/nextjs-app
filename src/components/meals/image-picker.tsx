"use client";
import React, { FC, useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

interface IProps {
 lable: string;
 name: string;
}

const ImagePicker: FC<IProps> = ({ lable, name }) => {
 const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>();
 const ref = useRef<HTMLInputElement>(null);
 const handlePickImage = () => {
  if (ref.current) {
   ref.current.click();
  }
 };

 const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  console.log(files);
  if (files && files.length > 0) {
   const file = files[0];
   const reader = new FileReader();
   reader.onload = () => {
    if (reader.result) {
     setPickedImage(reader.result);
    }
   };
   reader.readAsDataURL(file);
  }
 };

 return (
  <div className={classes.picker}>
   <label htmlFor={name}>{lable}</label>
   <div className={classes.controls}>
    <div className={classes.preview}>
     {!pickedImage ? (
      <p>No image picked yet.</p>
     ) : (
      <Image src={pickedImage as string} alt="Picked" fill />
     )}
    </div>
    <input
     className={classes.input}
     type="file"
     accept="image/png image/jpeg"
     id={name}
     name={name}
     ref={ref}
     required
     onChange={handleImageChange}
    />
    <button className={classes.button} type="button" onClick={handlePickImage}>
     Pick an image
    </button>
   </div>
  </div>
 );
};

export default ImagePicker;
