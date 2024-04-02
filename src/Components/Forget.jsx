import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Forget() {
    const [email , setEmail] = useState("");
    const [loader , setLoader] = useState(false);
    const navigate=useNavigate()
    const resetPassword = async (e) => {
        e.preventDefault(); // Prevent form submission
        try {
            setLoader(true); // Show loader while processing
            const auth = getAuth();
           await  sendPasswordResetEmail(auth, email)
           toast.success("Email Sent Successfully..");
            navigate("/")
        } catch (error) {
            console.error('Error sending reset email:', error);
            toast.error('Failed to send reset email. Please try again later.');
        } finally {
            setLoader(false); // Hide loader after processing
        }
    }

    return (
        <>
            <form onSubmit={resetPassword} className='grid justify-center mt-10 h-[70vh]'>
                <div className='items-center h-[50vh] border-gray-700 p-10 shadow-2xl border-2'>
                    <div><h2 className='text-3xl mb-6 mt-2 font-bold '>Forgot Password</h2></div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 mt-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {loader ? 'Sending...' : 'Reset Password'}
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Forget;
