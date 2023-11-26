import { Route, Routes } from 'react-router-dom';
import './App.css';
import History from './Components/History';
import Home from './Components/Home';
import Transaction from './Components/Transaction';
import Header from './Pages/Header';
import Footer from './Pages/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/transaction" element={<Transaction />}/>
      <Route path="/history" element={<History />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
