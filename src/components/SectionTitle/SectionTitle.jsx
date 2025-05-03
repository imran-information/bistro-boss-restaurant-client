import React from 'react';

const SectionTitle = ({ subTitle, title }) => {
    return (
        <div className='w-full md:w-10/12 lg:w-5/12 xl:w-1/3 mx-auto text-center px-4'>
            <p className='text-subTitle-color italic text-sm sm:text-base mb-1 sm:mb-2'>
                --- {subTitle} ---
            </p>
            <h3 className='text-2xl sm:text-3xl md:text-4xl font-medium border-y-2 sm:border-y-3 md:border-y-4 py-2 sm:py-3 mb-6 sm:mb-8 md:mb-10 uppercase'>
                {title}
            </h3>
        </div>
    );
};

export default SectionTitle;