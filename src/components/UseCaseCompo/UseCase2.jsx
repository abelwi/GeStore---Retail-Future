import React, { useState } from "react";
import useCaseEmpty1 from '../../assets/img/usecase-empty-shelf-1.png'
import useCaseEmpty2 from '../../assets/img/usecase-empty-shelf-2.png'
import { Button } from "antd";
import { useTranslation } from 'react-i18next';

const UseCase2 = ({
    onScrollToContact,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        { src: useCaseEmpty1, alt: "Empty Shelves Monitoring 1" },
        { src: useCaseEmpty2, alt: "Empty Shelves Monitoring 2" },
    ];

    const { t } = useTranslation();

    return (
        <div className="mb-5">
            <div className="pb-5">
                <h4 className="font-extrabold text-2xl text-gray-600">{t('useCases.useCase2.heading')}</h4>
            </div>
            <div className="flex flex-col lg:flex-row space-x-10">
                {/* Image column */}
                <div className="w-full lg:w-1/2">
                    <div id="useCase2SliderControls" className="flex flex-col overflow-hidden justify-center items-center">
                        <div className="mb-5 w-full overflow-hidden relative h-[400px]">
                        {images.map((image, index) => (
                            <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={`h-[400px] absolute top-0 left-0 transition-opacity duration-500 ${
                                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                            />
                        ))}
                        </div>
                        {/* Carousel Indicators */}
                        <div className="flex justify-center gap-3 mt-5">
                        {images.map((_, index) => (
                            <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${
                                index === activeIndex ? "bg-pink-600" : "bg-gray-300"
                            }`}
                            aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                        </div>
                    </div>
                </div>

                {/* Text column */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col justify-start">
                    <ul className="list-none p-0 m-0">
                        <li className="flex items-start py-5 border-b border-gray-200 text-sm last:border-b-0">
                        <span className="text-green-500 mr-2 text-lg mt-[2px]">■</span>
                        <span>{t('useCases.useCase2.features.feature1.detail1')}</span>
                        </li>
                        <li className="flex items-start py-5 border-b border-gray-200 text-sm last:border-b-0">
                        <span className="text-green-500 mr-2 text-lg mt-[2px]">■</span>
                        <span>{t('useCases.useCase2.features.feature1.detail2')}</span>
                        </li>
                    </ul>

                    <div className="mt-3 mb-3">
                        <Button variant="solid" color="pink" size="large" className="w-1/3" onClick={onScrollToContact}>
                            {t('Request A Demo')}
                        </Button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    ); 
}

export default UseCase2;