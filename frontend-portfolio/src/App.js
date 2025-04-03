import './App.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/skills' element={<Skills />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
