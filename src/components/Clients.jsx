import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import ClientBox from './ClientBox';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const Clients = () => {


    const clientData = [
        {
            name: "Adi Keshev Skin Care",
            imageUrl: "path/to/image2.jpg",
            feedback: "תודה על שירות אדיב  וזריז, הכי חשוב מקצועי עם הכוונה מדויקת למטרה  - ללוגו של הבייבי שלי🙏🏻 , לא יכולתי לבחור טוב יותר הבנת בדיוק מה רציתי ועזרת לי למציאת הלוגו שדיימנתי וחלמתי  באמת תודה  והמון הצלחה ❤️ ",
        },
        {
            feedback: "עידן  היקר תודה  על לוגו מהסרטים, והשירות המהיר והסבלנות לדרישות שלי, אין עלייך",
            imageUrl: "path/to/image2.jpg",
            name: "שחף אגם מעצב שיער",
        },

        {
            name: "רפי אלבז מאמן אישי ומנחה קבוצות",
            imageUrl: "path/to/image2.jpg",
            feedback: "היי שמי רפי אלבז מאמן אישי ומנחה קבוצות, פניתי לעידן שהציע שירות לעיצוב לוגו תלת מימד במחיר סביר והוגן מאוד, התהליך היה מהיר ,מקצועי,עם חשיבה ומעוף מצידו,שבסופו יצא עיצוב מהמם יוקרתי ומאפיין את שירותיי.אני ממליץ בחום רב על עידן ואשתף איתו פעולה בשאר כישוריו ושירותיו בעתיד.",
        },

        {
            name: "ענבר דרורי מעצבת גבות",
            imageUrl: "path/to/image2.jpg",
            feedback: "הכרתי את עידן דרך פירסום בפייסבוק ואני כל כך שמחה שהאינטואיציה שלי הצדיקה עצמה על שפניתי אליו ככה. עידן התברר כמקצועי, רציני, מהיר ואדיב מאוד! הכין לי דף נחיתה אסתטי ויעיל ולא פיספס שום פרט ובמחיר אטרקטיבי והוגן, מעריכה מאוד אנשי מקצוע כמותו",
        },

        {
            name: "ויטליה ביוטי",
            imageUrl: "path/to/image2.jpg",
            feedback: "אתה תותח בחיים לא היו פניות כאלה לעסק שלנו, איזה יופי עשית את הפרסום והמוזיקה מטורף אלוף אלוף סגרנו 2 היום❤️ ",
        },

        // {
        //     name: "",
        //     imageUrl: "path/to/image2.jpg",
        //     feedback: "",
        // },

        // Add more clients as needed
    ];







    return (
        <div className='p-4 py-20   specialBg'>
            <div className="my-4">
                <h1 data-aos="fade-down"
                    data-aos-easing="ease-in-out"
                    dir='rtl' className="font-bold  text-3xl md:text-5xl text-center text-mainColor " >

                    עשרות לקוחות מרוצים</h1>
                <h2 data-aos="fade-in"
                    data-aos-easing="ease-in-out" className=" font-medium px-4 my-2 text-xl md:text-3xl max-w-[1000px] mx-auto text-center text-secondaryColor ">
                    תראו מקרוב מה הלקוחות כותבים על השירות
                </h2>
                <div className="relative swiper2">

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        autoplay={{ delay: 800, disableOnInteraction: true }}
                        slidesPerView={1}
                        loop
                        speed={1000}
                        pagination={{ clickable: true }}
                        navigation={{ nextEl: '.arrow-right2', prevEl: '.arrow-left2' }}
                        className="my-20 cursor-default rounded-2xl mx-auto max-w-[1200px]"
                        breakpoints={{
                            // when window width is >= 320px (small screen)
                            0: {
                                slidesPerView: 1,
                            },
                            320: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px (medium screen)
                            768: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 1024px (large screen)
                            1024: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {clientData.map((client, index) => (
                            <SwiperSlide key={index}>
                                <ClientBox
                                    name={client.name}
                                    imageURL={client.imageURL}
                                    feedback={client.feedback}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    <button className='arrow-left2 arrow m-2 '>
                        <IoIosArrowBack size={35} className="text-white" />
                    </button>
                    <button className='arrow-right2 arrow m-2'>
                        <IoIosArrowForward size={35} className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Clients;
