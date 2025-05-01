import React from "react";

const Hero = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
                Build and ship software on a <br></br> single, collaborative platform
            </h1>

            <p className="text-xl text-white mb-8">
                Join the world's most widely adopted AI-powered developer platform. Lets begin!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="rounded bg-white gap-1 flex p-1">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-3 bg-white text-black  border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

                    <button className="bg-green-700 text-white px-6 py-3  rounded-md font-medium hover:bg-gray-800 transition-colors">
                        Sign up for GitHub
                    </button>
                </div>

                <button className="bg-transparent text-white px-6 py-3 rounded-md font-medium border border-white  hover:bg-transparent-50 transition-colors">
                    Try GitHub Copilott
                </button>
            </div>
        </div>
    );
};

export default Hero;