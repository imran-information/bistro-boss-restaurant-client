import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    // Custom quote icon component
    const QuoteIcon = () => (
        <svg width="30" height="30" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.615 19.154L21.1533 19.154C19.5506 19.154 18.1881 18.5935 17.0662 17.4716C15.9449 16.3497 15.3835 14.9876 15.3835 13.3845V11.4623C15.3835 7.2152 16.8862 3.5897 19.8914 0.5846C22.8963 -2.4195 26.5225 -3.9222 30.7691 -3.9222H34.615C35.6565 -3.9222 36.5576 -4.303 37.3191 -5.0639C38.0803 -5.8253 38.4608 -6.7264 38.4608 -7.7681V-15.4611C38.4608 -16.5026 38.0801 -17.4046 37.3191 -18.1659C36.5578 -18.9262 35.6567 -19.3076 34.615 -19.3076L30.7691 -19.3076C26.602 -19.3076 22.6265 -18.4955 18.84 -16.8737C15.0539 -15.2508 11.7791 -13.0571 9.01428 -10.2923C6.2497 -7.5288 4.0566 -4.2538 2.43393 -0.4672C0.811258 3.3188 -0.000183105 7.2954 -0.000183105 11.4621L-0.000183105 53.7688C-0.000183105 56.9756 1.1211 59.6985 3.36472 61.9429C5.60854 64.1861 8.33355 65.3076 11.5385 65.3076H34.6164C37.8212 65.3076 40.5453 64.1861 42.7894 61.9429C45.0326 59.6985 46.1545 56.9756 46.1545 53.7688V30.6929C46.1545 27.4867 45.0326 24.7638 42.7879 22.5191C40.5449 20.2762 37.8197 19.154 34.615 19.154Z" fill="#d4af37" />
        </svg>
    );

    return (
        <section className="w-full bg-gray-50 overflow-hidden py-20 px-5 md:px-0">
            <div className="md:w-9/12 mx-auto ">
                <SectionTitle
                    subTitle="What Our Clients Say"
                    title="Testimonials"
                    textColor="text-gray-900"
                />

                <div className="mt-12">
                    <Swiper
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50
                            }
                        }}
                        className="relative"
                    >
                        {reviews.map(review => (
                            <SwiperSlide key={review._id}>
                                <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
                                    <div className="flex items-center justify-center mb-4">
                                        <QuoteIcon />
                                    </div>
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={review.rating}
                                        readOnly
                                        className="mb-6"
                                    />
                                    <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed line-clamp-3">
                                        {review.details}
                                    </p>
                                    <h4 className="text-xl font-semibold text-amber-500 mt-auto">
                                        {review.name}
                                    </h4>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Custom navigation buttons */}
                        <div className="swiper-button-prev !text-amber-500 !left-0"></div>
                        <div className="swiper-button-next !text-amber-500 !right-0"></div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;