import React from "react";

import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";


export default function Navbar() {

  return (
    <div>
      <nav
        class="fixed top-0 flex-no-wrap relative flex w-full items-center justify-between bg-neutral-100 py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
      >
        <div class="flex w-full flex-wrap items-center justify-between px-6">
          <button
            class="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="www.Google.comnavbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item
          >
            <Link to='/'
              class="mt-2 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"

            >
              <h1>SimplyFresh</h1>

            </Link>

            <ul
              class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li class="lg:pr-2" data-te-nav-item-ref>
                <Link style={{ color: "white" }} to='/complaint'>
                  Complaint
                </Link>
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <Link style={{ color: "white" }} to='/productRegistration'>
                  Products
                </Link>
              </li>
              <li class="lg:pr-2" data-te-nav-item-ref>
                <Link style={{ color: "white" }} to='/cart'>
                  Cart
                </Link>
              </li>

              <li class="lg:pr-2" data-te-nav-item-ref>
                <Link style={{ color: "white" }} to='/delivery'>
                  Delivery
                </Link>
              </li>

            </ul>
          </div>

          <div class="relative flex items-center">

            <Dropdown />

          </div>
        </div>

      </nav>
    </div>
  );
}