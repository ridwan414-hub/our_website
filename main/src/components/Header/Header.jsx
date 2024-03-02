import './Header.css';

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
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li>
              <a href="reviews.html">Reviews</a>
            </li>
            <li>
              <a href="Videos.html">Videos</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="cart.html">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
