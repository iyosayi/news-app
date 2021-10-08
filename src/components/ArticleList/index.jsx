import hash from "object-hash";

import { allNews } from "../../api/news";
import Hero from "./Hero";
import NewsCard from "./NewsCard";

const ArticleList = () => {
  const { news, error } = allNews();

  const nsEntry = (article) => {
    const urlToImage = article["urlToImage"] || "";
    const title = article["title"] || "";
    const sourceName = article["source"]["name"] || "";
    const content = article["content"] || "";
    const publishedAt = article["publishedAt"] || "";

    return { urlToImage, title, sourceName, content, publishedAt };
  };

  return (
    <div className="min-h-screen w-full px-5 space-y-10 pt-20 pb-10">
      {news && !error && (
        <Hero article={{ ...nsEntry(news[0]) }} hash={hash(news[0])} />
      )}
      <h2 className="text-xl font-bold">Trending News</h2>
      {news &&
        !error &&
        news.map((article, index) => {
          const artHash = hash(article);
          return (
            <NewsCard
              key={index}
              article={{ ...nsEntry(article) }}
              hash={artHash}
            />
          );
        })}
    </div>
  );
};

export default ArticleList;
