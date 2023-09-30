import React from "react";
import {useState} from "react";
import {useAuthUserMutation} from "../api/api";
import TokenService from "../services/token.service";
import ErrorMessage from "./errorMessage";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";

const ModalAuth = ({onClick}) => {
    const { t } = useTranslation();
    const { isDarkTheme } = useTheme();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);

    const [authUser, {isLoading}] = useAuthUserMutation();

    const handleForm = (e)=> {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        };
        authUser(data)
            .unwrap()
            .then((res) => {
            TokenService.setToken(res.accessToken);
            TokenService.setUserId(res.user.userId);
            TokenService.setUserName(res.user.userName);
            TokenService.setUserEmail(res.user.userEmail);
            handleCloseModal();
        }).catch(({ data }) => {
            setError(data.error.message);
        });
    }

    const handleCloseModal = () => {
        onClick();
    }


    return (
        <div className={`${isDarkTheme ? 'bg-backgroundDark text-textDark' : 'bg-white text-gray-900'} fixed inset-0 top-0 right-0 bottom-0 left-0 w-full h-screen md:top-[72px]`}>
            <div className="relative container mt-16 mx-auto flex flex-col items-center font-inter md:mt-24">
                <button
                    className="text-gray-500 hover:text-gray-700 absolute top-[-50px] right-0 m-2"
                    onClick={handleCloseModal}
                    type="button"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="x">
                            <path id="Icon" d="M18 6L6 18M6 6L18 18" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                </button>
                <ErrorMessage message={error} onClose={() => setError(null)} />
                <h1 className={`text-xl font-semibold mt-6 md:text-3xl`}>{t('Log in to your account')}</h1>
                <p className={`text-base text-gray-500 mt-3`}>{t("Welcome back! Please enter your details")}</p>
                <form className={`bg-transparent font-inter mt-8 w-[360px]`} action="/" onSubmit={handleForm}>
                    <div className="mb-5 mt-8">
                        <label className={`${isDarkTheme ? 'text-textDark' : 'text-gray-700'} block text-base mb-1.5`} htmlFor="email">
                            Email*
                        </label>
                        <input
                            className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} bg-transparent border rounded w-full py-2.5 px-3.5 text-base leading-tight focus:outline-none focus:shadow-outline`}                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t("Enter your email")}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className={`${isDarkTheme ? 'text-textDark' : 'text-gray-700'} block text-base mb-1.5`} htmlFor="password">
                            {t("Password")}*
                        </label>
                        <input
                            className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} bg-transparent border rounded w-full py-2.5 px-3.5 text-base leading-tight focus:outline-none focus:shadow-outline`}                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={t("Enter your password")}
                            required
                        />
                    </div>
                    <div className="text-center mt-6">
                        <button className="w-full text-white bg-customPurple font-inter text-base px-[18px] py-2.5 rounded-lg" type="submit">
                            {t("Sign In")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalAuth;