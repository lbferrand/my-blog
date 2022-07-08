import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./NavBar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles-list" element={<ArticleList />} />
            <Route path="/article/:name" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
