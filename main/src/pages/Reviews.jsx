import Cards from '../components/ReviewsCards';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ReviewsCards from '../components/ReviewsCards';

const Reviews = () => {
  const reviews = [
    '../../Images/Reviews/FB_IMG_1708513021788.jpg',
    '../../Images/Reviews/FB_IMG_1708512540925.jpg',
    '../../Images/Reviews/FB_IMG_1708512882636.jpg',
    '../../Images/Reviews/FB_IMG_1708512906024.jpg',
    '../../Images/Reviews/FB_IMG_1708513013742.jpg',
   
  ];

  return (
    <div >
      <Header />
      <div className='grid grid-cols-2 bg-[linear-gradient(0deg,_#FFEFBA,_#FFFFFF)] '>
        {reviews.map(image => (
          <ReviewsCards key={reviews.length} img={image} className="review-card" />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
