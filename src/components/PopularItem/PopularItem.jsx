import React from 'react';

const PopularItem = ({ item }) => {
    const { name, recipe, image, price } = item || {}
    return (
        <div className='flex gap-5'>
            <img style={{ borderRadius: "0 200px 200px 200px", }} className='w-28' src={image} alt="" />
            <div className="">
                <h4 className='text-xl font-medium'>{name} ------------------</h4>
                <p className='text-base'>{recipe}</p>
            </div>
            <p className='text-subTitle-color text-xl font-medium'>${price}</p>
        </div>
    );
};

export default PopularItem;