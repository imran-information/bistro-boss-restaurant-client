import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title, subTitle, mainTitle }) => {
    return (
        <>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >

                <div className={`hero h-[700px]`}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="py-32 px-96 bg-opacity-60 bg-black  text-white">
                            <div className="max-w-3xl">
                                <h1 className={`mb-3 font-medium  uppercase ${mainTitle ? 'text-7xl' : 'text-4xl'}`}>{title}</h1>
                                <p className="mb-5 p-0 leading-6 uppercase"> {subTitle} </p>
                            </div>
                        </div>
                    </div>

                </div>

            </Parallax >

        </>
    );
};

export default Cover;