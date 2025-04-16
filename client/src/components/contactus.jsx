import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";

export default function ContactUs() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-4xl px-6 lg:max-w-6xl lg:px-8 text-center">
                <h2 className="text-base/7 font-semibold text-indigo-400">Let&apos;s Work Together</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Turning your vision into reality.
                </p>

                {/* Centered Card Grid */}
                <div className="mt-16 grid gap-10 lg:grid-cols-2 justify-items-center">
                    
                    {/* Card 1: Software Solutions */}
                    <div className="flex flex-col w-full max-w-xl hover:scale-105 hover:shadow-lg transition duration-200">
                        <div className="overflow-hidden rounded-lg bg-gray-900 ring-1 ring-white/15">
                            <video
                                className="w-full h-80 object-cover object-center"
                                src="https://res.cloudinary.com/dzcsyysgp/video/upload/v1744694445/JELOGO_n4xxyz.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="p-8">
                                <h3 className="text-lg font-semibold text-gray-400">Software Solutions</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-200">
                                    Building Your Future App
                                </p>
                                <p className="mt-2 text-sm text-gray-400">
                                    Whether it&apos;s web applications, automation tools, or bespoke software, I design and
                                    develop solutions tailored to your unique needs using modern tech stacks 
                                    like Next.js, FlaskStack, and MERN. 
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Collaboration */}
                    <div className="flex flex-col w-full max-w-xl hover:scale-105 hover:shadow-lg transition duration-200">
                        <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15">
                            <video
                                className="w-full h-80 object-cover object-center"
                                src="https://res.cloudinary.com/dzcsyysgp/video/upload/v1744694445/JE_you_jqckex.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="p-8">
                                <h3 className="text-lg font-semibold text-gray-400">Video Editing</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                                    Your Vision, My Expertise
                                </p>
                                <p className="mt-2 text-sm text-gray-400">
                                    Collaboration is at the heart of every project I undertake. Whether you&apos;re an
                                    individual, a startup, or a growing business, I bring your ideas to life with
                                    innovation and precision.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
