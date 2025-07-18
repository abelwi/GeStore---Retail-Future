import React, { forwardRef } from 'react';
import UseCase1 from './UseCaseCompo/UseCase1';
import UseCase2 from './UseCaseCompo/UseCase2';
import UseCase3 from './UseCaseCompo/UseCase3';
import { useTranslation } from 'react-i18next';

const UseCasesSection = forwardRef(({ onScrollToContact }, ref) => {
    const { t } = useTranslation();

    return (
        <div ref={ref} className='pt-10' id='use-case'>
            <div className='container mx-auto px-4'>
                <div>
                    <h3 className='text-3xl font-extrabold text-gray-700'>{t('Use Case Highlights')}</h3>
                </div>
                <UseCase1 onScrollToContact={onScrollToContact} />
                <UseCase2 onScrollToContact={onScrollToContact} />
                <UseCase3 onScrollToContact={onScrollToContact} />
            </div>
        </div>
    );
});

export default UseCasesSection;
