import Cards from '../components/Cards';
import Footer from '../components/Footer';
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

{/* <div id="custom-controls-gallery" className="relative w-full" data-carousel="slide">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
  
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
    </div>
    <div className="flex justify-center items-center pt-4">
        <button type="button" className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg className="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
    </div>
  </div> */}