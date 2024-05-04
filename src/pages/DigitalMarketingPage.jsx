import React from 'react'
import Results from '../components/Results'
import DealBox from '../components/DealBox'
import StepBox from '../components/StepBox'

import { IoIosArrowBack } from "react-icons/io";

import Steps from '../components/Steps'
import ReadMore from '../components/ReadMore';
const DigitalMarketingPage = () => {
    return (
        <div>
            <div className="dotBg px-4  pt-48 pb-20 flex flex-col items-center justify-center bg-black  " dir="rtl">
                <div className="text-center text-mainColor max-w-[900px] px-4">
                    <h1 className="font-bold  text-3xl md:text-5xl">
                        שיווק דיגיטלי                </h1>
                    <h2 className="font-medium text-secondaryColor my-2 text-xl md:text-3xl ">
                        הגעה ללקוחות חדשים, לידים, וסגירת עסקאות
                    </h2>
                </div>


            </div>
            <div dir='rtl' className='py-20 p-4 marketingBg'>
                <h2 data-aos="fade-down"
                    data-aos-easing="ease-in-out" className=" font-bold px-4 mt-8 text-lg md:text-xl my-4 mx-auto text-center text-shineColor2 ">
                    שיווק דיגיטלי בפייסבוק ואינסטגרם
                </h2>
                <h3 data-aos="fade-in"
                    data-aos-easing="ease-in-out" className='text-mainColor max-w-[700px] my-4 mx-auto text-center text-base md:text-xl'>
                    שיווק נכון יביא לנו את הלידים הטובים ביותר, שבסוף סוגרים את העסקאות.

                    במסגרת השירותים שאני נותן לעסקים תוכלו להנות משיווק דיגיטלי המותאם בדיוק לעסק שלכם.

                    עם נסיון של כמה שנים בקידום ממומן בדיגיטל ובסוגים שונים ומגוונים של עסקים, אני יכול להגיד שלכל עסק יש מתכון להצלחה.        </h3>
            </div>

            <div className='py-20 p-4 specialBg'>
                <div className="text-center text-mainColor mx-auto max-w-[900px] px-4">
                    <h1 data-aos="fade-down"
                        data-aos-easing="ease-in-out" className="font-bold  text-3xl md:text-5xl">
                        חבילת שיווק דיגיטלי
                    </h1>
                    <h2 data-aos="fade-in"
                        data-aos-easing="ease-in-out" className="font-medium my-2 text-xl md:text-3xl text-secondaryColor ">
                        מתאימה לכל סוגי העסקים                  </h2>
                </div>
                <div className=" max-w-[500px] items-center mt-16 p-4 mx-auto ">

                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 rounded-2xl gap-y-20 gap-x-8 mx-8 ">
                        {/* Card components */}
                        <div data-aos="fade-down"
                            data-aos-easing="ease-in-out">


                            <DealBox
                                header="חבילת שיווק חודשית"
                                textArr={[
                                    "שיחת אפיון",
                                    "ניהול קמפיין בפייסבוק לחודש",
                                    "ניהול קמפיין באינסטגרם לחודש",
                                    "עיצוב מודעה",
                                    "עיצוב דף פייסבוק שיווקי",
                                    "עיצוב לוגו במתנה במידת הצורך",
                                    "תמיכה וליווי לאורך כל הדרך"

                                ]}
                                whatsappText="היי הגעתי מהאתר, אשמח לפרטים בנוגע לשיווק דיגיטלי לעסק שלי"
                                price='850 ש"ח + מע"מ'

                            />
                        </div>
                    </div>
                </div>
            </div>




            <Steps />


            {/* <h3 className='text-mainColor  my-4 max-w-[700px] mx-auto text-center text-base md:text-xl'>
                    למותג יש אישיות, חלק בלתי נפרד מהאישיות הוא הויזואליות. בעזרת עיצוב גרפי אנו יכולים להבליט ולייצר זכירות למותג שלנו.
                </h3>

                <h3 className='text-secondaryColor max-w-[700px]  my-4  mx-auto text-center text-base md:text-xl'>
                    בעולם שכל כך מלא בפרסומות, מהרחוב ועד למסך הפלאפון, אני יודע כמה זה חשוב שהמותג שלך יתבלט. אני פה בדיוק בשביל זה - לעזור לך להפוך את המותג שלך לזה שאנשים לא רק שמים לב אליו, אלא גם זוכרים אותו.

                    כמי שטבל בעולם העיצוב והתוכן שנים, אני מבין שכל פרויקט, קטן או גדול, הוא סיפור לגופו.  אני פה לדאוג שהעיצוב שלך ידבר בשפה שהלקוחות שלך לא רק שומעים, אלא גם מרגישים.
                </h3> */}
            <Results />

            <ReadMore links={[
                { text: 'דף הבית', link: '/' },
                { text: 'Digicard - כרטיס ביקור דיגיטלי', link: '/Digicard' },
                { text: 'מיתוג', link: '/Branding' }
            ]} />

        </div>
    )
}

export default DigitalMarketingPage