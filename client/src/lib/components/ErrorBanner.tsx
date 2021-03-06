import React from 'react';


interface Props {
    message?: string;
}

export default function ErrorBanner({message}: Props) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2">
        <div className="text-red-500 rounded-full bg-white mr-3">
          <svg
            width="1.8em"
            height="1.8em"
            viewBox="0 0 16 16"
            className="bi bi-x"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
            />
            <path
              fillRule="evenodd"
              d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
            />
          </svg>
        </div>

        <div className="text-white max-w-xs ">
            {message}
        </div>
      </div>
    </div>
  );
}
