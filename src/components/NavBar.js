import React from "react";
import coinF from '../images/Coin_Heads.png';
import { Disclosure } from '@headlessui/react'

export default function NavBar() {
  // nav bar states to display what is active. I feel like tailwind has a built in way to do this, but "active:xyz" wasn't working.
  
function handleClickRedir(){
    window.location.assign('https://pos-coin-flip.herokuapp.com/');
}
function handleFlip(){
    console.log('flip coin to tails')
}

function handleMenu(){
  let btn = document.getElementById('menuBtn');
  let nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}
function fixMenu(){
  let btn = document.getElementById('menuBtn');
  let nav = document.getElementById('menu');
  btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}
    return (

   //     {/* incorporate your click on coin to flip the thing. Then change rolling coin too. */}
   // {/* Set your onclick flip to other image */}



  // THIS WHOLE MENU IS MOBILE ONLY.
     <>
  <header id="top" className="w-full md:hidden flex flex-col fixed fixed sm:relative bg-white sticky top-0 z-50">
  <Disclosure as="nav" className="bg-white px-2 rounded sm:px-4 py-1.5">
    <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
    <div className="flex">
    <img className="block lg h-10 w-auto" src= {coinF} alt="Jim-Coin" onClick={handleFlip}/>
        <span className="self-center text-xl mx-3 font-semibold whitespace-nowrap">POS Flip</span>
    </div>
      <button id="menuBtn" className="hamburger mr-1 block md:hidden focus:outline-none" type="button" onClick={handleMenu}>
        {/* the hamburger doesn't come back. This looks really good otherwise rn tho. */}
        <span className="hamburger__top-bun"></span>
        <span className="hamburger__bottom-bun"></span>
        {/* here if menu open, then display "x" */}
      </button>
    </div>
    <div id="menu" className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
      {/* onclick CLOSE THIS MENU */}
          <a href="#home" className="text-dark text-center hover:text-blue-700 font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" aria-current="page" onClick={fixMenu}>Home</a>
          <a href="#socials" className="text-dark text-center hover:text-blue-700 font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" onClick={fixMenu}>Socials</a>
          <a href="#roadmap" className="text-dark text-center hover:text-blue-700 font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" onClick={fixMenu}>Roadmap</a>
          <a href="#about" className="text-dark text-center hover:text-blue-700 font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" onClick={fixMenu}>About</a>
        <button onClick={handleClickRedir} className="right-px relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">launch BETA app</button>
    </div>
    </Disclosure>
</header>


{/* NONMOBILE MENU */}
<nav className="bg-white md:block px-2 rounded py-1.5 hidden">
  <div className="container rounded flex flex-wrap justify-between items-center mx-auto">
  <div className="flex">
        {/* incorporate your click on coin to flip the thing. Then change rolling coin too. */}
    <img className="block lg h-10 w-auto" src= {coinF} alt="Jim-Coin" onClick={handleFlip}/>
    {/* Set your onclick flip to other image */}
        <span className="self-center text-xl mx-3 font-semibold whitespace-nowrap">POS Flip</span>
    </div>
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
        <li className="home active">
          <a href="#home" className="block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
        </li>
        <li className="socials">
          <a href="#socials" className="socials block py-2 pr-4 pl-3 border-b border-gray-100 hover:text-indigo-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Socials</a>
        </li>
        <li className="roadmap">
          <a href="#roadmap" className="roadmap block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Roadmap</a>
        </li>
        <li className="about">
          <a href="#about" className="about block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About</a>
        </li>
        <li> <button onClick={handleClickRedir} className="right-px relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">launch BETA app</button>
        </li>
      </ul>
      
    </div>
  </nav>
</>
)
}