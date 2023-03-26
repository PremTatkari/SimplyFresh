
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useTranslation } from 'react-i18next'
import React, { useState } from "react";


const languages = [
    { value: 'en', text: "English" },
    { value: 'hi', text: "Hindi" },
    { value: 'mr', text: "Marathi" }
  ]

const About = () => {
    const { t } = useTranslation();
    const [lang, setLang] = useState('');

    const handleChange = e => {
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);
      }

    return (
        <div>
            <Navbar />

            <div className="">
                <div className="bg-white lg:text-center py-16">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                    {t('about')}
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {t('connecting')}
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

                    <div className="mt-10 flex justify-center items-center">

                    </div>
                    <div className="mt-10 text-gray-600">
                        <p>
                        {t('p1')}
                        </p>
                        <p className="mt-4">
                        {t('p2')}</p>
                        <p className="mt-4">
                        {t('p3')} </p>
                        <p className="mt-4">
                        {t('p4')}</p>
                    </div>
                </div>
            </div>
            <div class="fixed inset-x-0 bottom-0"><Footer /> </div>
        </div>
    );
};

export default About;
