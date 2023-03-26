import React from 'react'
import Navbar from '../components/Navbar';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function Complaint() {
    return (
        <div>
            <Navbar />

            <div className="">
                <div className="bg-white lg:text-center py-16">

                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Have a complaint or issue?
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

                    <div className="mt-10 flex justify-center items-center grid grid-rows-3 ">
                        <div className='h-27 max-w-full p-8 m-8 bg-white items-center justify-center '>

                            Specify
                            <span className='m-10'></span>
                            <div class="inputbox" className='outline outline-2  outline-offset-2'>
                                <input
                                    name="email"
                                    value=""
                                    type="email"
                                    required
                                    onChange=""
                                />
                                <label for="">Email</label>
                            </div>
                            Elaborate the issue
                            <div class="inputbox" className='outline outline-2  outline-offset-2'>
                                <input
                                    name="email"
                                    value=""
                                    type="email"
                                    required
                                    onChange=""
                                />
                                <label for="">Issue</label>
                            </div>
                            <Button className='my-6'>Lodge a complaint</Button>

                        </div>
                    </div>
                    <div className="mt-10 text-gray-600">

                    </div>
                </div>
            </div>

        </div>
    );
};

