<<<<<<< HEAD
import React from 'react'
=======
import React from "react";

import { Link } from "react-router-dom";
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338

export default function Navbar() {
  return (
    <div>
      <nav
        class="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
<<<<<<< HEAD
        data-te-navbar-ref>
=======
        data-te-navbar-ref
      >
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
        <div class="flex w-full flex-wrap items-center justify-between px-6">
          <button
            class="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="www.Google.comnavbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
<<<<<<< HEAD
            aria-label="Toggle navigation">
=======
            aria-label="Toggle navigation"
          >
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
            <span class="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
<<<<<<< HEAD
                class="h-7 w-7">
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd" />
=======
                class="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
              </svg>
            </span>
          </button>
          <div
            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
<<<<<<< HEAD
            data-te-collapse-item>
            <a
              class="mt-2 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
              href="www.Google.com">
=======
            data-te-collapse-item
          >
            <a
              class="mt-2 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
              href="www.Google.com"
            >
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
              <h1>SimplyFresh</h1>
            </a>

            <ul
              class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
<<<<<<< HEAD
              data-te-navbar-nav-ref>
=======
              data-te-navbar-nav-ref
            >
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
              <li class="lg:pr-2" data-te-nav-item-ref>
                <a
                  class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                  href="www.Google.com"
                  data-te-nav-link-ref
<<<<<<< HEAD
                >home</a
                >
=======
                >
                  home
                </a>
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <a
                  class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="www.Google.com"
                  data-te-nav-link-ref
<<<<<<< HEAD
                >About</a
                >
=======
                >
                  About
                </a>
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <a
                  class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="www.Google.com"
                  data-te-nav-link-ref
<<<<<<< HEAD
                >Feedback</a
                >
              </li>
            </ul>

          </div>



          <div class="relative flex items-center">

            <a
              class="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="www.Google.com">
=======
                >
                  Feedback
                </a>
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <Link style={{color:"white"}} to='/productRegistration'>
                  List Produce
                </Link>
              </li>
            </ul>
          </div>

          <div class="relative flex items-center">
            <a
              class="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
              href="www.Google.com"
            >
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
              <span class="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
<<<<<<< HEAD
                  class="h-5 w-5">
                  <path
                    d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
=======
                  class="h-5 w-5"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
                </svg>
              </span>
            </a>
            <div class="relative" data-te-dropdown-ref>
              <a
                class="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="www.Google.com"
                id="dropdownMenuButton1"
                role="button"
                data-te-dropdown-toggle-ref
<<<<<<< HEAD
                aria-expanded="false">
=======
                aria-expanded="false"
              >
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
                <span class="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
<<<<<<< HEAD
                    class="h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                      clip-rule="evenodd" />
                  </svg>
                </span>
                <span
                  class="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white"
                >1</span
                >
=======
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <span class="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white">
                  1
                </span>
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
              </a>
              <ul
                class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
<<<<<<< HEAD
                data-te-dropdown-menu-ref>
=======
                data-te-dropdown-menu-ref
              >
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="www.Google.com"
                    data-te-dropdown-item-ref
<<<<<<< HEAD
                  >Action</a
                  >
=======
                  >
                    Action
                  </a>
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="www.Google.com"
                    data-te-dropdown-item-ref
<<<<<<< HEAD
                  >Another action</a
                  >
=======
                  >
                    Another action
                  </a>
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="www.Google.com"
                    data-te-dropdown-item-ref
<<<<<<< HEAD
                  >Something else here</a
                  >
=======
                  >
                    Something else here
                  </a>
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
                </li>
              </ul>
            </div>
            <div class="relative" data-te-dropdown-ref>
              <a
                class="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="www.Google.com"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref
<<<<<<< HEAD
                aria-expanded="false">
=======
                aria-expanded="false"
              >
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                  class="rounded-full"
                  style={{ height: "25px", width: "25px" }}
                  alt=""
<<<<<<< HEAD
                  loading="lazy" />
=======
                  loading="lazy"
                />
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
              </a>
              <ul
                class="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton2"
<<<<<<< HEAD
                data-te-dropdown-menu-ref>
=======
                data-te-dropdown-menu-ref
              >
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="www.Google.com"
                    data-te-dropdown-item-ref
<<<<<<< HEAD
                  >Action</a
                  >
=======
                  >
                    Action
                  </a>
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="www.Google.com"
                    data-te-dropdown-item-ref
<<<<<<< HEAD
                  >Another action</a
                  >
=======
                  >
                    Another action
                  </a>
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="www.Google.com"
                    data-te-dropdown-item-ref
<<<<<<< HEAD
                  >Something else here</a
                  >
=======
                  >
                    Something else here
                  </a>
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
                </li>
              </ul>
            </div>
          </div>
<<<<<<< HEAD

        </div>
      </nav>
    </div>
  )
=======
        </div>
      </nav>
    </div>
  );
>>>>>>> fb9288b53a923db29dfd4715805bc865bf496338
}
