import React from 'react';

const Card = ({ icon: Icon, header, text }) => {
    return (
        <div className='group cursor-default p-8 min-h-64 flex flex-col border-bgPath border-2 justify-center items-center bg-gradient-to-tr from-bgColor to-bgColor1 rounded-2xl relative  duration-300 hover:border-secondaryColor'>
            {/* Icon and Header that hide on hover */}
            <div className='transition-opacity duration-500 ease-in-out group-hover:opacity-0'>
                <Icon size={80} className="text-shineColor2 mx-auto m-4" />
                <h1 className='text-white font-bold text-2xl text-center'>{header}</h1>
            </div>
            {/* Text that shows on hover */}
            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute inset-0 flex justify-center items-center p-8'>
                <p dir='rtl' className='text-white text-center text-light'>{text}</p>
            </div>
        </div>
    );
}

export default Card;
