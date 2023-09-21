import React from "react";
import {useState} from "react";
import ButtonAuth from "./buttonAuth";
import ModalAuth from "./modalAuth";
import ButtonSignUp from "./buttonSignUp";
import ModalReg from "./modalRed";
import ThemeSwitcher from "./themeSwitcher";
import TokenService from "../services/token.service";
import {useNavigate} from "react-router-dom";
import Dropdown from "./dropdown";
import LanguageSwitcher from "./languageSwitcher";

const Head = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [isReg, setIsReg] = useState(false)
    const [search, setSearch] = useState('')

    const navigate = useNavigate()

    const isAuthorized = () => {
        return !!TokenService.getToken()
    }
    const handleButtonAuth = (event) => {
        setIsAuth(true)
    };
    const handleButtonRegistration = (event) => {
        setIsReg(true)
    }
    const handleCloseModal = () => {
        setIsAuth(false);
        setIsReg(false);
    }

    return (
        <>
            <div className="z-50 fixed top-0 left-0 w-full flex justify-center items-center">
                <div className="fixed top-0 w-full container mx-auto flex justify-between items-center py-2 bg-white">
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
                        <p className="cursor-pointer text-xl font-inter text-black mr-10" onClick={() => {navigate('/')}}>OpinioSphere</p>
                        <input type="text"
                               onChange={(e) => setSearch(e.target.value)}
                               className="w-80 h-12 border rounded-lg px-6 text-gray-500 font-inter text-base focus:outline-none"
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
                                >Create post</button>
                                <Dropdown/>
                            </div>
                            :
                            <div>
                                <ButtonAuth onClick={handleButtonAuth}/>
                                <ButtonSignUp onClick={handleButtonRegistration} />
                            </div>
                        }
                    </div>

                    {isAuth && <ModalAuth onClick={handleCloseModal}/>}
                    {isReg && <ModalReg onClick={handleCloseModal}/>}
                </div>
            </div>
        </>
    )
}

export default Head;