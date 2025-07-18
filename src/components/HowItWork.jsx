import React, { forwardRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const HowItWork = forwardRef((props, ref) => {

    const { t } = useTranslation();

    return (
        <div ref={ref} className="container mx-auto px-4 mt-10">
            <div id="how-it-works" className="py-5">
                <div className="row">
                    <div className="w-full sm:w-10/10 text-center mx-auto mb-3">
                        <h2 className="text-3xl font-extrabold text-gray-700">{t('howItWork.heading')}</h2>
                        <p className="text-gray-500">{t('howItWork.subtext')}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex flex-wrap pt-3 justify-between">
                    <div className="w-full md:w-1/4">
                        <div className="flex flex-col items-center justify-start">
                            <div
                                className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 shadow flex items-center justify-center mb-2">
                                <span className="text-white text-base font-bold">1</span>
                            </div>
                            <h6 className="text-center text-gray-600 px-5">{t('howItWork.step1')}</h6>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mb-5">
                        <div className="flex flex-col items-center justify-start">
                            <div
                                className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 shadow flex items-center justify-center mb-2">
                                <span className="text-white text-base font-bold">2</span>
                            </div>
                            <h6 className="text-center text-gray-600 px-5">{t('howItWork.step2')}</h6>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mb-5">
                        <div className="flex flex-col items-center justify-start">
                            <div
                                className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 shadow flex items-center justify-center mb-2">
                                <span className="text-white text-base font-bold">3</span>
                            </div>
                            <h6 className="text-center text-gray-600 px-5">{t('howItWork.step3')}</h6>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 mb-5">
                        <div className="flex flex-col items-center justify-start">
                            <div
                                className="w-10 h-10 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 shadow flex items-center justify-center mb-2">
                                <span className="text-white text-base font-bold">4</span>
                            </div>
                            <h6 className="text-center text-gray-600 px-5">{t('howItWork.step4')}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default HowItWork;