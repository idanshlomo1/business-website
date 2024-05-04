import React from 'react'
import Card from './Card'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";


const WhyUs = () => {
    return (
        <div className='p-4 py-20 pb-10  specialBg'>

            <h1 data-aos="fade-down"
                data-aos-easing="ease-in-out" dir='rtl' className="font-bold  text-3xl md:text-5xl text-center text-mainColor " >

               קצת עליי</h1>
            <h2 data-aos="fade-in"
                data-aos-easing="ease-in-out" dir='rtl' className=" font-medium px-4 my-4 text-base md:text-2xl max-w-[1000px] mx-auto text-center text-mainColor ">
                אני חי את עולם הדיגיטל  מעל עשור, בניתי אתרים, מיתגתי  עסקים,
                ניהלי עשרות קמפיינים בשיווק דיגיטלי ויצרתי תוצאות מדהימות עבור עסקים קטנים ובינוניים,
                כמו גם לחברות המובילות בישראל. כשאתם עובדים איתי,
                אתם מזריקים את כל הניסיון והמיומנויות הללו לתוך העסק שלכם. ומשם,
                כל שנותר הוא להסתכל בגאווה על עמודת ההכנסות.
            </h2>

            <h2 dir='rtl' className=" font-bold px-4 mt-8 text-lg md:text-xl max-w-[1000px] mx-auto text-center text-shineColor2 ">
                השירותים שלי            </h2>

            <div className="flex justify-center items-center mt-8 p-4 mx-8 ">

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl gap-8  ">
                    {/* Card components */}
                    <div data-aos="fade-down"
                        data-aos-easing="ease-in-out">


                        <Card

                            header="שיווק דיגיטלי"
                            text="לפרסם בפייסבוק ואינסטגרם כל אחד יכול. להפוך פרסום בפייסבוק לתוצאות, זה עסק בפני עצמו."
                            icon={FaFacebook}
                        />
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="ease-in-out">
                        <Card
                            header="מיתוג עסקי"
                            text="מה הופך עסק למותג? אסטרטגיה נכונה, ביסוס ערכים ויצירת תדמית חיצונית בולטת המבדלת אותו מהמתחרים."
                            icon={FaPencilAlt}
                        />
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="ease-in-out">
                        <Card
                            header="בניית אתרים בקוד"
                            text="הנסיון, הרעיונות, הכלים והיכולות שלי מבטיחים לכם אתרים מעוצבים ואיכותיים שמייצרים תוצאות, בנוסף בונה אתרים מיוחדים ומערכות web מתקדמות בקוד."
                            icon={FaCode}
                        />
                    </div>

                    {/* Digicard component */}
                    <div data-aos="fade-down"
                        data-aos-easing="ease-in-out" className="lg:col-span-3 md:col-span-2 sm:col-span-1 col-span-1">
                        <div className='group cursor-default p-8 min-h-64 flex flex-col justify-center items-center bg-gradient-to-tr from-bgColor to-bgColor1 border-bgPath border-2 rounded-2xl relative  duration-300 hover:border-secondaryColor'>
                            <div className='absolute inset-0 flex justify-center items-center p-8 transition-opacity duration-700 ease-in-out '>
                                {/* This container will maintain its space but become invisible on hover */}
                                <div className='transition-opacity duration-500 ease-in-out group-hover:opacity-0 flex flex-col justify-center items-center'>
                                    <IoIosPhonePortrait size={80} className="text-shineColor2 m-4" />
                                    <h1 className='text-white font-bold text-2xl text-center'>Digicard - כרטיס ביקור דיגיטלי</h1>
                                </div>
                                {/* This container starts invisible and becomes visible on hover */}
                                <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute inset-0 flex justify-center items-center p-8'>
                                    <p dir='rtl' className='text-white text-center text-light'>כרטיס ביקור דיגיטלי בשילוב דף נחיתה המרכז את כל המידע על העסק שלכם למקום אחד.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default WhyUs