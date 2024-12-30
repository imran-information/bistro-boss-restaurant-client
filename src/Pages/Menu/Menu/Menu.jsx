import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import coverImg1 from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu';


const Menu = () => {
    const [menu, loading] = useMenu()
    const offeredMenu = menu.filter(item => item.category === 'offered')
    const dessertsMenu = menu.filter(item => item.category === 'dessert')
    const pizzasMenu = menu.filter(item => item.category === 'pizza')
    const saladsMenu = menu.filter(item => item.category === 'salad')
    const soupsMenu = menu.filter(item => item.category === 'soup')
    if (loading) return <h1 className='text-4xl text-center'>Loading.....</h1>
    return (
        <>
            <div>
                {/* main Cover  */}
                <Cover img={coverImg1} subTitle={"Would you like to try a dish?"} title={"OUR MENU"} mainTitle='mainTile'></Cover>

                {/* TODAY'S OFFER  */}
                <div className="w-9/12 mx-auto my-20">
                    <MenuCategory subTitle="Don't miss" title="TODAY'S OFFER" btnText="ORDER YOUR FAVOURITE FOOD" items={offeredMenu} ></MenuCategory>
                </div>

                {/* desserts items  */}
                <Cover img={dessertImg} subTitle={"Perfect for intimate dinners, corporate events, or special celebrations, BISTRO BOSS is more than a meal – it’s a memory waiting to be made."} title={"DESSERTS"}></Cover>
                <div className="w-9/12 mx-auto my-20">
                    <MenuCategory subTitle="" title="" btnText="ORDER YOUR FAVOURITE FOOD" items={dessertsMenu} ></MenuCategory>
                </div>

                {/* Pizza items  */}
                <Cover img={pizzaImg} subTitle={"Perfect for intimate dinners, corporate events, or special celebrations, BISTRO BOSS is more than a meal – it’s a memory waiting to be made."} title={"pizzas"}></Cover>
                <div className="w-9/12 mx-auto my-20">
                    <MenuCategory subTitle="" title="" btnText="ORDER YOUR FAVOURITE FOOD" items={pizzasMenu} ></MenuCategory>
                </div>

                {/* Salads items  */}
                <Cover img={saladImg} subTitle={"Perfect for intimate dinners, corporate events, or special celebrations, BISTRO BOSS is more than a meal – it’s a memory waiting to be made."} title={"Salads"}></Cover>
                <div className="w-9/12 mx-auto my-20">
                    <MenuCategory subTitle="" title="" btnText="ORDER YOUR FAVOURITE FOOD" items={saladsMenu} ></MenuCategory>
                </div>

                {/* Soups items  */}
                <Cover img={soupImg} subTitle={"Perfect for intimate dinners, corporate events, or special celebrations, BISTRO BOSS is more than a meal – it’s a memory waiting to be made."} title={"Soups"}></Cover>
                <div className="w-9/12 mx-auto my-20">
                    <MenuCategory subTitle="" title="" btnText="ORDER YOUR FAVOURITE FOOD" items={soupsMenu} ></MenuCategory>
                </div>

            </div>
        </>
    );
};

export default Menu;