import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";

export default function ContactUs() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base/7 font-semibold text-indigo-400">Let&apos;s Work Together</h2>
                <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Turning your vision into reality.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    
                    {/* Card 1: Software Solutions */}
                    <div className="flex p-px lg:col-span-4 hover:scale-105 hover:shadow-lg transition duration-200">
                        <div className="overflow-hidden rounded-lg bg-gray-900 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
                            <video
                                className="w-full h-80 object-cover object-center"
                                src="/JELOGO.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="p-10">
                                <h3 className="text-sm/4 font-semibold text-gray-400">Software Solutions</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-200">
                                    Building the Future of Tech
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                                    Whether it&apos;s web applications, automation tools, or bespoke software, I design and
                                    develop solutions tailored to your unique needs using modern tech stacks like
                                    JavaScript and Python.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Music Services */}
                    <div className="flex p-px lg:col-span-2 hover:scale-105 hover:shadow-lg transition duration-200">
                        <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
                            <video
                                className="w-full h-80 object-cover object-center"
                                src="/musicJE.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="p-10">
                                <h3 className="text-sm/4 font-semibold text-gray-400">Music Services</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                                    Custom Compositions
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                                    Professional music composition and production for any project. From scoring films
                                    to creating original tracks, let’s craft something that resonates.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Collaboration */}
                    <div className="flex p-px lg:col-span-4 hover:scale-105 hover:shadow-lg transition duration-200">
                        <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
                            <video
                                className="w-full h-80 object-cover object-center"
                                src="JE+you.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="p-10">
                                <h3 className="text-sm/4 font-semibold text-gray-400">Collaboration</h3>
                                <p className="mt-2 text-lg font-medium tracking-tight text-white">
                                    Your Vision, My Expertise
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
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
