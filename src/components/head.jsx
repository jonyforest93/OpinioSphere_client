import React, {useEffect} from "react";
import {useState} from "react";
import ButtonAuth from "./buttonAuth";
import ModalAuth from "./modalAuth";
import ButtonSignUp from "./buttonSignUp";
import ModalReg from "./modalRed";
import ThemeSwitcher from "./themeSwitcher";
import TokenService from "../services/token.service";
import {useNavigate, useLocation} from "react-router-dom";
import Dropdown from "./dropdown";
import LanguageSwitcher from "./languageSwitcher";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";


const Head = ({onSearch}) => {
    const { isDarkTheme } = useTheme();
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const [isAuth, setIsAuth] = useState(false);
    const [isReg, setIsReg] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (isMenuOpen || isAuth || isReg) {
            onSearch('')
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isMenuOpen, isAuth, isReg]);

    const isAuthorized = () => {
        return !!TokenService.getToken()
    }

    const handleButtonAuth = (event) => {
        setIsReg(false);
        setIsAuth(true)
    };
    const handleButtonRegistration = (event) => {
        setIsAuth(false);
        setIsReg(true)
    }
    const handleCloseModal = () => {
        setIsAuth(false);
        setIsReg(false);
    }

    const handleLogout = () => {
        localStorage.clear();
        setIsMenuOpen(false);
        navigate(pathname);
    };

    return (
        <>
            <div className={`z-50 fixed top-0 left-0 w-full flex justify-center items-center ${isDarkTheme ? 'bg-backgroundDark text-textDark' : 'bg-white text-gray-900'}`}>
                <div className="relative container w-full h-[72px] p-2 flex justify-between md:hidden">
                    <div className={`flex justify-start items-center`}>
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2.5">
                            <g filter="url(#filter0_dd_7_2319)">
                                <g clipPath="url(#clip0_7_2319)">
                                    <rect x="3" y="2" width="32" height="32" rx="8" fill="white"/>
                                    <rect x="3" y="2" width="32" height="32" rx="8" fill="url(#paint0_linear_7_2319)"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 6.06639C12.4092 6.06639 7.06639 11.4092 7.06639 18C7.06639 24.5907 12.4092 29.9336 19 29.9336C25.5907 29.9336 30.9336 24.5907 30.9336 18C30.9336 11.4092 25.5907 6.06639 19 6.06639ZM7 18C7 11.3726 12.3726 6 19 6C25.6274 6 31 11.3726 31 18C31 24.6274 25.6274 30 19 30C12.3726 30 7 24.6274 7 18Z" fill="#D0D5DD" stroke="#613EB7" strokeOpacity="0.7" strokeWidth="0.5"/>
                                    <g filter="url(#filter1_dd_7_2319)">
                                        <circle cx="19" cy="18" r="8" fill="url(#paint1_linear_7_2319)"/>
                                    </g>
                                    <g filter="url(#filter2_b_7_2319)">
                                        <path d="M19 2L19 34L15.8 34C11.3196 34 9.07937 34 7.36807 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2L3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2L19 2Z" fill="white" fillOpacity="0.2"/>
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_dd_7_2319" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_2319"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="1.5"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="effect1_dropShadow_7_2319" result="effect2_dropShadow_7_2319"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_7_2319" result="shape"/>
                                </filter>
                                <filter id="filter1_dd_7_2319" x="8" y="8" width="22" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_2319"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="1.5"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="effect1_dropShadow_7_2319" result="effect2_dropShadow_7_2319"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_7_2319" result="shape"/>
                                </filter>
                                <filter id="filter2_b_7_2319" x="-2" y="-3" width="26" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5"/>
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7_2319"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7_2319" result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_7_2319" x1="19" y1="2" x2="19" y2="34" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white"/>
                                    <stop offset="1" stopColor="#D0D5DD"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_7_2319" x1="15" y1="26" x2="23" y2="10" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#53389E"/>
                                    <stop offset="1" stopColor="#6941C6"/>
                                </linearGradient>
                                <clipPath id="clip0_7_2319">
                                    <rect x="3" y="2" width="32" height="32" rx="8" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="cursor-pointer text-xl font-inter mr-10" onClick={() => {navigate('/')}}>OpinioSphere</p>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="bg-transparent font-inter text-base p-2"
                    >
                        {isMenuOpen ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="x">
                                    <path id="Icon" d="M18 6L6 18M6 6L18 18" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </svg>
                            :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="menu">
                                    <path id="Icon" d="M3 12H21M3 6H21M3 18H21" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </svg>}
                    </button>
                    {isMenuOpen && (
                        <div className={`${isDarkTheme ? 'bg-backgroundDark' : 'bg-white'} absolute top-[72px] left-0 w-full h-screen`}>
                            <div className={`px-6 pt-10 flex flex-col justify-start items-center`}>
                                <input type="text"
                                       onChange={(e) => onSearch(e.target.value)}
                                       className={`${isDarkTheme ? 'bg-backgroundDark text-textDark border border-borderDark' : 'bg-white text-gray-900 border border-borderLight'} w-full h-12  rounded-lg px-6 text-gray-500 font-inter text-base focus:outline-none`}
                                       placeholder="Search"
                                />

                                {isAuthorized()
                                    ?
                                    <div className="flex flex-col justify-start items-center w-full">
                                        <div className="flex w-full flex-row justify-between items-center mt-10">
                                            <div className="flex flex-row justify-start items-center">
                                                <svg width="40" height="40" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" width="56" height="56" rx="28" fill="#667085" fillOpacity="0.1"/>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.6528 20.4857C20.6528 16.0546 24.1661 12.4624 28.5 12.4624C32.8339 12.4624 36.3472 16.0546 36.3472 20.4857C36.3472 24.9168 32.8339 28.509 28.5 28.509C24.1661 28.509 20.6528 24.9168 20.6528 20.4857ZM16.6734 34.0683C18.145 32.5636 20.141 31.7183 22.2222 31.7183H34.7778C36.859 31.7183 38.855 32.5636 40.3266 34.0683C41.7982 35.573 42.625 37.6137 42.625 39.7416V42.9509C42.625 43.8372 41.9749 44.7313 41.0556 45.3579C40.1362 45.9846 36.7675 46.9589 34.0051 47.344C29.4505 47.979 26.7616 47.9061 22.2222 47.1655C19.7267 46.7583 16.7276 45.9415 15.9444 45.3579C15.0515 44.6925 14.375 43.8372 14.375 42.9509V39.7416C14.375 37.6137 15.2018 35.573 16.6734 34.0683Z" fill="#667085" fillOpacity="0.4"/>
                                                </svg>
                                                <div className="flex flex-col items-start ml-2">
                                                    <p
                                                        className="text-sm font-inter underline cursor-pointer" onClick={() => {
                                                        navigate(`/user/${TokenService.getUserId()}`);
                                                    }}
                                                    >
                                                        {TokenService.getUserName()}
                                                    </p>
                                                    <p className="text-sm font-inter text-gray-500">{TokenService.getUserEmail()}</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={handleLogout}
                                                className={`flex justify-start items-center px-4 py-2 text-sm text-gray-700 hover:opacity-70`}
                                            >
                                                <svg className="mr-3"
                                                     width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.6665 2H3.99984C3.64622 2 3.30708 2.14048 3.05703 2.39052C2.80698 2.64057 2.6665 2.97971 2.6665 3.33333V12.6667C2.6665 13.4 3.2665 14 3.99984 14H6.6665M10.6665 11.3333L13.9998 8L10.6665 4.66667M13.1998 8H5.99984" stroke="#667085" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                {t("Log Out")}
                                            </button>
                                        </div>
                                        <button
                                            className=" mt-8 text-white bg-customPurple font-inter text-base px-[18px] py-2.5 rounded-lg"
                                            onClick={() => {navigate('/review'); setIsMenuOpen(false)}}
                                        >
                                            {t("Create review")}
                                        </button>
                                    </div>
                                    :
                                    <div className={`mt-10 flex gap-4`}>
                                        <ButtonAuth onClick={handleButtonAuth}/>
                                        <ButtonSignUp onClick={handleButtonRegistration} />
                                    </div>
                                }
                                <div className={`mt-24 flex flex-col gap-10`}>
                                    <LanguageSwitcher />
                                    <ThemeSwitcher />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`hidden md:flex w-full container mx-auto justify-between items-center py-2 `}>
                    <div className="flex justify-start items-center">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2.5">
                            <g filter="url(#filter0_dd_7_2319)">
                                <g clipPath="url(#clip0_7_2319)">
                                    <rect x="3" y="2" width="32" height="32" rx="8" fill="white"/>
                                    <rect x="3" y="2" width="32" height="32" rx="8" fill="url(#paint0_linear_7_2319)"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 6.06639C12.4092 6.06639 7.06639 11.4092 7.06639 18C7.06639 24.5907 12.4092 29.9336 19 29.9336C25.5907 29.9336 30.9336 24.5907 30.9336 18C30.9336 11.4092 25.5907 6.06639 19 6.06639ZM7 18C7 11.3726 12.3726 6 19 6C25.6274 6 31 11.3726 31 18C31 24.6274 25.6274 30 19 30C12.3726 30 7 24.6274 7 18Z" fill="#D0D5DD" stroke="#613EB7" strokeOpacity="0.7" strokeWidth="0.5"/>
                                    <g filter="url(#filter1_dd_7_2319)">
                                        <circle cx="19" cy="18" r="8" fill="url(#paint1_linear_7_2319)"/>
                                    </g>
                                    <g filter="url(#filter2_b_7_2319)">
                                        <path d="M19 2L19 34L15.8 34C11.3196 34 9.07937 34 7.36807 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2L3 14.8C3 10.3196 3 8.07937 3.87195 6.36808C4.63893 4.86278 5.86278 3.63893 7.36808 2.87195C9.07937 2 11.3196 2 15.8 2L19 2Z" fill="white" fillOpacity="0.2"/>
                                    </g>
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_dd_7_2319" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_2319"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="1.5"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="effect1_dropShadow_7_2319" result="effect2_dropShadow_7_2319"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_7_2319" result="shape"/>
                                </filter>
                                <filter id="filter1_dd_7_2319" x="8" y="8" width="22" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_2319"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="1.5"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="effect1_dropShadow_7_2319" result="effect2_dropShadow_7_2319"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_7_2319" result="shape"/>
                                </filter>
                                <filter id="filter2_b_7_2319" x="-2" y="-3" width="26" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5"/>
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7_2319"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7_2319" result="shape"/>
                                </filter>
                                <linearGradient id="paint0_linear_7_2319" x1="19" y1="2" x2="19" y2="34" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white"/>
                                    <stop offset="1" stopColor="#D0D5DD"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_7_2319" x1="15" y1="26" x2="23" y2="10" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#53389E"/>
                                    <stop offset="1" stopColor="#6941C6"/>
                                </linearGradient>
                                <clipPath id="clip0_7_2319">
                                    <rect x="3" y="2" width="32" height="32" rx="8" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="cursor-pointer text-xl font-inter mr-10" onClick={() => {navigate('/')}}>OpinioSphere</p>
                        <input type="text"
                               onChange={(e) => onSearch(e.target.value)}
                               className={`sm: hidden lg:block lg:${(pathname !== '/') ? 'hidden' : 'block'} ${isDarkTheme ? 'bg-backgroundDark text-textDark border border-borderDark' : 'bg-white text-gray-900 border border-borderLight'} w-50 h-12  rounded-lg px-6 text-gray-500 font-inter text-base focus:outline-none`}
                               placeholder="Search"
                        />
                    </div>
                    <div className="flex justify-start items-center">
                        <LanguageSwitcher />
                        <ThemeSwitcher />

                        {isAuthorized()
                            ?
                            <div className="flex justify-start items-center">
                                <button
                                    className="text-white bg-customPurple font-inter text-base w-21 h-11 px-[18px] py-2.5 rounded-lg"
                                    onClick={() => {navigate('/review')}}
                                >
                                    {t("Create review")}
                                </button>
                                <Dropdown isDarkTheme={isDarkTheme}/>
                            </div>
                            :
                            <div>
                                <ButtonAuth onClick={handleButtonAuth}/>
                                <ButtonSignUp onClick={handleButtonRegistration} />
                            </div>
                        }
                    </div>

                </div>
                {isAuth && <ModalAuth onClick={handleCloseModal}/>}
                {isReg && <ModalReg onClick={handleCloseModal}/>}
            </div>
        </>
    )
}

export default Head;