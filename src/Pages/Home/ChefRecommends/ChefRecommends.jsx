import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FoodCard from '../../../components/FoodCard/FoodCard';
import useMenu from '../../../hooks/useMenu';

const ChefRecommends = () => {
    const [menu, loading] = useMenu();
    const offeredMenu = menu.filter(item => item.category === 'offered');

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            </div>
        </div>
    );

    return (
        <section className="py-12">
            <SectionTitle subTitle="Should Try" title="Chef's Recommendations" />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {offeredMenu.map(item => (
                    <FoodCard key={item._id} items={item} />
                ))}
            </div>
        </section>
    );
};

export default ChefRecommends;