import { BrowserRouter, Route } from "react-router-dom";

import Article from "./components/Article";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="max-w-[1248px] m-auto">
        <Route path="/" exact>
          <ArticleList />
        </Route>
        <Route path="/:article" exact>
          <Article />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
