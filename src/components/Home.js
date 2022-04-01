import React from "react";
import coinF from '../images/Coin_Heads.png';
// Here you have the section to have scrolling nav bar display

function handleClickRedir(){
    window.location.assign('https://pos-coin-flip.herokuapp.com/');
    // Send to beta page.
}

const metrics = [
  { id: 1, stat: '3.5% of revenue', emphasis: '', rest: 'Paid to all NFT holders, win or lose.' },
  { id: 2, stat: 'Some other stat', emphasis: '', rest: 'what we say here' },
  { id: 3, stat: '98% customer satisfaction', emphasis: 'Customer satisfaction', rest: 'As measured by one internal survey' },
  { id: 4, stat: 'A sick blog post', emphasis: 'check it out', rest: <a href='https://google.com' > here </a> },
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    // {
    //   name: 'Facebook',
    //   href: '#',
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    // {
    //   name: 'Instagram',
    //   href: '#',
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    {
      name: 'Twitter',
      href: 'https://twitter.com/POSCoinFlip',
      icon: (props) => (
        <svg fill='#5DA8DD' viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: 'https://discord.gg/bUZ2uN5zWX',
      icon: (props) => (
        <svg className="w-8 h-8" aria-hidden="true" width="16" height="16" fill="#5165F6" viewBox="0 0 24 24">
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                        </svg>
      ),
    },
  ],
}

