import React from 'react'
import google from '../assets/google.png'

export default function ButtonLogin() {
    return (
        <div className="flex justify-center items-center mt-8 flex-col">
    
    <button className="text-gray-100 hover:text-white shadow outline-none font-bold text-sm py-3 px-4 rounded flex justify-start items-center cursor-pointer w-64">
        <img className="h-8" src={google} alt="" />
        <span className="border-l border-blue-500 h-8 w-1 ml-9 block"></span>
        <span className="pl-3 text-blue-500">Sign up with Google</span>
    </button>
    
</div>
    )
}
