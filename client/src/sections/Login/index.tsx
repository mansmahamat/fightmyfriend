import React from 'react'
import logo from './assets/fight.png'
import ButtonLogin from './partials/ButtonLogin';
 
export const Login = () => {
    return ( 
    <div className=" h-screen  flex justify-center items-center">
        <div className="p-8 bg-white border border-black w-1/3 rounded-lg max-w-6xl pb-10">
            <div className="flex justify-center mb-4"> <img className="h-24" src={logo} alt="logo"/> </div> 
            <h3 className="flex text-2xl font-black justify-center">
                Log in into Fight My Friend !
            </h3>
            <p className="flex justify-center mt-8">
                Sign in with Google to start booking available trainings !
            </p>
            <ButtonLogin />

            <p className="flex justify-center mt-8 text-gray-400">
                Note : By sign in, you'll be redirected to the Google consent 
                form to sign in with your Google account.
            </p>
        </div>
    </div>
     );
}