function mintClick(){
    return;
    // code to fire your mint.
}
function Home() {
window.onscroll = () => {
    let current = "home";
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav .container ul li");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); 
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

return(
    <div className="bg-white">
      <main>
          <div className="h-fit">
              {/* h-screen to do viewport. */}
        {/* Hero section */}
        <section className="relative" id='home'>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto">
            {/* <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden"> */}
                {/* <img
                  className="h-full w-full object-cover"
                  src="https://i.ibb.co/NY5WWVj/An-abstract-digital-structure-showing-the-concept-of-blockchain-technology-with-hexadecimal-hash-dat.jpg"
                  alt="An-abstract-digital-structure-showing-the-concept-of-blockchain-technology-with-hexadecimal-hash-dat"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-600" />
              <div className="relative py-16 sm:px-6 sm:py-22 lg:py-26">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="font-header text-6xl block text-white">Not just any other</span>
                  <span className="block text-white-500">Coin NFT</span>
                </h1>
                <div className="w-40" id='container'>
                    {/* This is the image you want to scroll. */}
                    <img
                    src={coinF}
                    className="justify-center lg h-42 w-40 mt-6"
                    alt='POS Coin logo'
                    id='pos-coin'
                    />
                </div>
                {/* here you put the scrolling coin div */}
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                 A Piece-Of-Shit coin. Or POS for short. <br></br>Gamified, yield generating, and Ethereum Virtual Machine compatible.
                  {/* Typewriter effect here ? */}
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 flex justify-center sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                    <button onClick={mintClick} disabled={true}

                      className="px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                      You can't mint yet.
                      {/* on mouseover, have an effect to show socials. */}
                    </button>
                  </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* social proof of madeup co's*/}
        <section className="bg-gray-100 pt-6" id='socials'>
            {/* bg-gray-900 */}
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-md font-semibold uppercase text-indigo-700 tracking-wide">
              Built on polygon during ETH Denver 2022.
              <br></br>
            </p>
            <p className="text-center my-2 text-sm font-semibold uppercase text-gray-500 tracking-wide">
            Follow our socials to get launch updates:
            </p>
            {/* Throw in social links here twitter, discord. */}


                            {/* Social Links setup with grid-cols */}
                <div className="flex justify-center content-center">
                <a
                    href="https://twitter.com/POSCoinFlip"
                    id='twitter'
                    className="flex float-left items-center py-2 px-8 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span className="sr-only">Check out our twitter!</span>
                        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-blue-400 " aria-hidden="true"> 
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg><p className="inline-block text-xl text-blue-400 align-baseline">Twitter</p>
                    </a>

                {/* Second Link */}
                    <a
                    href="https://discord.gg/bUZ2uN5zWX"
                    id='discord'
                    className="flex float-left items-center py-2 px-8 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span className="sr-only">Check out our Discord!</span>
                        
                <svg viewBox="0 0 24 24" className="w-10 h-10 content-center justify-center items-center flex fill-indigo-600" aria-hidden="true">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"/>
                </svg>
                <p className="inline-block text-xl text-indigo-600 align-baseline px-2">Discord</p>
            </a>
        </div>
        </div>

            {/* <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
            
              <div className="col-span-1 align-text-bottom flex justify-center md:col-span-2 lg:col-span-1">
              <a
                    href="https://twitter.com/POSCoinFlip"
                    id='socials'
                    className="flex float-left items-center py-2 px-2 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                        <span className="sr-only">Check out our twitter!</span>
                        <svg viewBox="0 0 24 24" className="w-8 fill-blue-400 h-8" aria-hidden="true"> 
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg><p className="inline-block text-blue-400 align-baseline">Twitter</p>
                    </a> */}
                {/* <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" /> */}
              {/* </div>
            
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                
                <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
              
              </div> */}

              {/* <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              
              </div> */}
            {/* </div> */}
          </section>
        </div>

{/* BEFORE FEATURES, have a quick text box explaining what it is */}


        {/* Gradient Feature Section */}
        <section className="bg-gradient-to-b from-purple-800 to-indigo-700 pt-6 justify-center" id='roadmap'>
        <div className="container mx-auto w-full ">
            <h1 className="text-4xl text-white py-8 text-center">Roadmap</h1>
            {/* here make it centered and styled */}

{/* MOBILE ROADMAP HERE: */}
{/* <div className="relative wrap sm:flex overflow-hidden p-10 md:hidden"></div>
<div className="border-2-2 absolute inset-x-2/4 border-opacity-20 border-white h-full mb-4 border"></div> */}


{/* HIDDEN FOR NON-MOBILE */}
  <div className="relative wrap md:block overflow-hidden p-10">
    <div className="border-2-2 absolute inset-x-2/4 border-opacity-20 border-white h-full mb-4 border"></div>
    {/* Why does this border run to the absolute bottom?? */}
    {/* above = l;eft 50% */}
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="md:visible mx-3 z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto md:visible mx-auto w-8 h-8 text-center font-semibold text-lg text-white">1</h1>
      </div>
      <div className="order-1 md:w-5/12 sm:w-screen bg-gray-400 rounded-lg shadow-xl px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Q2 2022: Initial NFT Mint</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">POS NFT's minted to fund house wallet, double or nothing coin flips are turned on for live play. </p>
      </div>
    </div>
    {/* <!-----/> */}
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="md:visible mx-3 z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="md:visible mx-auto w-8 h-8 text-center text-white font-semibold text-lg">2</h1>
      </div>
      <div className="order-1 bg-red-400 md:w-5/12 sm:w-screen rounded-lg shadow-xl px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">Q3 2022 Communities + ETH bridging</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Outreach focus on building community partnerships, offering turnkey gambling solutions for ETH + MATIC communities. To best facilitate this, we will be providing an ETH native polygon briding solution.</p>
      </div>
    </div>
 {/* <!-----/> */}
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="md:visible mx-3 z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto md:visible mx-auto w-8 h-8 text-center font-semibold text-lg text-white">3</h1>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl md:w-5/12 sm:w-screen px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Q4 2022: NFT Staking</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">For those of you who want to generate even more yeild on your very own POS, we'll be going live with a first of its kind NFT staking + yield compounding service. Initially this service will be exclusively available for POS holders, no external NFT's will be accepted.</p>
      </div>
    </div>
{/* <!-----/> */}
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="md:visible mx-3 z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="md:visible mx-auto w-8 h-8 text-center text-white font-semibold text-lg">4</h1>
      </div>
      <div className="order-1 bg-red-400 rounded-lg shadow-xl md:w-5/12 sm:w-screen px-6 py-4">
        <h3 className="mb-3 font-bold text-white text-xl">Q1 2023 Native Token Launch</h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Further compound the yield generated by POS NFT's by staking them, then electing to have that yield paid out at a premium in the newly launched POS coin. This token will be redeemable everywhere within the POS ecosystem.</p>
      </div>
    </div>
  </div>
</div>
</section>

{/* BELOW PROLLY CUT - its  */}
<section className="relative bg-gray-900" id='about'>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative pt-12 pb-20 sm:pt-20 sm:pb-20 xl:col-start-1 xl:pb-20">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Simple, yet elegant
                </span>
              </h2>
              <p className="mt-3 text-3xl font-extrabold text-white">
                50/50 double or nothing coin flip.
              </p>
              <p className="mt-5 text-lg text-gray-300">
                We've seen issues in the degenerate flipping community, so we built a better solution. POS Coin flip utilizes Chainlink's verifiable randomness function to prevent block based randomness exploits. Deployed on polygon to avoid Solana network outages <strong>(Six network outages last month alone)</strong>. By building to be EVM compatible, we're ready to plug and play with ETH NFT communities on day 1. 
              {/* // this is the content, but you prolly wanna put it in a better format. */}
              </p>
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">{item.stat}</span>
                    <span className="mt-1 block text-base text-gray-300">
                      {item.id===4?<span className="font-medium text-white underline"> {item.rest}</span>:<span className="font-medium text-white"> {item.rest} </span>}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
    
        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Then click the button already.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <button
                onClick={handleClickRedir}
                className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
              >
                "The Button"
              </button>

              {/* See if you can make these buttons swap places on hover */}
              <button
              onClick={()=>window.scrollTo(0, 0)}
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
              >
                not this one.
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>

            {/* </div> */}

            {/* Configure the social links so they work. */}
          <div className="border-t border-gray-200 pt-4 flex items-center justify-between lg:mt-4">
            <div className="flex space-x-6 order-2">
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-0 mb-4 text-base text-gray-400 mt-0 order-1">
              &copy; 2022 POS DAO LLC. All rights reserved.
            </p>
          </div>
      </footer>
    </div>
  )
}
export default Home;