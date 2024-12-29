import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >

                <div className={`hero h-[800px]`}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="py-32 px-96 bg-opacity-60 bg-black  text-white">
                            <div className="max-w-3xl">
                                <h1 className="mb-3 text-7xl font-medium  uppercase">{title}</h1>
                                <p className="mb-5 leading-6 uppercase"> {subTitle} </p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </Parallax>

        </>
    );
};

export default Cover;