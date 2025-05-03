import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Category images
import sliderImage1 from '../../../assets/home/slide1.jpg';
import sliderImage2 from '../../../assets/home/slide2.jpg';
import sliderImage3 from '../../../assets/home/slide3.jpg';
import sliderImage4 from '../../../assets/home/slide4.jpg';
import sliderImage5 from '../../../assets/home/slide5.jpg';
import sliderImage6 from '../../../assets/home/slide2.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className="">
            <SectionTitle subTitle={"From 11:00am to 10:00pm"} title={"ORDER ONLINE"} />

            <div className="py-6 md:py-10">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 25
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        }
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {[sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6].map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={img}
                                    alt={`Category ${index + 1}`}
                                    className="w-full h-48 sm:h-56 md:h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                                    <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-white text-center font-silkscreen'>
                                        {['Salads', 'Soups', 'Desserts', 'Desserts', 'Salads', 'Desserts'][index]}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Category;