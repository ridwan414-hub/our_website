import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import "../index.css"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet></Outlet>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
