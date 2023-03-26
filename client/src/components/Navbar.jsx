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
              <li class="lg:pr-2" data-te-nav-item-ref onClick={props.handleLogOut}>
                <Link style={{ color: "white" }} to='/Login' >
                  {props.log}
                </Link>
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                { }
              </li>
            </ul>
          </div>

          <div class="relative flex items-center">
            <li class="lg:pr-2" data-te-nav-item-ref>
              {farmerUser}
            </li>
            <div class="relative" data-te-dropdown-ref>
              <a
                class="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="www.Google.com"
                id="dropdownMenuButton1"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              ></a>
              <ul
                class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                data-te-dropdown-menu-ref
              >
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="www.Google.com"
                    data-te-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="www.Google.com"
                    data-te-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="www.Google.com"
                    data-te-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <select value={lang} onChange={handleChange}>
              {languages.map(item => {
                return (<option key={item.value}
                  value={item.value}>{item.text}</option>);
              })}
            </select>
            <Dropdown />

          </div>
        </div>

      </nav>
    </div>
  );
}