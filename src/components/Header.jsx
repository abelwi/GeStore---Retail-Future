import React from "react";
import Logo from "../assets/img/logo-store.svg";
import { Button } from 'antd';
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useTranslation } from 'react-i18next';

const Header = ({
  onScrollToFeatures,
  onScrollToUseCases,
  onScrollToHowItWork,
  onScrollToContact,
}) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('userLanguage', lang);
  };
  const langLabelMap = {
    en: 'English',
    vi: 'Tiếng Việt',
    ja: '日本語',
    ko: '한국어',
  };

  const items = [
    { key: 'en', label: 'English', onClick: () => changeLanguage('en') },
    { key: 'vi', label: 'Tiếng Việt', onClick: () => changeLanguage('vi') },
    { key: 'ja', label: '日本語', onClick: () => changeLanguage('ja') },
    { key: 'ko', label: '한국어', onClick: () => changeLanguage('ko') },
  ];

  return (
    <nav>
      <div className="fixed top-0 left-0 w-full h-1/12 bg-white z-50 mx-auto px-20 flex justify-between items-center py-12">
        <img src={Logo} alt="Logo" className=" cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}/>

        {/* Hamburger button */}
        {/* <button
          className="text-gray-600 lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </div>
        </button> */}

        {/* Menu */}
        <div
          className="absolute top-full left-0 w-full bg-transparent lg:static lg:block lg:w-auto"
        >
            <div className="flex flex-col lg:flex-row lg:space-x-10 p-4 lg:p-0">
                <li className="mx-2 flex items-center">
                  <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-md text-gray-600 hover:text-gray-500 font-semibold pl-2 cursor-pointer">
                      {t('Home')}
                  </a>
                </li>
                <li className="mx-2 flex items-center">
                  <a onClick={onScrollToFeatures} className="text-md text-gray-600 hover:text-gray-500 font-semibold pl-2 cursor-pointer">
                      {t('Features')}
                  </a>
                </li>
                <li className="mx-2 flex items-center">
                  <a onClick={onScrollToUseCases} className="text-md text-gray-600 hover:text-gray-500 font-semibold pl-2 cursor-pointer no-underline">
                      {t('Use Case Highlights')}
                  </a>
                </li>
              <li className="mx-2 flex items-center">
                    <a onClick={onScrollToHowItWork} className="text-md text-gray-600 hover:text-gray-500 font-semibold pl-2 cursor-pointer no-underline">
                        {t('How it works')}
                    </a>
                </li>
                <li className="mx-2 flex items-center">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[18px] h-[18px] inline-block align-middle">
                            <path
                                d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9l2.3 0c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z" />
                        </svg>
                 
                        <Dropdown menu={{ items }}>
                          <a onClick={(e) => e.preventDefault()}>
                            <Space>
                              {langLabelMap[i18n.language]}
                            </Space>
                          </a>
                        </Dropdown>
                    </div>
                </li>
                <li className="mx-2 flex items-center">
                    <div className="py-4">
                        <Button variant="solid" color="pink" size="large"  onClick={onScrollToContact}>
                            {t('Request A Demo')}
                        </Button>
                    </div>
                </li>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
