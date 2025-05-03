import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/home/01.jpg';
import bannerImg2 from '../../../assets/home/02.jpg';
import bannerImg3 from '../../../assets/home/03.png';
import bannerImg4 from '../../../assets/home/04.jpg';
import bannerImg5 from '../../../assets/home/05.png';
import bannerImg6 from '../../../assets/home/06.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className="relative ">
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                transitionTime={800}
                showArrows={false}
                showStatus={false}
                showThumbs={true}
                emulateTouch={true}
                swipeable={true}
                dynamicHeight={false}
                centerMode={false}
                className="carousel-container "
            >
                {[bannerImg1, bannerImg2, bannerImg3, bannerImg4, bannerImg5, bannerImg6].map((img, index) => (
                    <div key={index} className="carousel-slide">
                        <img
                            src={img}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-auto object-cover"
                            style={{ maxHeight: '90vh' }}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;