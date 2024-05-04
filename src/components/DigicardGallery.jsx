import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay, Mousewheel, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imagesData from '../digicardMedia'

const DigicardGallery = () => {
    const [filter, setFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(6);
    const [shuffledImages, setShuffledImages] = useState([]);

    useEffect(() => {
        if (filter === 'all') {
            setShuffledImages(shuffleArray(imagesData));
        }
    }, [filter]);

    const handleFilter = (newFilter) => {
        setFilter(newFilter);
        setVisibleCount(6);
    };

    // Shuffle function using the Fisher-Yates (Durstenfeld) shuffle algorithm
    const shuffleArray = (array) => {
        const result = array.slice(); // Create a shallow copy of the array
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]]; // Swap elements
        }
        return result;
    };

    // Use shuffledImages if filter is 'all', otherwise filter imagesData
    const filteredImages = filter === 'all' ? shuffledImages : imagesData.filter(image => filter === image.filter);
    return (
        <div className=' py-20 specialBg   '>

            <h1 data-aos="fade-down"
                data-aos-easing="ease-in-out" className="font-bold  text-3xl md:text-5xl text-center text-mainColor" >

                עבודות להתרשמות</h1>
            <h2 data-aos="fade-in"
                data-aos-easing="ease-in-out" className=" font-medium my-2 text-xl md:text-3xl text-center text-secondaryColor ">
                עשרות בעלי עסקים מרוצים
            </h2>

            <div className=" mx-auto   my-8 text-center max-w-[1200px]   py-4 rounded-2xl">
                <div data-aos="fade-in"
                    data-aos-easing="ease-in-out" className=" my-4 rounded-2xl bg-gradient-to-tr from-bgColor to-bgColor1 border-2 border-bgPath">
                    <Swiper
                        modules={[FreeMode, Pagination, Mousewheel, Autoplay, Scrollbar]}
                        autoplay={{ delay: 1000, disableOnInteraction: true }}
                        dir='rtl'
                        // loop={true}
                        freeMode={true}
                        grabCursor={true}
                        scrollbar={{ draggable: true }} // Updated to provide scrollbar configuration

                        className=" max-w-[1200px]  rounded-2xl z-0"
                        breakpoints={{
                            // when window width is >= 320px (small screen)
                            0: {
                                slidesPerView: 2.5,
                            },
                            320: {
                                slidesPerView: 2.5,
                            },
                            // when window width is >= 768px (medium screen)
                            768: {
                                slidesPerView: 4.5,
                            },
                            // when window width is >= 1024px (large screen)
                            1024: {
                                slidesPerView: 5.5,
                            },
                        }}
                    >
                        <SwiperSlide className='my-4'>
                            <button onClick={() => handleFilter('all')} className={`${filter === 'all' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>הכל</button>
                        </SwiperSlide>
                        <SwiperSlide className='my-4'>
                            <button onClick={() => handleFilter('beauty')} className={`${filter === 'beauty' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>קוסמטיקה וביוטי</button>
                        </SwiperSlide>
                        <SwiperSlide className='my-4'>
                            <button onClick={() => handleFilter('design')} className={`${filter === 'design' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>כושר ועיצוב</button>
                        </SwiperSlide>
                        <SwiperSlide className='my-4'>
                            <button onClick={() => handleFilter('food')} className={`${filter === 'food' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>מסעדנות ואוכל</button>
                        </SwiperSlide>
                        <SwiperSlide className='my-4'>
                            <button onClick={() => handleFilter('production')} className={`${filter === 'production' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>ייצור וחנויות</button>
                        </SwiperSlide>


                    </Swiper>



                </div>

                <h2 data-aos="fade-in"
                data-aos-easing="ease-in-out" dir='rtl' className=" font-bold px-4  text-lg md:text-xl mt-8 mx-auto text-center text-shineColor2 ">
                    לחצו על הכרטיס הדיגיטלי כדי לראות אותו
                </h2>
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 p-4 lg:grid-cols-3 rounded-2xl gap-8 overflow-hidden">
                        {filteredImages.slice(0, visibleCount).map((image, index) => (
                            <div data-aos="fade-down"
                                data-aos-easing="ease-in-out">


                                <a href={image.url} target="_blank" rel="noopener noreferrer" key={index}>
                                    <img className={`mix ${image.filter} shadow-4xl hover:scale-105 duration-300 `} src={image.src} alt={`Image ${index}`} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>




                <div className="text-center mt-4">
                    {visibleCount < filteredImages.length && (
                        <button onClick={() => setVisibleCount(visibleCount + 3)} className='px-4 py-1 mx-2 shadow-2xl shadow-shineColor1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'>הצג עוד</button>
                    )}
                    {visibleCount > 6 && (
                        <button onClick={() => setVisibleCount(visibleCount - 3)} className='px-4 py-1 mx-2 shadow-2xl shadow-shineColor1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'>הצג פחות</button>
                    )}
                </div>

            </div>

        </div >
    )
}

export default DigicardGallery