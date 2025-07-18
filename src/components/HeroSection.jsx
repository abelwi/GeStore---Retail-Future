import React from 'react';
import bgImage from '../assets/img/slide-img-1.png'
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useVideoPlayer } from '../../js/video-control';

const HeroSection = () => {
    const { t } = useTranslation();

    const {
        videoRef,
        videoSrc,
        showPlayButton,
        handleCustomPlay,
    } = useVideoPlayer();
    return (
        <header id="home">
            <div
                className="relative min-h-[85vh] bg-cover bg-center "
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <span className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-0"></span>
                <div className="relative w-5/6 px-6 mx-auto container">
                    <div className="flex justify-between -translate-x-3 translate-y-2/3">
                        <div className="w-full xl:w-full 2xl:w-1/2 mx-auto my-auto order-2 pr-10 2xl:order-1">
                            <h1 className="text-white text-5xl font-extrabold fadeIn2 fadeInBottom">
                                {t('heroSection.heading')}
                            </h1>
                            <p className="text-lg text-white opacity-80 adeIn3 fadeInBottom">
                                {t('heroSection.subtext')}
                            </p>
                            <div className="w-[90%] flex items-center gap-4 my-6 flex-wrap">
                                <input
                                type="text"
                                className="flex-1 h-[45px] w-2/3 border border-gray-300 pl-4 bg-white rounded-lg text-sm transition-all duration-200 shadow-sm focus:border-[#007bff] focus:shadow-[0_4px_12px_rgba(0,123,255,0.09)] focus:outline-noneorm-control"
                                placeholder={t('heroSection.requestDemo.placeholder')}
                                />
                                <Button variant="solid" color="pink" size="large" className='w-1/3'>
                                    {t('Request A Demo')}
                                </Button>
                            </div>
                        </div>
                        <div className="w-full 2xl:w-1/2 mx-auto text-center my-auto flex justify-center py-0 order-2">
                            <div 
                            className="relative inline-block w-full max-w-[650px] bg-black rounded-[16px] overflow-hidden" 
                            id="introduceVideoWrapper"
                            >
                                <video
                                    className="w-full block rounded-[16px]"
                                    controls
                                    ref={videoRef}
                                >
                                    <source src={videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {showPlayButton && (
                                    <button
                                    aria-label="Play"
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 m-0 cursor-pointer z-10"
                                    onClick={handleCustomPlay}
                                    >
                                    <svg
                                        width="74"
                                        height="74"
                                        viewBox="0 0 74 74"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-[64px] h-[64px]"
                                    >
                                        <g opacity="0.81">
                                        <circle cx="37" cy="37" r="37" fill="black" fillOpacity="0.8" />
                                        <path
                                            d="M26.0568 23.1986C26.0568 20.8892 28.5568 19.4459 30.5568 20.6006L54.5642 34.4612C56.5642 35.6159 56.5642 38.5027 54.5642 39.6574L30.5568 53.5181C28.5568 54.6728 26.0568 53.2294 26.0568 50.92L26.0568 23.1986Z"
                                            fill="#004CFF"
                                        />
                                        </g>
                                    </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
