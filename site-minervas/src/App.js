import './App.css';
// import Home from '../src/pages/Home/Home'
import { Outlet } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";



function App() {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  );
}

export default App;
