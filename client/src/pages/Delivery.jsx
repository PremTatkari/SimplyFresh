import React from 'react'
import Navbar from '../components/Navbar';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import Footer from '../components/Footer';

export default function Delivery() {
    return (
        <div>
            <Navbar />

            <div className="">
                <div className="bg-white lg:text-center py-16">

                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Choose from available delivery jobs
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

                    <div className="mt-10 flex justify-center items-center grid grid-rows-3 ">
                        <div className='h-27 w-50 p-8 m-8 bg-white items-center justify-center rounded-md'>

                            From: Farmers Location
                            <span className='m-10'></span>
                            Estimated time: n/a
                            <span className='m-10'></span>
                            To: Customers Location

                            <Button className='my-6'>Accept</Button>

                        </div>
                    </div>
                    <div className="mt-10 text-gray-600">

                    </div>
                </div>
            </div>
            <div class="fixed inset-x-0 bottom-0"><Footer /> </div>
        </div>
    );
};

