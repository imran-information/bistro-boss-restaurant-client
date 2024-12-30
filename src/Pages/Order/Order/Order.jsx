import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import orderCoverImage from '../../../assets/order/order-bg.jpg'
import FoodTab from '../../../components/FoodTab/FoodTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const { category } = useParams()
    console.log(category);
    return (
        <div>
            <Cover img={orderCoverImage} mainTitle="order" subTitle="Would you like to try a dish?" title="Order foods"></Cover>
            <div className="w-9/12 mx-auto my-20">
                <FoodTab></FoodTab>
            </div>
        </div>
    );
};

export default Order;