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
// import machine3 from "../../image/20.jpeg";
import Link from "next/link";

const CarouselImg = () => {
  return (
    <>
      <div className="carousel w-full h-[70vh] z-40">
        <div id="slide1" className="carousel-item relative w-full">
          <Image src={image1} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide14" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image src={image2} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide1" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide3" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image src={image3} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide2" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide4" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image src={image4} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide3" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide6" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <Image src={image5} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide4" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide6" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <Image src={image6} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide4" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide7" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
          <Image src={image7} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide6" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide8" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide8" className="carousel-item relative w-full">
          <Image src={image8} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide6" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide9" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide9" className="carousel-item relative w-full">
          <Image src={image9} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide8" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide10" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide10" className="carousel-item relative w-full">
          <Image src={image10} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide9" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide11" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide11" className="carousel-item relative w-full">
          <Image src={image11} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide10" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide12" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide12" className="carousel-item relative w-full">
          <Image src={image12} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide11" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide13" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide13" className="carousel-item relative w-full">
          <Image src={machine1} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide12" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide14" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide14" className="carousel-item relative w-full">
          <Image src={machine2} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide13" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide14" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        {/* <div id="slide15" className="carousel-item relative w-full">
          <Image src={machine3} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide14" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide1" className="btn btn-circle">
              ❯
            </Link>
          </div> {/* <div id="slide15" className="carousel-item relative w-full">
          <Image src={machine3} alt="1" className="w-full  bg-black/70" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide14" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide1" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        </div> */}
      </div>
    </>
  );
};

export default CarouselImg;
