import React from "react";

export const Header = () => {
  return <nav className="px-10 py-8 bg-yellow-500">
  <div className="flex justify-between items-center">
    <a className="text-white text-2xl leading-none" href="#">
      <img className="h-8" src="mockup-assets/logos/shuffle-ux-light.svg" alt="" width="auto"/>
    </a>
    <div className="lg:hidden">
      <button className="block navbar-burger text-gray-50 hover:text-gray-200 focus:outline-none">
        <svg className="h-4 w-4" fill="currentColor " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-10">
      <li><a className="text-sm text-gray-50 hover:text-gray-200" href="#">About</a></li>
      <li><a className="text-sm text-gray-50 hover:text-gray-200" href="#">Company</a></li>
      <li><a className="text-sm text-gray-50 hover:text-gray-200" href="#">Services</a></li>
      <li><a className="text-sm text-gray-50 hover:text-gray-200" href="#">Testimonials</a></li>
    </ul>
    <div className="hidden lg:flex" data-dashlane-rid="aa60bf5d1d368b80">
      <input className="inline-block px-4 py-3 text-sm text-gray-50 placeholder-gray-50 font-semibold bg-gray-400 border border-transparent rounded-l" placeholder="Search" data-dashlane-rid="1d395ff59b419945" data-form-type="other"/>
      <button className="px-2 rounded-r bg-gray-400" data-dashlane-rid="90270769c7bfc34d" data-dashlane-label="true" data-form-type="other">
        <svg className="text-gray-50 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </div>
  </div>
  <div className="hidden navbar-menu relative z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-8">
        <a className="mr-auto text-2xl font-semibold leading-none" href="#">
          <img className="h-8" src="mockup-assets/logos/shuffle-ux.svg" alt="" width="auto"/>
        </a>
        <button className="navbar-close">
          <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#">About</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#">Company</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#">Services</a></li>
          <li className="mb-1"><a className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded" href="#">Testimonials</a></li>
        </ul>
      </div>
      <div className="mt-auto">
        <p className="mt-6 mb-4 text-sm text-center text-gray-400">
          <span>© 2021 All rights reserved.</span>
        </p>
      </div>
    </nav>
  </div>
</nav>;
};
