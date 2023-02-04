import { Route, Routes } from "react-router-dom";
import { Article } from "./components/Article";
import { Work } from "./components/Work";
import "./css/B.Font.min.css";
import "./css/B.Home.min.css";
import "./css/B.Message.min.css";
import "./css/B.min.css";
import { articles, works, user } from "./data/data";
import Information from "./components/Information";
import { Blogheader } from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Blogheader user={user} articles={articles} works={works} />}
        >
          <Route path="/articles" element={<Article item={articles} />} />
          <Route path="/works" element={<Work item={works} />} />
          <Route path="/info" element={<Information user={user} />} />
        </Route>
        <Route path="*" element={<p>404 Not Found. Good bye~</p>} />
      </Routes>
    </div>
  );
}

export default App;

/*
        <Routes>
          <Route path='/' element={<Blogheader user={user} articles={articles} works={works} />}>
            <Route path='/articles' element={<Article item={articles} />} />
            <Route path='/works' element={<Work item={works} />} />
            <Route path='/info' element={<Information user={user} />} />
          </Route>
          <Route path='*' element={<p>404 Not Found. Good bye~</p>} />
        </Routes>
*/
