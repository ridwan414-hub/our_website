import Cards from '../components/Cards';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Products = () => {
  const images = [
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
  ];
  return (
    <div>
      <Header></Header>
      this is products page there will be products in display clicking them will
      add to the cart. there will be button to link with log in for buying

      <div className='grid grid-cols-3 gap-6 p-12 ml-6'>

        {images.map(image =><Cards key={images.length} img={image}></Cards>)}
    </div>
      <Footer></Footer>
    </div>
  );
};

export default Products;

