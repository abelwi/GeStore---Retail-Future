import React, { forwardRef } from "react";
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const ContactSection = forwardRef((props, ref) => {
    const { t } = useTranslation();

    return (
        <section ref={ref} className="py-14 mt-10 relative bg-gradient-to-b from-gray-700 to-gray-900" id="cta">
            <div className="">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 mx-auto text-center">
                        <h3 className="text-white mb-3 text-3xl font-extrabold">{t('ctaSection.heading')}</h3>
                        <p className="text-white">{t('ctaSection.subtext')}</p>
                        <div className="flex flex-col gap-2 pt-4">
                            <div className="flex flex-wrap">
                                <div className="w-1/3 px-2">
                                    <input
                                    type="text" 
                                    className="flex-1 h-[45px] w-full border border-gray-300 pl-4 bg-white rounded-lg text-sm transition-all duration-200 shadow-sm focus:border-[#ab3696] focus:shadow-[0_4px_12px_rgba(0,123,255,0.09)] focus:outline-noneorm-control"
                                    placeholder={t('ctaSection.formSection.namePlaceholder')} 
                                    />
                                </div>
                                <div className="w-2/3 px-2">
                                    <input type="text" className="flex-1 h-[45px] w-full border border-gray-300 pl-4 bg-white rounded-lg text-sm transition-all duration-200 shadow-sm focus:border-[#ab3696] focus:shadow-[0_4px_12px_rgba(0,123,255,0.09)] focus:outline-noneorm-control"
                                        placeholder={t('ctaSection.formSection.businessEmailPlaceholder')} />
                                </div>
                            </div>
                            <div className="px-2">
                                <textarea type="text" className="flex-1 h-52 w-full border border-gray-300 pl-4 pt-4 bg-white rounded-lg text-sm transition-all duration-200 shadow-sm focus:border-[#ab3696] focus:shadow-[0_4px_12px_rgba(0,123,255,0.09)] focus:outline-noneorm-control"
                                    placeholder={t('ctaSection.formSection.messagePlaceholder')}></textarea>
                            </div>
                            <div>
                                <Button variant="solid" color="pink" size="large" className='w-1/3'>
                                    {t('Request A Demo')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default ContactSection;