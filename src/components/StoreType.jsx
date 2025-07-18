import React from "react";
import { useTranslation } from 'react-i18next';

const StoreType = () => {
    const { t } = useTranslation();

    return (   
        <div className="container mx-auto px-4 mt-16">
            <div className="flex flex-wrap mt-4 text-2xl text-gray-600">
                <div className="w-1/2 md:w-1/3 lg:w-1/4 mb-4 flex justify-center items-center">
                    <h4 className="mb-4 text-center">{t('storeTypes.type1')}</h4>
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/4 mb-4 flex justify-center items-center">
                    <h4 className="mb-4 text-center">{t('storeTypes.type2')}</h4>
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/4 mb-4 flex justify-center items-center">
                    <h4 className="mb-4 text-center">{t('storeTypes.type3')}</h4>
                </div>
                <div className="w-1/2 md:w-1/3 lg:w-1/4 mb-4 flex justify-center items-center">
                    <h4 className="mb-4 text-center">{t('storeTypes.type4')}</h4>
                </div>
            </div>
        </div>
    );
}

export default StoreType;