import React, { useState } from "react";
import { Link } from "react-router-dom";
import { farmerUser } from "./Login";
import Dropdown from "./Dropdown";
import { useTranslation } from 'react-i18next'

export default function Navbar(props) {



  const languages = [
    {value:'' , text:"Option"},
    { value: 'en', text: "English" },
    { value: 'hi', text: "Hindi" },
    { value: 'mr', text: "Marathi" }
  ]




  const { t } = useTranslation();
  const [lang, setLang] = useState('');

  // This function put query that helps to 
  // change the language
  const handleChange = e => {
    setLang(e.target.value);
    let loc = "http://localhost:3000/";
    window.location.replace(loc + "?lng=" + e.target.value);
  }

  return (
    <div>
      <nav
        class="fixed top-0 flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-6">

          <div
            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            <Link to='/'
              class="mt-2 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0 pr-4"

            >
              <h1>SimplyFresh</h1>

            </Link>

            <ul
              class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row "
              data-te-navbar-nav-ref
            >
              <li class="lg:pr-2" data-te-nav-item-ref>
                <Link style={{ color: "white" }} to='/complaint'>
                  {t('complaint')}
                </Link>
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <Link style={{ color: "white" }} to='/productRegistration'>
                  {t('products')}
                </Link>
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <Link style={{ color: "white" }} to='/cart'>
                  {t('cart')}
                </Link>
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <Link style={{ color: "white" , paddingRight: "6px"}} to='/delivery'>
                  Delivery
                </Link>
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                   {farmerUser}
               </li>
              {/* <li class="lg:pr-2" data-te-nav-item-ref onClick={props.handleLogOut}>
                <Link style={{ color: "white" }} to='/Login' >
                  {props.log}
                </Link>
              </li> */}
            </ul>
          </div>

          <div class="relative flex items-center">
          <Dropdown handleLogOut={props.handleLogOut} />
          </div>
        </div>

      </nav>
    </div>
    //         <ul>
    //       
    //       <li class="lg:pr-2" data-te-nav-item-ref>
    //             <Link style={{color:"white"}} to='/cart'>
    //               Cart
    //             </Link>
    //           </li>
    //           </ul>
    //           <span class="[&>svg]:w-5">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //               class="h-5 w-5"
    //             >
    //               <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
    //             </svg>
    //           </span>
            
    //         <div class="relative" data-te-dropdown-ref>
    //           <a
    //             class="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
    //             href="www.Google.com"
    //             id="dropdownMenuButton1"
    //             role="button"
    //             data-te-dropdown-toggle-ref
    //             aria-expanded="false"
    //           >
    //             <span class="[&>svg]:w-5">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 24 24"
    //                 fill="currentColor"
    //                 class="h-5 w-5"
    //               >
    //                 <path
    //                   fill-rule="evenodd"
    //                   d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
    //                   clip-rule="evenodd"
    //                 />
    //               </svg>
    //             </span>
    //             <span class="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white">
    //               1
    //             </span>
    //           </a>
    //           <ul
    //             class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
    //             aria-labelledby="dropdownMenuButton1"
    //             data-te-dropdown-menu-ref
    //           >
    //             <li>
    //               <a
    //                 class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
    //                 href="www.Google.com"
    //                 data-te-dropdown-item-ref
    //               >
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
    //                 href="www.Google.com"
    //                 data-te-dropdown-item-ref
    //               >
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
    //                 href="www.Google.com"
    //                 data-te-dropdown-item-ref
    //               >
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div class="relative" data-te-dropdown-ref>
    //           <a
    //             class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
    //             href="www.Google.com"
    //             id="dropdownMenuButton2"
    //             role="button"
    //             data-te-dropdown-toggle-ref
    //             aria-expanded="false"
    //           >
    //             <img
    //               src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
    //               class="rounded-full"
    //               style={{ height: "25px", width: "25px" }}
    //               alt=""
    //               loading="lazy"
    //             />
    //           </a>
    //           <ul
    //             class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
    //             aria-labelledby="dropdownMenuButton2"
    //             data-te-dropdown-menu-ref
    //           >
    //             <li>
    //               <a
    //                 class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
    //                 href="www.Google.com"
    //                 data-te-dropdown-item-ref
    //               >
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
    //                 href="www.Google.com"
    //                 data-te-dropdown-item-ref
    //               >
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
    //                 href="www.Google.com"
    //                 data-te-dropdown-item-ref
    //               >
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}