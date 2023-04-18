import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetails from './components/NewsDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:detailsid" element={<NewsDetails />} />
        {/* wenn man inder Home die Details zieht, braucht man nachd em / nichts mehr ausser noch das :id */}
      </Routes>
    </div>
  );
}

export default App;
