import React from 'react';

const DealBox = ({ header, whatsappText, textArr, price }) => {
    const whatsappNumber = "+972538250965";
    const whatsappBaseUrl = "https://wa.me/";
    const fullWhatsAppLink = `${whatsappBaseUrl}${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappText)}`;

    return (
        <div className='group cursor-default p-8 flex flex-col border-bgPath border-2 justify-between items-center bg-gradient-to-tr from-bgColor to-bgColor1 rounded-2xl relative duration-300 hover:border-secondaryColor h-full'>
            <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-bgColor to-bgColor1 border-2 group-hover:border-secondaryColor border-bgPath duration-300 rounded-2xl h-12 w-[200px] flex items-center justify-center'>
                <span dir='rtl' className='text-shineColor2 text-lg font-semibold'>{price}</span>
            </div>


            <div className="flex flex-col items-center w-full">



                {/* Header */}
                <h1 className='text-white font-bold text-2xl md:text-3xl text-center my-4'>{header}</h1>
            </div>

            {/* Text List, allow to grow and take available space */}
            <ul dir='rtl' className='text-white text-right my-8 text-light flex-grow'>
                {textArr.map((item, index) => (
                    <li className='mt-2 text-base md:text-lg font-normal' key={index}>{item}</li>
                ))}
            </ul>

            {/* WhatsApp Button */}
            <a
                href={fullWhatsAppLink}
                target="_blank"
                dir='rtl'
                rel="noopener noreferrer"
                className='my-4 bg-gradient-to-tr btnGradient text-center text-mainColor hover:shadow-2xl hover:shadow-shineColor2 font-bold px-6 py-2 sm:text-2xl text-xl rounded-full duration-300 self-center'
            >
                לפרטים נוספים
            </a>
        </div>
    );
}

export default DealBox;
