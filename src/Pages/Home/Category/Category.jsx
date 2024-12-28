import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Category image 
import sliderImage1 from '../../../assets/home/slide1.jpg'
import sliderImage2 from '../../../assets/home/slide2.jpg'
import sliderImage3 from '../../../assets/home/slide3.jpg'
import sliderImage4 from '../../../assets/home/slide4.jpg'
import sliderImage5 from '../../../assets/home/slide5.jpg'
import sliderImage6 from '../../../assets/home/slide2.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle subTitle={"From 11:00am to 10:00pm"} title={"ORDER ONLINE"}></SectionTitle>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-72' src={sliderImage1} alt="" />
                    <h3 className='text-4xl uppercase text-white text-center -mt-20 pb-24  font-silkscreen'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-72  ' src={sliderImage2} alt="" />
                    <h3 className='text-4xl uppercase text-white text-center -mt-20 pb-24  font-silkscreen'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-72 ' src={sliderImage3} alt="" />
                    <h3 className='text-4xl uppercase text-white text-center -mt-20 pb-24 font-silkscreen'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-72 ' src={sliderImage4} alt="" />
                    <h3 className='text-4xl uppercase text-white text-center -mt-20 pb-24 font-silkscreen'>desserts</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-72 ' src={sliderImage5} alt="" />
                    <h3 className='text-4xl uppercase text-white text-center -mt-20 pb-24 font-silkscreen'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-72 ' src={sliderImage6} alt="" />
                    <h3 className='text-4xl uppercase text-white text-center -mt-20 pb-24  font-silkscreen'>desserts</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;