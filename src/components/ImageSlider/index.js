import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from './images/_opt/001.jpg'
import Image2 from './images/_opt/002.jpg'
import Image3 from './images/_opt/003.jpg'
import Image4 from './images/_opt/004.jpg'
import Image5 from './images/_opt/005.jpg'
import Image6 from './images/_opt/006.jpg'
import Image7 from './images/_opt/007.jpg'
import Image8 from './images/_opt/008.jpg'
import Image9 from './images/_opt/009.jpg'
import Image10 from './images/_opt/010.jpg'
import Image12 from './images/_opt/011.jpg'
import Image13 from './images/_opt/012.jpg'
import Image14 from './images/_opt/013.jpg'
import Image15 from './images/_opt/014.jpg'
import Image16 from './images/_opt/015.jpg'
import Image17 from './images/_opt/016.jpg'
import Image18 from './images/_opt/017.jpg'
import Image19 from './images/_opt/018.jpg'
import Image20 from './images/_opt/019.jpg'
import Image21 from './images/_opt/020.jpg'
import Image22 from './images/_opt/021.jpg'
import Image23 from './images/_opt/022.jpg'
import Image24 from './images/_opt/023.jpg'
import Image25 from './images/_opt/024.jpg'
import Image26 from './images/_opt/025.jpg'
import Image27 from './images/_opt/026.jpg'
import Image28 from './images/_opt/027.jpg'
import Image29 from './images/_opt/028.jpg'
import Image30 from './images/_opt/029.jpg'
import Image31 from './images/_opt/030.jpg'
import Image32 from './images/_opt/031.jpg'
import Image33 from './images/_opt/032.jpg'
import Image35 from './images/_opt/034.jpg'
import Image36 from './images/_opt/035.jpg'
import Image37 from './images/_opt/036.jpg'
import Image38 from './images/_opt/037.jpg'
import Image39 from './images/_opt/038.jpg'
import Image40 from './images/_opt/039.jpg'
import Image41 from './images/_opt/040.jpg'
import Image42 from './images/_opt/041.jpg'
import Image43 from './images/_opt/042.jpg'
import Image44 from './images/_opt/043.jpg'
import Image45 from './images/_opt/044.jpg'
import Image46 from './images/_opt/045.jpg'
import Image47 from './images/_opt/046.jpg'
import Image48 from './images/_opt/047.jpg'
import Image49 from './images/_opt/048.jpg'
import Image50 from './images/_opt/049.jpg'
import Image51 from './images/_opt/050.jpg'
import Image52 from './images/_opt/051.jpg'
import Image53 from './images/_opt/052.jpg'
import Image54 from './images/_opt/053.jpg'




const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
  Image26,
  Image27,
  Image28,
  Image29,
  Image30,
  Image31,
  Image32,
  Image33,
  Image35,
  Image36,
  Image37,
  Image38,
  Image39,
  Image40,
  Image41,
  Image42,
  Image43,
  Image44,
  Image45,
  Image46,
  Image47,
  Image48,
  Image49,
  Image50,
  Image51,
  Image52,
  Image53,
  Image54
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