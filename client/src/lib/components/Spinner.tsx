import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className=" h-screen  flex flex-col justify-center items-center">
      <Loader
        type="Audio"
        color="#FBBF24"
        height={100}
        width={100}
        timeout={6000} //6 secs
      />
    </div>
  );
}
