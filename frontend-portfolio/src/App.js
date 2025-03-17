import './App.css';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/Projects' element={<Projects />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
