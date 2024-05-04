import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay, Mousewheel, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { imagesData } from '../media'
const FilterableGallery = () => {
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
                עבודות להתרשמות על קצה המזלג</h2>

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
                            <button onClick={() => handleFilter('logos')} className={`${filter === 'logos' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>לוגואים</button>
                        </SwiperSlide>
                        <SwiperSlide className='my-4'>
                            <button onClick={() => handleFilter('posts')} className={`${filter === 'posts' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>פוסטים</button>
                        </SwiperSlide>
                        <SwiperSlide className='my-4'>
                            <button onClick={() => handleFilter('logos3D')} className={`${filter === 'logos3D' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>לוגו 3D</button>
                        </SwiperSlide>
                        <SwiperSlide className='my-4'>
                            <button onClick={() => handleFilter('priceLists')} className={`${filter === 'priceLists' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>מחירונים</button>
                        </SwiperSlide>
                        <SwiperSlide className='my-4'>
                            <button onClick={() => handleFilter('visitCards')} className={`${filter === 'visitCards' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>כרטיסי ביקור</button>
                        </SwiperSlide>
                        <SwiperSlide className='my-4'>
                            <button onClick={() => handleFilter('flyers')} className={`${filter === 'flyers' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>פליירים</button>
                        </SwiperSlide>
                        <SwiperSlide className='my-4'>
                            <button onClick={() => handleFilter('invitations')} className={`${filter === 'invitations' ? 'px-4 py-1 bg-bgColor text-white hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300' : 'px-4 py-1 bg-shineColor1 text-bgColor hover:shadow-2xl hover:bg-bgColor hover:text-white hover:shadow-shineColor2 font-bold rounded-full duration-300'}`}>הזמנות</button>
                        </SwiperSlide>
                    </Swiper>



                </div>


                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 lg:grid-cols-3  rounded-2xl gap-8 overflow-y-auto">
                        {filteredImages.slice(0, visibleCount).map((image, index) => (
                            <div data-aos="fade-down"
                                data-aos-easing="ease-in-out">


                                <img key={index} className={`mix ${image.filter}  shadow-4xl hover:scale-105 duration-300 `} src={image.src} alt={`Image ${index}`} />
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

export default FilterableGallery