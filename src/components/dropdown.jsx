import React, { useState } from 'react';
import TokenService from "../services/token.service";
import {useLocation, useNavigate} from 'react-router-dom';
import { useTranslation } from "react-i18next";


const Dropdown = () => {
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.clear();
        setIsOpen(false);
        navigate(pathname);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex justify-start items-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-900 focus:outline-none"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                >
                    <span className="mr-3">
                        <svg width="40" height="40" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="56" height="56" rx="28" fill="#667085" fillOpacity="0.1"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.6528 20.4857C20.6528 16.0546 24.1661 12.4624 28.5 12.4624C32.8339 12.4624 36.3472 16.0546 36.3472 20.4857C36.3472 24.9168 32.8339 28.509 28.5 28.509C24.1661 28.509 20.6528 24.9168 20.6528 20.4857ZM16.6734 34.0683C18.145 32.5636 20.141 31.7183 22.2222 31.7183H34.7778C36.859 31.7183 38.855 32.5636 40.3266 34.0683C41.7982 35.573 42.625 37.6137 42.625 39.7416V42.9509C42.625 43.8372 41.9749 44.7313 41.0556 45.3579C40.1362 45.9846 36.7675 46.9589 34.0051 47.344C29.4505 47.979 26.7616 47.9061 22.2222 47.1655C19.7267 46.7583 16.7276 45.9415 15.9444 45.3579C15.0515 44.6925 14.375 43.8372 14.375 42.9509V39.7416C14.375 37.6137 15.2018 35.573 16.6734 34.0683Z" fill="#667085" fillOpacity="0.4"/>
                        </svg>
                    </span>

                    <span className="text-sm text-gray-900 font-inter">
                        {TokenService.getUserName()}
                    </span>

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 rounded-md shadow-lg bg-white p-3 z-10">
                    <div className="w-full">
                        <div className="flex flex-row justify-start items-center pb-[18px] border-b border-gray-200">
                            <div className="mr-3">
                                <svg width="40" height="40" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="56" height="56" rx="28" fill="#667085" fillOpacity="0.1"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.6528 20.4857C20.6528 16.0546 24.1661 12.4624 28.5 12.4624C32.8339 12.4624 36.3472 16.0546 36.3472 20.4857C36.3472 24.9168 32.8339 28.509 28.5 28.509C24.1661 28.509 20.6528 24.9168 20.6528 20.4857ZM16.6734 34.0683C18.145 32.5636 20.141 31.7183 22.2222 31.7183H34.7778C36.859 31.7183 38.855 32.5636 40.3266 34.0683C41.7982 35.573 42.625 37.6137 42.625 39.7416V42.9509C42.625 43.8372 41.9749 44.7313 41.0556 45.3579C40.1362 45.9846 36.7675 46.9589 34.0051 47.344C29.4505 47.979 26.7616 47.9061 22.2222 47.1655C19.7267 46.7583 16.7276 45.9415 15.9444 45.3579C15.0515 44.6925 14.375 43.8372 14.375 42.9509V39.7416C14.375 37.6137 15.2018 35.573 16.6734 34.0683Z" fill="#667085" fillOpacity="0.4"/>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center items-start">
                                <p
                                    className="text-sm font-inter text-gray-900 underline cursor-pointer" onClick={() => {
                                    navigate(`/user/${TokenService.getUserId()}`);
                                    setIsOpen(false);
                                    }}
                                >
                                    {TokenService.getUserName()}
                                </p>
                                <p className="text-sm font-inter text-gray-500">{TokenService.getUserEmail()}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            <svg className="mr-3"
                                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.6665 2H3.99984C3.64622 2 3.30708 2.14048 3.05703 2.39052C2.80698 2.64057 2.6665 2.97971 2.6665 3.33333V12.6667C2.6665 13.4 3.2665 14 3.99984 14H6.6665M10.6665 11.3333L13.9998 8L10.6665 4.66667M13.1998 8H5.99984" stroke="#667085" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {t("Log Out")}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;