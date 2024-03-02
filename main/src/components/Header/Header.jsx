import './Header.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <section id="header">
        <img
          src="../../../Images/BristysArtwork.png"
          alt="logo"
          className="logo"
        />
        <div>
          <ul id="navbar">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
            <li>
              <NavLink to="/Videos">Videos</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <i className="fa fa-shopping-cart"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
