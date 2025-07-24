import logo from './assets/logo.png';
import './App.css';
import Menu from './Menu';
import MainContent from './MainContent';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import AnimatedPageWrapper from "./AnimatedPageWrapper";
import Profile from './pages/Profile';
import Career from './pages/Career';
import Portrait from './pages/Portrait';
import Link from './pages/Link';
import Contact from './pages/Contact';
import {Menu as MenuIcon, ArrowUp as ArrowUpIcon} from 'lucide-react';
import {useState} from 'react';

const menuItems = [
  {path: "", text: "プロフィール"}, 
  {path: "career", text: "経歴"}, 
  {path: "portrait", text: "ポートレート"},
  {path: "link", text: "リンク"},
  {path: "contact", text: "お問い合わせ"},
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>田村 光功のフリハコ</span>
      </header>
      <Router basename={process.env.PUBLIC_URL}>
        <div id="content-wrapper">
            <Menu menuItems={menuItems} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <AnimatedRoutes />
        </div>
      </Router>
      <footer>
        <button onClick={toggleMenu}>
          <MenuIcon className="footer-icon" />
          <span>メニュー</span>
        </button>
        <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
          <ArrowUpIcon className="footer-icon" />
          <span>トップへ</span>
        </button>
      </footer>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation(); /* useLocation()は、Routerの中で実行しないとエラーになるので注意！ */

  return (
    <>
      <MainContent>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}> {/* Routeのpathは「./profile」のような相対パスでは指定できない決まりなので注意！ */}
            <Route path="/" element={<AnimatedPageWrapper><Profile /></AnimatedPageWrapper>} />
            <Route path="/career" element={<AnimatedPageWrapper><Career /></AnimatedPageWrapper>} />
            <Route path="/portrait" element={<AnimatedPageWrapper><Portrait /></AnimatedPageWrapper>} />
            <Route path="/link" element={<AnimatedPageWrapper><Link /></AnimatedPageWrapper>} />
            <Route path="/contact" element={<AnimatedPageWrapper><Contact /></AnimatedPageWrapper>} />
          </Routes>
        </AnimatePresence>
      </MainContent>
    </>
  );
}

export default App;