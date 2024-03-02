import Footer from './components/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import '../index.css';
// import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header></Header>
      {/* <div id="links">
        <Outlet></Outlet>
      </div> */}
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
