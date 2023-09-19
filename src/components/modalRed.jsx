import React from "react";
import {useState} from "react";
import {useCreateUserMutation} from "../api/api";
import TokenService from "../services/token.service";
import ErrorMessage from "./errorMessage";

const ModalReg = ({onClick}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null);

    const [createUser, {isLoading}] = useCreateUserMutation();

    const handleCloseModal = () => {
        onClick();
    }

    const handleForm = (e)=> {
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password,
        }
        createUser(user).unwrap().then((res) => {
            TokenService.setToken(res.accessToken);
            TokenService.setUserId(res.user.userId);
            TokenService.setUserName(res.user.userName);
            TokenService.setUserEmail(res.user.userEmail);
            handleCloseModal();
        }).catch(({ data }) => {
            setError(data.message);
        });
    }


    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <ErrorMessage message={error} onClose={() => setError(null)} />
                <div className="fixed inset-0 bg-black opacity-50"></div>
                <form className="relative bg-white p-4 rounded shadow-md w-96" action="/" onSubmit={handleForm}>
                    <button
                        className="text-gray-500 hover:text-gray-700 absolute top-0 right-0 m-2"
                        onClick={handleCloseModal}
                        type="button"
                    >
                        Закрыть
                    </button>
                    <div className="mb-4 mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Name
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="textl"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign UP
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ModalReg;