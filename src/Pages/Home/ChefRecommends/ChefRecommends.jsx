import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FoodCard from '../../../components/FoodCard/FoodCard';
import useMenu from '../../../hooks/useMenu';

const ChefRecommends = () => {
    const [menu, loading] = useMenu()
    const offeredMenu = menu.filter(item => item.category === 'offered')

    if (loading) return <h1 className='text-4xl text-center'>Loading.....</h1>

    return (
        <section>
            <SectionTitle subTitle="Should Try" title="Recommends"></SectionTitle>

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    offeredMenu.map(item => <FoodCard key={item._id} items={item}></FoodCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecommends;