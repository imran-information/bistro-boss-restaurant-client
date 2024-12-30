import React from 'react';
import FoodCard from '../../../components/FoodCard/FoodCard';

const OrderTabItems = ({ items }) => {
    return (
        <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                items.map(item => <FoodCard key={item._id} items={item} ></FoodCard>)
            }
        </div>
    );
};

export default OrderTabItems;