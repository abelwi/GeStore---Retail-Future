import React, { useState } from "react";
import { Button } from "antd";
import useCaseMkt1 from '../../assets/img/usecase-marketing-1.png';
import useCaseMkt2 from '../../assets/img/usecase-marketing-2.png';
import { useTranslation } from 'react-i18next';

const UseCase3 = ({
    onScrollToContact,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
            { src: useCaseMkt1, alt: "Media Marketing Optimization" },
            { src: useCaseMkt2, alt: "Media Marketing Optimization" },
        ];

        const { t } = useTranslation();

    return (
        <div className="flex justify-between items-stretch my-10">
            <div className="w-full lg:w-1/2 pe-0 lg:pe-5">
                <div className="mb-4">
                    <h4 className="font-extrabold text-gray-600 text-2xl">{t('useCases.useCase3.heading')}</h4>
                </div>
                <div className="flex flex-col justify-start usecase-list-section">
                    <ul className="text-gray-500">
                        <li className="flex items-start">
                            <span className="usecase-item-dot"></span>
                            <span className="list-text">
                                {t('useCases.useCase3.features.feature1.detail1')}
                            </span>
                        </li>
                        <li className="d-flex align-items-start">
                            <span className="usecase-item-dot"></span>
                            <span className="list-text">
                                {t('useCases.useCase3.features.feature1.detail2')}
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="usecase-item-dot"></span>
                            <span className="list-text">
                                {t('useCases.useCase3.features.feature1.detail3')}
                            </span>
                        </li>
                    </ul>
                    <div className="mt-3 mb-3">
                        <Button variant="solid" color="pink" size="large" className="w-1/3" onClick={onScrollToContact}>
                            {t('Request A Demo')}
                        </Button>
                    </div>
                </div>
            </div>
            {/* Image column */}
            <div className="w-full lg:w-1/2">
                <div id="useCase2SliderControls" className="flex flex-col overflow-hidden">
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
        </div>
    );
}

export default UseCase3;