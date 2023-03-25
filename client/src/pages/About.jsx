import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <div>
            <Navbar />

            <div className="">
            <div className="bg-white lg:text-center py-16">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                            About Us
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Connecting Local Farmers and Consumers
                        </p>
                    </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                    
                    <div className="mt-10 flex justify-center items-center">

                    </div>
                    <div className="mt-10 text-gray-600">
                        <p>
                            We are a third-party organization that connects local farmers with
                            consumers in the area. Our goal is to make it easier for people to
                            access fresh and high-quality produce while supporting local farmers
                            and their sustainable farming practices.
                        </p>
                        <p className="mt-4">
                            We work with a variety of farmers, from small family-owned farms to
                            larger agricultural cooperatives, to ensure that we can offer a
                            diverse selection of high-quality produce to our customers. We value
                            transparency and accountability and provide detailed information
                            about each farmer and their farming practices, so you can make
                            informed decisions about the food you buy.
                        </p>
                        <p className="mt-4">
                            Our website offers a wide selection of fruits and vegetables, meats,
                            dairy products, and more, all sourced from local farmers who use
                            environmentally friendly and ethical farming practices. We also
                            provide resources and information on sustainable living, including
                            tips on reducing food waste, composting, and other eco-friendly
                            practices.
                        </p>
                        <p className="mt-4">
                            At our organization, we strive to offer fair prices to both farmers
                            and consumers, ensuring that everyone benefits from our services.
                            Thank you for visiting our website, and we hope that you'll join us
                            in supporting local farmers and building a healthier and more
                            sustainable community.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
