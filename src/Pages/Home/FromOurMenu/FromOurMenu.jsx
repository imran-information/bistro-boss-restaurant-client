import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import PopularItem from '../../../components/PopularItem/PopularItem';

const FromOurMenu = () => {
    const [menu, loading] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    );

    return (
        <section className="py-8">
            <SectionTitle subTitle={"Check it Out"} title={"FROM OUR MENU"} />

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-12">
                {popularMenu.map(item => (
                    <PopularItem key={item._id} item={item} />
                ))}
            </div>

            <div className="flex justify-center mt-8 md:mt-12 mb-4 md:mb-8">
                <button className="btn btn-outline border-0 border-b-4 uppercase px-8 py-2 md:px-10 md:py-3 text-sm md:text-base">
                    View Full Menu
                </button>
            </div>
        </section>
    );
};

export default FromOurMenu;