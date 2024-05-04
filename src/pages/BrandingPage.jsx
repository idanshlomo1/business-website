import React from 'react'
import FilterableGallery from '../components/FilterableGallery'
import DealBox from '../components/DealBox'
import Image01 from '../images/atmospheric/image01.jpg'
import ReadMore from '../components/ReadMore';
import { FaWhatsapp } from "react-icons/fa6";

const BrandingPage = () => {
    return (
        <div>


            <div className=" px-4  pt-48 pb-20 flex flex-col items-center justify-center dotBg  " dir="rtl">
                <div className="text-center text-mainColor max-w-[900px] px-4">
                    <h1 className="font-bold  text-3xl md:text-5xl">
                        מיתוג עסקי
                    </h1>
                    <h2 className="font-medium my-2 text-xl md:text-3xl text-secondaryColor ">
                        המרכיב החשוב ביותר בנראות העסק שלכם
                    </h2>
                </div>
            </div>

            <div dir='rtl' className='py-20 p-4 brandingBg'>
                <h2 data-aos="fade-down"
                    data-aos-easing="ease-in-out" className=" font-bold px-4 mt-8 text-lg md:text-xl my-4 mx-auto text-center text-shineColor2 ">
                    הכול מתחיל במיתוג
                </h2>
                <h3 data-aos="fade-in"
                    data-aos-easing="ease-in-out" className='text-mainColor max-w-[700px] mx-auto text-center text-base md:text-xl'>
                    אני מאמין   שמיתוג נכון ומדויק הוא הבסיס להכול. אני מתחיל בלהבין מה הם הערכים של העסק, מה השירותים שהוא מציע ומה מייחד אותו. ולאחר מכן אני בונה מיתוג בעיצוב אישי שמתאים לעסק
                </h3>
            </div>

            <FilterableGallery />

            <div className='py-20 p-4 specialBg'>
                <div className="text-center text-mainColor mx-auto max-w-[900px] px-4">
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" className="font-bold  text-3xl md:text-5xl">
                        חבילות מיתוג
                    </h1>
                    <h2 data-aos="fade-in"
                        data-aos-easing="ease-in-out" className="font-medium my-2 text-xl md:text-3xl text-secondaryColor ">
                        חבילות המיתוג האקסלוסיביות שלי                    </h2>
                </div>
                <div className=" max-w-[1200px] items-center mt-16 p-4 mx-auto ">

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl gap-y-20 gap-x-8 mx-8 ">
                        {/* Card components */}
                        <div data-aos="fade-down"
                            data-aos-easing="ease-in-out">


                            <DealBox
                                header="חבילת בסיס"
                                textArr={[
                                    "עיצוב לוגו",
                                    "עיצוב כרטיס ביקור",
                                    "כל הקבצים המתאימים"
                                ]}
                                whatsappText="היי הגעתי מהאתר, אשמח לפרטים בנוגע לחבילת מיתוג בסיס לעסק שלי"
                                price='650 ש"ח + מע"מ'

                            />
                        </div>

                        <div data-aos="fade-down"
                            data-aos-easing="ease-in-out">
                            <DealBox
                                header="חבילת פרו"
                                textArr={[
                                    "עיצוב לוגו",
                                    "עיצוב כרטיס ביקור",
                                    "עיצוב מודעת פרסום",
                                    "סטיקרים לווצאפ עם הלוגו",
                                    "כל הקבצים המתאימים"
                                ]}
                                whatsappText="היי הגעתי מהאתר, אשמח לפרטים בנוגע לחבילת מיתוג פרו לעסק שלי"
                                price='950 ש"ח + מע"מ'

                            />
                        </div>
                        <div data-aos="fade-down"
                            data-aos-easing="ease-in-out">
                            <DealBox
                                header="חבילת הכל כלול"
                                textArr={[
                                    "עיצוב לוגו",
                                    "עיצוב כרטיס ביקור",
                                    "עיצוב 2 מודעות פרסום",
                                    "נייר מכתבים",
                                    "כרטיס ביקור דיגיטלי לשנה שלמה",
                                    "סטיקרים לווצאפ עם הלוגו",
                                    "כל הקבצים המתאימים"
                                ]}
                                whatsappText="היי הגעתי מהאתר, אשמח לפרטים בנוגע לחבילת מיתוג הכל כלול לעסק שלי"
                                price='1500 ש"ח + מע"מ'
                            />
                        </div>
                    </div>
                </div>
            </div>



            <div className='p-4 py-20 pb-10  specialBg '>
                <h2 data-aos="fade-in"
                    data-aos-easing="ease-in-out" className=" font-bold px-4 mt-8 text-lg md:text-xl my-4 mx-auto text-center text-shineColor2 ">
                    עיצוב גרפי ויצירת תוכן פרסומי                </h2>
                <h1 data-aos="fade-down"
                    data-aos-easing="ease-in-out" dir='rtl' className="font-bold max-w-[800px] mx-auto  text-3xl md:text-5xl text-center text-mainColor " >

                    למותג יש אישיות, חלק בלתי נפרד מהאישיות הוא הויזואליות.
                </h1>
                <div className='flex flex-col lg:flex-row-reverse mx-auto  max-w-[768px]  lg:max-w-[1200px] p-4 md:p-8 my-8 specialBgrounded-2xl' >

                    <div className='rounded-2xl lg:mx-4 max-w-[768px] lg:max-w-[500px] border-2 border-bgPath duration-300 overflow-hidden'>
                        <img src={Image01} className='object-cover w-full h-auto min-h-full hover:scale-105 duration-300' alt="" />
                    </div>
                    <div className='max-w-[768px] my-4 '>


                        <h2 dir='rtl' className=" font-light px-4 my-2 text-lg md:text-xl max-w-[1000px] mx-auto text-right text-mainColor ">
                            בעולם שכל כך מלא בפרסומות, מהרחוב ועד למסך הפלאפון, אני יודע כמה זה חשוב שהמותג שלכם יתבלט. אני פה בדיוק בשביל זה - לעזור לכם להפוך את המותג שלכם לזה שאנשים לא רק שמים לב אליו, אלא גם זוכרים אותו.

                            כמי שטבל בעולם העיצוב והתוכן שנים, אני מבין שכל פרויקט, קטן או גדול, הוא סיפור לגופו.  אני פה לדאוג שהעיצוב שלכם ידבר בשפה שהלקוחות שלכם לא רק שומעים, אלא גם מרגישים.                        </h2>



                    </div>

                </div>


                {/* <h2 dir='rtl' className=" font-bold px-4 mt-8 text-lg md:text-xl max-w-[1000px] mx-auto text-center text-shineColor2 ">
    השירותים שלי            </h2> */}




            </div>



            <ReadMore links={[
                { text: 'דף הבית', link: '/' },
                { text: 'שיווק דיגיטלי', link: '/DigitalMarketing' },
                { text: 'Digicard - כרטיס ביקור דיגיטלי', link: '/Digicard' }
            ]} />


        </div >
    )
}

export default BrandingPage