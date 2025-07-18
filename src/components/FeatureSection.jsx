import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const FeaturesSection = forwardRef((props, ref) => {
  const { t } = useTranslation();

  return (
    <div ref={ref}>
      <section className="pt-5" id="features">
        <div className="mx-auto px-4 container">
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="w-full md:w-1/2 px-4 my-6">
              <h1 className="text-3xl text-gray-600">{t('Features')}</h1>
            </div>
            <div className="w-full md:w-1/2 px-4 mb-6">{/* Empty right section */}</div>

            <div className="w-full md:w-1/2 px-4 mb-6">
              <div className="bg-white drop-shadow-lg shadow-inner p-6 rounded-lg h-full">
                <div className="pb-5">
                  <FontAwesomeIcon icon={faBell} className="fa fa-solid fa-bell text-gradient fa-2x text-primary" />
                </div>
                <h5 className="mt-4 text-gray-700 text-lg font-semibold">{t('feature.feature1.title')}</h5>
                <p className="text-sm text-gray-500 font-light">{t('feature.feature1.description')}</p>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4 mb-6">
              <div className="bg-white drop-shadow-lg shadow-inner p-6 rounded-lg h-full">
                <div className="pb-5">
                  <FontAwesomeIcon icon={faChartLine} className="fa fa-solid fa-bell text-2xl" />
                </div>
                <h5 className="mt-4 text-gray-700 text-lg font-semibold">{t('feature.feature2.title')}</h5>
                <p className="text-sm text-gray-500 font-light">{t('feature.feature2.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default FeaturesSection;
