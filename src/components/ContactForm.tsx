// src/app/components/ContactForm.tsx

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        option: '',
        additionalInfo: '' // Campo para o textbox
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-white bg-opacity-5 backdrop-blur-lg rounded-lg p-10 max-w-4xl min-h-fit mx-auto">
            <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

                {/* Formulário com largura controlada */}
                <form className="bg-white bg-opacity-5 p-8 rounded-lg shadow-md max-w-md w-full">
                    <div>
                        <label className="block font-semibold">Name</label>
                        <input className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-black text-2xl p-4 border-none block mt-1" id="name" type="text" name="name" required></input>
                    </div>

                    <div className="mt-4">
                        <label className="block font-semibold">Email</label>
                        <input className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-black text-2xl p-4 border-none block mt-1" id="email" type="email" name="email" required></input>
                    </div>

                    <div className="mt-4">
                        <label className="block font-semibold">Password</label>
                        <input className="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-black text-2xl p-4 border-none block mt-1" id="password" type="password" name="password" required></input>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                        <button type="submit" className="flex items-center justify-center px-8 py-3 border border-transparent text-black text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Register</button>
                        <a className="font-semibold">Already registered?</a>
                    </div>
                </form>

                <aside className="flex flex-col">
                    <div className="bg-white bg-opacity-5 p-4 rounded-lg flex flex-col h-full">
                        <label htmlFor="additionalInfo" className="mb-2">Additional Info:</label>
                        <input
                            type="text"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            className="border rounded p-2 flex-grow text-black"
                        />
                    </div>
                </aside>

            </div>
        </div>



    );
};

export default ContactForm;
