// import React from 'react'
 import img1 from '../../src/assets/Vriddhi.png'
 import img2 from '../../src/assets/SAC PNG MERCH.png'

// const Navbar = () => {
//   return (
//     <header class="text-white flex ">
//   <div class=" flex flex-wrap p-3 flex-col md:flex-row md:justify-between items-center  w-full">

//     <div>
//     <a class="flex title-font font-medium items-center mr-2 text-gray-900 mb-4 md:mb-0">      
//       <img src={img1} className="h-12"></img>
//     </a>
//     </div>

//     <div>
//     <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//       <a class="mr-5 hover:text-white">TOURNAMENT</a>
//       <a class="mr-5 hover:text-white">GALLERY</a>
//       <a class="mr-5 hover:text-white">ABOUT US</a>
//       <a class="mr-5 hover:text-white">OUR TEAM</a>
//       <a class="mr-5 hover:text-white">CONTACT US</a>
//     <button class="inline-flex items-center text-orange-500  py-1 px-8 focus:outline-none hover:bg-gray-200  mt-4 md:mt-0 text-xl rounded-3xl border-2 border-orange-500">REGISTER      
//     </button>
//     </nav>
//     </div>

//     <div>
//     <img src={img2} className="h-24 mt-6 md:mt-0"></img>
//     </div>

//   </div>
// </header>
//   )
// }

// export default Navbar


import { useState } from "react"; // import state

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between  text-white  mr-6">
      <a href="/">
        <img src={img1}  className="h-12" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
              <li className=" border-gray-400 my-8 uppercase">
                <a href="/about">TOURNAMENT</a>
              </li>
              <li className=" border-gray-400 my-8 uppercase">
                <a href="/portfolio">GALLERY</a>
              </li>
              <li className=" border-gray-400 my-8 uppercase">
                <a href="/contact">ABOUT US</a>
              </li>
              <li className=" border-gray-400 my-8 uppercase">
                <a href="/contact">OUR TEAM</a>
              </li>
              <li className=" border-gray-400 my-8 uppercase">
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li className=" border-gray-400 my-8 uppercase">
                <a href="/about">TOURNAMENT</a>
              </li>
              <li className=" border-gray-400 my-8 uppercase">
                <a href="/portfolio">GALLERY</a>
              </li>
              <li className=" border-gray-400 my-8 uppercase">
                <a href="/contact">ABOUT US</a>
              </li>
              <li className=" border-gray-400 my-8 uppercase">
                <a href="/contact">OUR TEAM</a>
              </li>
              <li className=" border-gray-400 my-8 uppercase">
                <a href="/contact">CONTACT</a>
              </li>
        </ul>
        
      </nav>
      <a href="/" className='hidden lg:block'>
        <img src={img2}  className="h-24" alt="logo" />
      </a>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #111a21;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}