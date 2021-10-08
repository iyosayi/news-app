import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewsCard = ({ article, hash }) => {
  const { publishedAt, sourceName, title, urlToImage } = article;
  const [liked, setLiked] = useState(null);
  const [count, setCount] = useState(0);

  if (!title || !urlToImage || !sourceName || !publishedAt) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="space-x-2 tracking-wide bm-2">
          <span className="font-bold xs:text-lg">{sourceName}</span>
          <span className="text-sm whitespace-nowrap">2h 🔥</span>
        </p>
        <div className="flex w-1/2 justify-end text-article-authors items-center py-1">
          <FiHeart
            role="button"
            className={`mr-1 text-base xs:text-2xl ${
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
          <span className="text-sm xs:text-base mr-4">{count}</span>
          <BsThreeDots className="text-3xl" />
        </div>
      </div>

      <Link role="button" to={`/${hash}`}>
        <div className="flex justify-between gap-2">
          <div className="text-sm xs:text-base max-w-[70%]">
            <h5 className="font-bold tracking-wide mb-2 line-clamp-2">
              {title}
            </h5>
            <div className="flex space-x-2 text-article-authors mb-2 overflow-hidden">
              <div className="bg-white bg-opacity-60 px-2 rounded-xl">
                <p>Finance</p>
              </div>
              <div className="bg-white bg-opacity-60 px-2 rounded-xl">
                <p>Technology</p>
              </div>
            </div>
            <p className="text-article-authors tracking-wide line-clamp-1">
              PTSK, FLTW, <u>2 more</u>
            </p>
          </div>
          <div className="flex justify-end">
            <img
              className="rounded-lg w-[10rem] object-cover"
              src={urlToImage}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
