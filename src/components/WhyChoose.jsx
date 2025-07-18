import React from "react";
import checkIcon from '../assets/img/check-icon.png'
import { useTranslation } from 'react-i18next';

const ReasonToChoose = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto px-4">
            <div className="pt-5">
                <div className="row">
                    <div className="w-full text-center mx-auto mb-3">
                        <h2 className="text-3xl font-extrabold text-gray-700">{t('reasons.title')}</h2>
                        <p className="text-gray-500">{t('reasons.description')}</p>
                    </div>
                </div>
            </div>   
      
            <div className="mt-10">
                <div className="grid grid-cols-3 gap-4">
                    <div className="mb-5">
                        <div className="mb-2">
                            <img className="w-[30px]" src={checkIcon} alt="Check Icon" />
                        </div>
                        <h6 className="text-gray-600">{t('reasons.reason1.title')}</h6>
                    </div>
                    <div className="mb-5">
                        <div className="mb-2">
                            <img className="w-[30px]" src={checkIcon} alt="Check Icon"/>
                        </div>
                        <h6 className="text-gray-600">{t('reasons.reason2.title')}</h6>    
                    </div>
                    <div className="mb-5">
                        <div className="mb-2">
                            <img className="w-[30px]" src={checkIcon} alt="Check Icon" />
                        </div>
                        <h6 className="text-gray-600">{t('reasons.reason3.title')}</h6>   
                    </div>
                    <div className="mb-5">
                        <div className="mb-2">
                            <img className="w-[30px]" src={checkIcon} alt="Check Icon" />
                        </div>
                        <h6 className="text-gray-600">{t('reasons.reason4.title')}</h6>
                    </div>
                    <div className="mb-5">
                        <div className="mb-2">
                            <img className="w-[30px]" src={checkIcon} alt="Check Icon" />
                        </div>
                        <h6 className="text-gray-600">{t('reasons.reason5.title')}</h6>
                    </div>
                    <div className="mb-5">
                        <div className="mb-2">
                            <img className="w-[30px]" src={checkIcon} alt="Check Icon" />
                        </div>
                        <h6 className="text-gray-600">{t('reasons.reason6.title')}</h6>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default ReasonToChoose;