import React from 'react';

const PopularItem = ({ item }) => {
    const { name, recipe, image, price } = item || {};

    return (
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300'>
            {/* Image with elegant border radius */}
            <div className='flex-shrink-0 relative'>
                <img
                    className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-md rounded-tl-md'
                    src={image}
                    alt={name}
                />
                <div className='absolute inset-0 border-2 border-white/30 rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-md rounded-tl-md pointer-events-none'></div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
                    <h4 className='text-lg font-semibold text-gray-800 truncate'>
                        {name}
                    </h4>
                    <p className='text-lg font-medium text-amber-600 whitespace-nowrap'>
                        ${price}
                    </p>
                </div>
                
                {/* Recipe with elegant separator */}
                <div className='mt-2 sm:mt-3'>
                    <div className='hidden sm:block h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2'></div>
                    <p className='text-sm text-gray-600 line-clamp-2'>
                        {recipe}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PopularItem;