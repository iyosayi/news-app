import hash from "object-hash";
import { useParams } from "react-router";
import { allNews } from "../api/news";
import People from "../assets/people.jpg";

const Article = () => {
  const { article } = useParams();

  const { news, error } = allNews();

  const { publishedAt, source, title, urlToImage, author, content } = news.find(
    (newsObject) => article === hash(newsObject)
  );

  return (
    <div className="px-5 space-y-4 pt-20 pb-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-wide">{title}</h1>
        <p className="text-article-authors text-xs">By {author}</p>
        <p className="text-article-authors text-xs">
          {/* {"Updated 1:12 PM EDT, Sat August 28, 2021"} */}
          {publishedAt}
        </p>
      </header>
      <article className="space-y-5 pb-5">
        <figure className="">
          <img src={urlToImage} className="object-cover max-h-[680px]" />
        </figure>
        {/* Match with ellipsis, split and return without truncation string */}
        <p>{content && content.split(/[.?!;\u2026]+/g)[0]}</p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
      </article>
    </div>
  );
};

export default Article;
