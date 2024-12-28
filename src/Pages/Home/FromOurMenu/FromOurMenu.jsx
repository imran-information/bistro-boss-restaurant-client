import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import axios from 'axios';
import PopularItem from '../../../components/PopularItem/PopularItem';

const FromOurMenu = () => {
    const [popularMenu, setPopularMenu] = useState([])

    useEffect(() => {
        // const { data } = axios.get('../menu.json');
        fetch('../menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(popularMenu => popularMenu.category === 'popular');
                setPopularMenu(popularItems)
            })


    }, [])

    return (
        <section>
            <SectionTitle subTitle={"Check it Out"} title={"FROM OUR MENU"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {
                    popularMenu.map(item => <PopularItem key={item._id} item={item}></PopularItem>)
                }
            </div>
        </section>
    );
};

export default FromOurMenu;