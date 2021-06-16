import React from 'react'
import logo from './assets/google.png'
 
export const Login = () => {
    return ( 
        <div className=" bg-gray-300">
    <div className="container h-screen flex justify-center items-center">
        <div className="p-8 bg-white w-1/3 rounded-lg max-w-6xl pb-10">
            <div className="flex justify-center mb-4"> <img src={logo} alt="logo" width="70"/> </div> 
            <h3 className="flex justify-center">
                Welcom to 
            </h3>
            <button className="uppercase h-12 mt-3 text-white w-full rounded bg-blue-800 hover:bg-blue-900"><i className="fa fa-facebook mr-2"></i>Facebook</button> <button className="uppercase h-12 mt-3 text-white w-full rounded bg-red-800 hover:bg-red-900"><i className="fa fa-google mr-2"></i>Google</button>
        </div>
    </div>
</div>
     );
}