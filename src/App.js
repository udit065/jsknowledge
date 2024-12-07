import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/notfound/NotFound';
import Css from './components/css/Css';
import Html from './components/html/Html';
import Javascript from './components/javascript/Javascript';
import ReactData from './components/react/React';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/css" element={<Css />} />
        <Route path="/html" element={<Html />} />
        <Route path="/react" element={<ReactData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    // <div className="bg-black text-white min-w-screen min-h-screen">
    //   <div className='mb-8'>
    //     <p className='text-3xl font-bold text-center'>Interview Questions</p>
    //   </div>
    //   <div className=' flex flex-wrap'>
    //     <div className='m-10'>
    //       <Javascript />
    //     </div>
    //     <div className='m-10'>
    //       <ReactData />
    //     </div>
    //     <div className='m-10'>
    //       <Html />
    //     </div>
    //     <div className='m-10'>
    //       <Css />
    //     </div>
    //     <div className='m-10'>
    //       <Css /> {/* //ANCHOR -Internet */}
    //     </div>
    //     <div className='m-10'>
    //       <Css /> {/* //ANCHOR -Nextjs */}
    //     </div>
    //     <div className='m-10'>
    //       <Css /> {/* //ANCHOR -MogoDb */}
    //     </div>
    //     <div className='m-10'>
    //       <Css /> {/* //ANCHOR -SQL */}
    //     </div>
    //     <div className='m-10'>
    //       <Css /> {/* //ANCHOR -tailwind css */}
    //     </div>
    //     <div className='m-10'>
    //       <Css /> {/* //ANCHOR -middleware */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
