import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PopularItem from '../../../components/PopularItem/PopularItem';

const MenuCategory = ({ subTitle, title, items, btnText }) => {

    return (
        <div>
            {title && <SectionTitle subTitle={subTitle} title={title}></SectionTitle>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {
                    items.map(item => <PopularItem key={item._id} item={item}></PopularItem>)
                }
            </div>
            <div className="flex  justify-center my-10 items-center">
                <button className="btn btn-outline border-0 border-b-4 uppercase">{btnText}</button>
            </div>
        </div>
    );
};

export default MenuCategory;