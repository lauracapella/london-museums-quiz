import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from './images/_opt/001.jpg'
import Image4 from './images/_opt/004.jpg'
import Image5 from './images/_opt/005.jpg'
import Image6 from './images/_opt/006.jpg'
import Image8 from './images/_opt/008.jpg'
import Image10 from './images/_opt/010.jpg'
import Image11 from './images/_opt/011.jpg'
import Image13 from './images/_opt/013.jpg'
import Image14 from './images/_opt/014.jpg'
import Image15 from './images/_opt/015.jpg'
import Image16 from './images/_opt/016.jpg'
import Image17 from './images/_opt/017.jpg'
import Image19 from './images/_opt/019.jpg'
import Image21 from './images/_opt/021.jpg'
import Image23 from './images/_opt/023.jpg'
import Image26 from './images/_opt/026.jpg'
import Image37 from './images/_opt/037.jpg'
import Image38 from './images/_opt/038.jpg'
import Image39 from './images/_opt/039.jpg'
import Image40 from './images/_opt/040.jpg'
import Image43 from './images/_opt/043.jpg'
import Image44 from './images/_opt/044.jpg'
import Image45 from './images/_opt/045.jpg'
import Image48 from './images/_opt/048.jpg'
import Image49 from './images/_opt/049.jpg'
import Image51 from './images/_opt/051.jpg'
import Image53 from './images/_opt/053.jpg'




const images = [
  Image1,
  Image4,
  Image5,
  Image6,
  Image8,
  Image10,
  Image11,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image19,
  Image21,
  Image23,
  Image26,
  Image37,
  Image38,
  Image39,
  Image40,
  Image43,
  Image44,
  Image45,
  Image48,
  Image49,
  Image51,
  Image53,
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <div className="slider--contenedor">
        <div className="slider--inner">
            <AnimatePresence>
                <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="museum images"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                //exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="slider-img"
                />
            </AnimatePresence>
        </div>
    </div>
  );
};

export default ImageSlider;