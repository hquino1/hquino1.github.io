import './App.css';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<About />}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
