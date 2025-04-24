import React from "react";
import Image from "next/image";
import image1 from "../../image/1.jpeg";
import image2 from "../../image/2.jpeg";
import image3 from "../../image/3.jpeg";
import image4 from "../../image/4.jpeg";
import image5 from "../../image/5.jpeg";
import image6 from "../../image/6.jpeg";
import image7 from "../../image/7.jpeg";
import image8 from "../../image/8.jpeg";
import image9 from "../../image/9.jpeg";
import image10 from "../../image/10.jpeg";
import image11 from "../../image/11.jpeg";
import image12 from "../../image/12.jpeg";
import machine1 from "../../image/20.jpeg";
import machine2 from "../../image/21.jpeg";
import Link from "next/link";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  machine1,
  machine2,
];

const CarouselImg = () => {
  return (
    <>
      <div className="carousel w-full h-[70vh] z-40 overflow-hidden ">
        {images.map((img, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[70vh]"
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <Link
                href={`#slide${index === 0 ? images.length : index}`}
                className="btn btn-circle"
              >
                ❮
              </Link>
              <Link
                href={`#slide${index + 2 > images.length ? 1 : index + 2}`}
                className="btn btn-circle"
              >
                ❯
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarouselImg;
