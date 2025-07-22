import React from "react";
import Logo from "../assets/img/logo-store.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faPinterest,
//   faGithub
// } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const FooterSection = () => {
    const { t } = useTranslation();

    return (
        <footer className="py-18 container mx-auto px-4">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/4 mb-5 lg:mb-0">
                        <img src={Logo} alt="Logo" className="cursor-pointer w-[110px]" />
                        <p className="text-left pt-3 text-gray-400" data-i18n-key="">{t('footer.slogan')}</p>
                        {/* <div className="text-left space-x-8 mt-10">
                            <a className="text-gray-400">
                                <FontAwesomeIcon icon={faFacebook} className="text-lg" />
                            </a>
                            <a className="text-gray-400">
                                <FontAwesomeIcon icon={faTwitter} className="text-lg" />
                            </a>
                            <a className="text-gray-400">
                                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                            </a>
                            <a className="text-gray-400">
                                <FontAwesomeIcon icon={faPinterest} className="text-lg" />
                            </a>
                            <a className="text-gray-400">
                                <FontAwesomeIcon icon={faGithub} className="text-lg" />
                            </a>
                        </div> */}
                    </div>
                    <div className="w-1/2 md:w-1/6 lg:ml-auto mb-4 md:mb-0 pl-10">
                        <h6 className="text-gray-700 pb-2">{t('footer.company.title')} </h6>
                        <ul className="flex-column ms-n3 nav space-y-2 text-gray-400">
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="javascript:void(0);">
                                    {t('footer.company.terms')}
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="javascript:;">
                                    {t('footer.company.about')}
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="javascript:;">
                                    {t('footer.company.team')}
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="javascript:;">
                                    {t('footer.company.privacy')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-1/2 md:w-1/6 lg:ml-auto mb-4 md:mb-0 pl-10">
                        <h6 className="text-gray-700 pb-2">{t('footer.pages.title')} </h6>
                        <ul className="flex-column ms-n3 nav space-y-2 text-gray-400">
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="javascript:;">
                                    {t('footer.pages.feature')}
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="javascript:;">
                                    {t('footer.pages.useCase')}
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="javascript:;">
                                    {t('footer.pages.howItWork')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-1/2 md:w-1/6 lg:ml-auto mb-4 md:mb-0 pl-10">
                        <h6 className="text-gray-700 pb-2">{t('footer.resources.title')}</h6>
                        <ul className="flex-column ms-n3 nav space-y-2 text-gray-400">
                            <li className="nav-item">
                                <a className="nav-link text-secondary" href="javascript:;">
                                    {t('footer.resources.blog')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 lg:mt-20 mb-1 sm:mb-4">
                    <div className="flex flex-wrap mt-5">
                        <div className="w-8/12 lg:mx-auto lg:text-center">
                            <p className="border-t border-gray-300"></p>
                            <p className="text-gray-400">
                                {t('footer.copyright')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;