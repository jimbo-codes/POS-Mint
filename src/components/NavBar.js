import React from "react";
import coinF from '../images/Coin_Heads.png';

export default function NavBar() {
  // nav bar states to display what is active. I feel like tailwind has a built in way to do this, but "active:xyz" wasn't working.

function handleClickRedir(){
    window.location.assign('https://pos-coin-flip.herokuapp.com/');
    // Send to beta page.
}
function handleFlip(){
    console.log('flip coin to tails')
}
    return (

        // Try navbar and socials with dark instead?

<nav className="bg-white px-2 rounded sm:px-4 py-1.5">
  <div className="container rounded flex flex-wrap justify-between items-center mx-auto">
  <div className="flex">
        {/* incorporate your click on coin to flip the thing. Then change rolling coin too. */}
    <img className="block lg h-10 w-auto" src= {coinF} alt="Jim-Coin" onClick={handleFlip}/>
    {/* Set your onclick flip to other image */}
        <span className="self-center text-xl mx-3 font-semibold whitespace-nowrap">POS Flip</span>
    </div>

    {/* Replace w/ tailwind responsive header thing below for mobile. */}
    {/* <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button> */}
    {/* <div className="hidden w-full md:block md:w-auto" id="mobile-menu"> */}
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
                       
        {/* <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li> */}
      </ul>
      
    </div>
    {/* <div className="absolute items-center right-3 mt-3 object-right">
                 <div className="right-0 object-right"> */}
                     {/* Directs to beta application */}
                     {/* <button onClick={handleClickRedir} className="right-px relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">launch BETA app</button>
                 </div>
               </div> */}
  {/* </div> */}
</nav>




        // OLD NAV BAR
//     <Disclosure as="nav" className="bg-white shadow mb-0 border-b-2">
//       {({ open }) => (
//         <>
//           <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
//             <div className=" flex justify-between h-16">
//               <div className="absolute left-2 h-full my-0 flex">
//                 {/* h-10 to fit for nav bar. */}
//                 <div className="-ml-2 mr-2 flex items-center">
                  
//                   {/* Mobile menu button - eliminated for now. */}
//                   {/* <Disclosure.Button className="hidden inline-flex w-auto items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button> */}
//                 </div>
//                 <div className="flex-shrink-0 flex items-center">
                
//                     {/* make coin flip to tails on click. */}
//                   <img
//                     className="block lg h-12 w-auto"
//                     src= {coinF}
//                     alt="Jim-Coin"
//                     onClick={handleFlip}
//                     />
                
//                 </div>

//                 {/*  Move MD:ML if youw anna center this or movve to right etc. */}
//                 <div className="md:ml-8 md:flex md:space-x-8">
//                   {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
//                   {/* Set your current with onclick prop,  */}
                  
//               {/* Once authenticated, should clicking on this dashboard button take you back to the app dashboard or the proj home? */}
//                   <Link to="/"
//                     onClick={console.log('click')}
//                     className={home?"border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}>
//                     Home
//                   </Link>

//                 {/* Change this so its not a link -- make it move to window position */}
//                   <Link to='/'
//                     onClick={console.log('click')}
//                     className={about?"border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
//                   >
//                     About
//                   </Link>
//                 </div>
//               </div>
//               <div className="absolute items-center right-3 mt-3 object-right">
//                 <div className="right-0 object-right">
//                     {/* Directs to beta application */}
//                     <button onClick={handleClickRedir} className="right-px relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">launch BETA app</button>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <Disclosure.Panel>
//             <div className="pt-0 pb-0 lg space-y-1">
//               {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
//               <Link to='/crypto-project-p2/'>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
//               >
//                 Dashboard
//               </Disclosure.Button>
//               </Link>
//               <Link to='/about'>
//               <Disclosure.Button
//                 as="a"
//                 href="#"
//                 className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
//               >
//                    Team
//               </Disclosure.Button>
//               </Link>
//             </div>
//             <div className="pt-4 pb-3 border-t border-gray-200">
//               <div className="flex items-center px-4">
//                 <div className="flex-shrink-0">
//                 </div>
//                 <div className="ml-3">
//                 </div>
                
//               </div>
//         <div className="mt-3  space-y-1">
//             <Disclosure.Button
//                   as="a"
//                   href="/user"
//                   className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
//             >{auth?"Sign out":"Sign In"}     
//                 <button
//                   type="button"
//                   className="float-right bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//             </Disclosure.Button>
//         </div>
//     </div>
// </Disclosure.Panel>
// </>
// )}
// </Disclosure>
)
}