import React from 'react';

const SectionTitle = ({ subTitle, title }) => {
    return (
        <div className='md:w-3/12 mx-auto text-center'>
            <p className='text-subTitle-color italic text-base mb-2'>--- {subTitle} ---</p>
            <h3 className='text-4xl font-medium border-y-4 py-3 mb-10 uppercase'>{title}</h3>
        </div>
    );
};

export default SectionTitle;