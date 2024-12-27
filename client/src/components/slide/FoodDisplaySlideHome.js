import noodleSoup from "../../assets/img/food/Coconut_noddle_soup.webp";
import tea from "../../assets/img/food/Tea.png";
import friedRice from "../../assets/img/food/fried_rice.webp";
import paratha from "../../assets/img/food/paratha.webp";

import { useEffect, useRef, useState } from "react";
import "./slide.css";

export default function FoodDisplaySlideHome() {
  const slideData = {
    photo: [noodleSoup, tea, friedRice, paratha],
  };

  const [slideCount, setSlideCount] = useState(0);
  const [barDuration, setBarDuration] = useState(1);
  const imgRef = useRef(null);
  const durationBarRef = useRef(null);
  const photoLength = slideData.photo.length;

  useEffect(() => {
      imgRef.current.classList.add("food-slide");

      const timeout = setTimeout(() => {
        if(imgRef) {
          imgRef.current.classList.remove("food-slide");
        }
      }, 3900);

      return () => clearTimeout(timeout);
  }, [slideCount]);

  useEffect(() => {
    const durationInterval = setInterval(() => {
      setBarDuration((prev) => (prev >= 80 ? 1 : prev + 1));
    }, 50);

    return () => clearInterval(durationInterval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideCount((prev) => (prev >= photoLength - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [photoLength]);

  return (
    <div>
      <div className="flex overflow-hidden justify-center p-10">
        <img
          ref={imgRef}
          className="w-[14rem] h-[14rem] md:w-[22rem] md:h-[22rem] lg:w-[32rem] lg:h-[32rem] default-slide drop-shadow-lg"
          src={slideData.photo[slideCount]}
          alt="food_pic"
        />
      </div>
      <div className="flex justify-center py-3">
        <div
          style={{ width: 80 }}
          className="h-1 relative rounded-lg bg-slate-300"
        >
          <span
            style={{ width: barDuration }}
            ref={durationBarRef}
            className="absolute rounded-lg h-full bg-slate-600"
          ></span>
        </div>
      </div>
    </div>
  );
}
