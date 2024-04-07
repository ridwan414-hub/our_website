import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { useState } from 'react'; // Import useState

const Products = () => {
  const images = [
    '../../Images/wall-frames/p1.jpg',
    '../../Images/wall-frames/p2.jpg',
    '../../Images/wall-frames/p3.jpg',
    '../../Images/wall-frames/p4.jpg',
    '../../Images/wall-frames/p5.jpg',
    '../../Images/wall-frames/p6.jpg',
    '../../Images/wall-frames/p7.jpg',
    '../../Images/wall-frames/p8.jpg',
    '../../Images/wall-frames/FB_IMG_1708512680043.jpg',
    '../../Images/wall-frames/FB_IMG_1708512480462.jpg',
    '../../Images/wall-frames/FB_IMG_1708512501351.jpg',
    '../../Images/wall-frames/FB_IMG_1708512514316.jpg',
    '../../Images/wall-frames/FB_IMG_1708512592256.jpg',
    '../../Images/wall-frames/FB_IMG_1708512626119.jpg',
    '../../Images/wall-frames/FB_IMG_1708512835936.jpg',
    '../../Images/wall-frames/FB_IMG_1708512838746.jpg',
    '../../Images/wall-frames/FB_IMG_1708512843563.jpg',
    '../../Images/wall-frames/FB_IMG_1708512899181.jpg',
    '../../Images/wall-frames/FB_IMG_1708512925677.jpg',
    '../../Images/wall-frames/FB_IMG_1708512933875.jpg',
    '../../Images/wall-frames/FB_IMG_1708512952026.jpg',
    '../../Images/wall-frames/FB_IMG_1708513037127.jpg',
    '../../Images/wall-frames/FB_IMG_1708513079086.jpg',
    // ... your other image paths
  ];
  const [cartItems, setCartItems] = useState([]); // State to track cart items

  const addToCart = (image) => {
    setCartItems((prevCartItems) => [...prevCartItems, image]);
    // Implement cart functionality (e.g., display cart items, manage quantity)
    console.log('Added to cart:', image); // Placeholder for now
  };

  return (
    <div className="product-page bg-[linear-gradient(240deg,_#D9AFD9,_#97D9E1)] min-h-screen flex flex-col"> {/* Modified background color with linear gradient */}
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 mt-4">
        <h1 className="text-4xl font-bold mb-3 text-center"> {/* Added text color and centered text */}
          <span className="text-gray-800 font-serif italic">Our Products</span> {/* Only styling the "Our Products" line */}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {images.map((image) => (
            <Cards key={image} img={image} onAddToCart={addToCart} />
          ))}
        </div>
      </main>
      <section className="cta-section bg-[linear-gradient(to_right,_#E0EAFC,_#CFDEF3)] py-8 text-center">
        <h2 className="text-3xl font-semibold mb-8 mt-2">Ready to personalize your space?</h2>
        <Link reloadDocument to="/Login" className="btn btn-primary bg-red-300 hover:bg-red-500 rounded-full py- px-6 text-xl font-bold shadow-lg hover:shadow-xl transition duration-300">Log in to Buy</Link> {/* Connect the button to the login page */}
      </section>
      <Footer />
    </div>
  );
};

export default Products;
