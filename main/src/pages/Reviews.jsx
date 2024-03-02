import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

const Reviews = () => {
  const reviews = [
    '../../Images/Reviews/FB_IMG_1708512540925.jpg',
    '../../Images/Reviews/FB_IMG_1708512882636.jpg',
    '../../Images/Reviews/FB_IMG_1708512906024.jpg',
    '../../Images/Reviews/FB_IMG_1708513013742.jpg',
    '../../Images/Reviews/FB_IMG_1708513021788.jpg',
  ];
  return (
    <div>
      <Header></Header>
      <div className='grid grid-cols-3'>

      {reviews.map(image =><Cards key={reviews.length} img={image}></Cards>)}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Reviews;
