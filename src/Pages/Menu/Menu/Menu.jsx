import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import FromOurMenu from '../../Home/FromOurMenu/FromOurMenu';
import coverImg1 from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <>
            <div>
                <Cover img={coverImg1} subTitle={"Would you like to try a dish?"} title={"OUR MENU"}></Cover>
                <div className="w-9/12 mx-auto my-20">
                    <FromOurMenu></FromOurMenu>
                </div>
                <Cover img={coverImg1} subTitle={"Would you like to try a dish?"} title={"OUR MENU"}></Cover>
                <div className="w-9/12 mx-auto my-20">
                    <FromOurMenu></FromOurMenu>
                </div>
                <Cover img={coverImg1} subTitle={"Would you like to try a dish?"} title={"OUR MENU"}></Cover>
                <div className="w-9/12 mx-auto my-20">
                    <FromOurMenu></FromOurMenu>
                </div>
                <Cover img={coverImg1} subTitle={"Would you like to try a dish?"} title={"OUR MENU"}></Cover>
                <div className="w-9/12 mx-auto my-20">
                    <FromOurMenu></FromOurMenu>
                </div>
                <Cover img={coverImg1} subTitle={"Would you like to try a dish?"} title={"OUR MENU"}></Cover>
                <div className="w-9/12 mx-auto my-20">
                    <FromOurMenu></FromOurMenu>
                </div>
            </div>
        </>
    );
};

export default Menu;