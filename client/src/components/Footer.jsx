import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import React, { useState } from "react";


const languages = [
  { value: 'en', text: "English" },
  { value: 'hi', text: "Hindi" },
  { value: 'mr', text: "Marathi" }
]

export default function Footer() {
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
    <footer className="px-5 py-5 bg-white flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            <Link style={{ color: "blue-gray", textDecoration: "none" }} to='/about'>
            {t('about')}
            </Link>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            {t('license')}
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            {t('contribute')}
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            {t('contact')}
          </Typography>
        </li>
      </ul>
    </footer>
  );
}