import logo from './assets/logo.png';
import './App.css';
import SideMenu from './SideMenu';
import MainContent from './MainContent';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import AnimatedPageWrapper from "./AnimatedPageWrapper";
import Profile from './pages/Profile';
import Career from './pages/Career';
import Portrait from './pages/Portrait';
import Link from './pages/Link';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>田村 光功のフリハコ</span>
      </header>
      <div id="body-wrapper">
        <Router basename={process.env.PUBLIC_URL}>
          <AnimatedRoutes />
        </Router>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const menuItems = [
    {path: "", text: "プロフィール"}, 
    {path: "career", text: "経歴"}, 
    {path: "portrait", text: "ポートレート"},
    {path: "link", text: "リンク"},
    {path: "contact", text: "お問い合わせ"},
  ];
  const location = useLocation(); /* useLocation()は、Routerの中で実行しないとエラーになるので注意！ */

  return (
    <>
      <SideMenu menuItems={menuItems} />
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
