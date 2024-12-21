import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/notfound/NotFound';
import Css from './components/css/Css';
import Html from './components/html/Html';
import Javascript from './components/javascript/Javascript';
import ReactData from './components/react/React';
import QuizComponent from './components/output/QuizComponent';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/css" element={<Css />} />
        <Route path="/html" element={<Html />} />
        <Route path="/react" element={<ReactData />} />
        <Route path="//output-based-question" element={<QuizComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
