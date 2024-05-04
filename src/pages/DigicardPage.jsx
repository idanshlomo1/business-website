import React from 'react'
import DigicardGallery from '../components/DigicardGallery'
import DealBox from '../components/DealBox'
import DigicardLogo from '../images/atmospheric/digicardLogo.png'
import ReadMore from '../components/ReadMore';
import StepBox from '../components/StepBox';
import { IoPeople } from "react-icons/io5";
import { IoRocket } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa";
import Digicards from '../images/atmospheric/digicards.png'

const DigicardPage = () => {
    return (
        <div>
            <div className=" px-4  pt-48 pb-20 flex flex-col items-center justify-center dotBg  " dir="rtl">
                <div className="text-center text-mainColor max-w-[900px] px-4">
                    <img src={DigicardLogo} className='lg:max-w-[500px] mx-auto' alt="Digicard Logo" />
                    {/* <h1 dir='ltr' className="font-bold  text-3xl md:text-5xl">
                        Digicard - כרטיס ביקור דיגיטלי                </h1> */}
                    <h2 className="font-medium my-2 text-xl md:text-3xl text-secondaryColor ">
                        כל המידע על העסק שלכם, במקום אחד ובקליק                </h2>


                </div>
            </div>



            <div dir='rtl' className='py-20 p-4  digicardBg'>
                <div data-aos="fade-down"
                    data-aos-easing="ease-in-out">
                    <img className='mx-auto mt-[-200px] hover:scale-105 duration-300 ' src={Digicards} alt='digicards' />

                </div>
                <h2 data-aos="fade-down"
                    data-aos-easing="ease-in-out" dir='rtl' className=" font-bold px-4  text-lg md:text-xl my-4 mx-auto text-center text-shineColor2 ">
                    מה זה כרטיס ביקור דיגיטלי?
                </h2>
                <h3 data-aos="fade-in"
                    data-aos-easing="ease-in-out" className='text-mainColor max-w-[700px] mx-auto my-4 text-center text-base md:text-xl'>
                    היום יותר מתמיד, חשוב לתת לעסק שלכם פנים בעולם הדיגיטלי. כרטיס הביקור הדיגיטלי שלי מאפשר לכם לשתף את כל מה שהעסק שלכם מייחד -  מהשירותים שהעסק שלכם מציע, דרך קישורים לפרופילים החברתיים שלכם, ועד לאפשרויות יצירת קשר נוחות ומהירות. אני מאמין שעיצוב מוקפד ומיוחד יכול להשאיר רושם ראשוני מקצועי, להבטיח לכם יותר חשיפה ברשת ולבסוף - לקדם עסקאות.
                </h3>

                <h3 data-aos="fade-in"
                    data-aos-easing="ease-in-out" className='text-mainColor max-w-[700px] mx-auto my-4s text-center text-base md:text-xl'>
                    באמצעות כרטיס הביקור הדיגיטלי, הלקוחות שלכם יכולים בקלות להתרשם מהעסק, ליצור איתכם קשר בלחיצה אחת - אם זה באמצעות שיחת טלפון, ניווט ישיר אליכם, שיחת וואטסאפ, או בקשה להצעת מחיר. כל זה נועד להפוך את חווית המשתמש לנוחה ומהירה ככל האפשר, כדי שהלקוחות שלכם יוכלו להתמקד במה שבאמת חשוב - השירותים והמוצרים שאתם מציעים.

                </h3>
            </div>


            <DigicardGallery />


            <div className='py-20 p-4 specialBg'>
                <div className="text-center text-mainColor mx-auto max-w-[900px] px-4">
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" className="font-bold  text-3xl md:text-5xl">
                        מסלולים
                    </h1>
                    <h2 data-aos="fade-in"
                        data-aos-easing="ease-in-out" className="font-medium my-2 text-xl md:text-3xl text-secondaryColor ">
                        מסלולי דיגיקרד                   </h2>
                </div>
                <div className=" max-w-[1000px] items-center mt-16 p-4 mx-auto ">

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 rounded-2xl gap-y-20 gap-x-8 mx-8 ">
                        {/* Card components */}
                        <div data-aos="fade-down"
                            data-aos-easing="ease-in-out">


                            <DealBox
                                header="מסלול חודשי"
                                textArr={[
                                    "כרטיס ביקור דיגיטלי מותאם לעסק",
                                    "אחסון חודשי",
                                ]}
                                whatsappText="היי הגעתי מהאתר, אשמח לפרטים בנוגע לכרטיס ביקור דיגיטלי לעסק שלי במסלול חודשי"
                                price='50 ש"ח לחודש + מע"מ'

                            />
                        </div>

                        <div data-aos="fade-down"
                            data-aos-easing="ease-in-out">
                            <DealBox
                                header="מסלול שנתי"
                                textArr={[
                                    "כרטיס ביקור דיגיטלי מותאם לעסק",
                                    "אחסון שנתי",
                                    "2 תיקונים בשנה",

                                ]}
                                whatsappText="היי הגעתי מהאתר, אשמח לפרטים בנוגע לכרטיס ביקור דיגיטלי לעסק שלי במסלול שנתי"
                                price='500 ש"ח לשנה + מע"מ'

                            />
                        </div>
                    </div>
                </div>
            </div>



            <div className='p-4 py-20 specialBg'>

                <h1 data-aos="fade-down"
                    data-aos-easing="ease-in-out" dir='rtl' className="font-bold  text-3xl md:text-5xl text-center text-mainColor " >

                    איך זה עובד?
                </h1>
                <h2 data-aos="fade-in"
                    data-aos-easing="ease-in-out" dir='rtl' className=" font-medium px-4 my-2 text-xl md:text-3xl max-w-[1000px] mx-auto text-center text-secondaryColor ">
                    תהליך בניית כרטיס הביקור הדיגיטלי מורכב מ 3 שלבים פשוטים
                </h2>
                {/* 
<h2 dir='rtl' className=" font-bold px-4 mt-8 text-lg md:text-xl max-w-[1000px] mx-auto text-center text-shineColor2 ">
    השירותים שלי            </h2> */}

                <div className="flex flex-col justify-center items-center mt-8 p-4 mx-8 ">
                    <div data-aos="fade-down"
                        data-aos-easing="ease-in-out">


                        <StepBox
                            header="שיחת אפיון
        "
                            text="בה אכיר אתכם ואת העסק שלכם לעומק, אקח מכם פרטים שאני צריך להמשך בניית כרטיס הביקור הדיגיטלי,
      "
                            icon={IoPeople}
                            number={1}
                        />
                    </div>

                    <div data-aos="fade-down"
                        data-aos-easing="ease-in-out">
                        <StepBox
                            header=" עיצוב בנייה והתאמה למיתוג

        "
                            text="לאחר שקיבלתי מכם את כל הפרטים שאני צריך עבור בניית כרטיס הביקור הדיגיטלי, אמשיך לבנייה שלו בעיצוב מותאם למיתוג העסק שלכם. הכרטיס יכיל אפשרויות לניווט העסק, חיוג, תמונות, לקוחות ממליצים, פתיחה בשיחת ווצאפ ועוד."
                            icon={FaPenNib}
                            number={2}
                        />
                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="ease-in-out">
                        <StepBox
                            header="שיגור הכרטיס לאוויר


        "
                            text="לאחר שאשלח לכם את כרטיס הביקור הדיגיטלי הסופי, תהיה לכם אפשרות לתיקונים ושינויים שתרצו לבצע בכרטיס. ולאחר שתתנו לי אישור סופי נשגר אותו לאוויר."
                            icon={IoRocket}
                            number={3}
                        />
                    </div>
                </div>


            </div>


            <ReadMore links={[
                { text: 'דף הבית', link: '/' },
                { text: 'שיווק דיגיטלי', link: '/DigitalMarketing' },
                { text: 'מיתוג', link: '/Branding' }
            ]} />




        </div>
    )
}

export default DigicardPage