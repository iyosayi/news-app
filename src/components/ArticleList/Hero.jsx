import { useState, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

import FastAverageColor from "fast-average-color";
import { Link } from "react-router-dom";

const Hero = ({ article, hash }) => {
  const { urlToImage, title, sourceName, publishedAt } = article;
  const heroHandle = useRef();
  const [liked, setLiked] = useState(null);
  const [count, setCount] = useState(235);

  const [heroGradient, setHeroGradient] = useState("");
  const fac = new FastAverageColor();

  fac
    .getColorAsync(urlToImage, {
      ignoredColor: [255, 255, 255, 255],
    })
    .then((color) => {
      setHeroGradient(color.hex);
    })
    .catch((err) => {
      // fallback
      setHeroGradient("#1a014e");
    });

  return (
    <div
      className="flex w-full h-60 rounded-lg text-white relative"
      style={{
        backgroundImage: `url(${urlToImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        ref={heroHandle}
        style={{ color: heroGradient }}
        className={`bg-gradient-to-t from-current h-[50%] opacity-70 absolute rounded-lg w-full bottom-0`}
      />

      <div className="w-full mt-auto z-10 p-4">
        <Link to={`/${hash}`}>
          <div className="flex items-center justify-between">
            <p className="space-x-2">
              <span>{sourceName}</span>
              <span>2h 🔥</span>
            </p>
            {/* <BsThreeDots className="text-2xl" /> */}
          </div>
        </Link>

        <p className="line-clamp-2 mb-4">{title}</p>

        <div className="flex justify-between">
          <Link to={`/${hash}`}>
            <div className="flex space-x-2">
              <div className="flex items-center bg-[#302c44] bg-opacity-60 px-2 rounded-xl">
                <p>Finance</p>
              </div>
              <div className="flex items-center bg-[#302c44] bg-opacity-60 px-2 rounded-xl">
                <p>Technology</p>
              </div>
            </div>
          </Link>
          <div className="flex text-white items-center py-1 z-10">
            <FiHeart
              role="button"
              className={`mr-1 text-base xs:text-2xl z-50 ${
                liked === true
                  ? "animate-like fill-current"
                  : liked === false
                  ? "animate-unlike"
                  : ""
              }`}
              onClick={() => {
                setLiked(!liked);
                if (!liked) {
                  setCount(count + 1);
                } else {
                  setCount(count - 1);
                }
              }}
            />
            <span className="text-base">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
