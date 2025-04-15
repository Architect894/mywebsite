"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../styles/global.css";
import "../styles/styles.module.css";

export default function DropMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header
            className="menu-container"
            style={{
                position: "sticky",
                top: "0",
                zIndex: "50",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                backdropFilter: "blur(5px)",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                padding: "10px 20px",
            }}
        >
            <nav
                className="mx-auto flex max-w-8xl items-center justify-between p-0 lg:px-8"
                aria-label="Global"
            >
                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex w-full justify-center items-center space-x-6">
                <Link href="/" className="button-container py-1 px-3 text-white hover:text-yellow-400">
                        Home
                    </Link>
                    <Link href="/projects" className="button-container py-1 px-3">
                        Projects
                    </Link>
                    <Link href="/videoedits" className="button-container py-1 px-3">
                        Video Editing
                    </Link>
                    <a
                            href="https://linkedin.com/in/architect894" // Replace with your LinkedIn profile
                            className="button-container py-1 px-3 text-white hover:text-yellow-400"
                            style={{ borderRadius: "5px" }}
                        >
                            Connect on LinkedIn &nbsp; <i className="bi bi-linkedin"></i>
                    </a>
                    <Link
                        href="/"
                        className="button-container py-1 px-3 text-white hover:text-yellow-400"
                    >
                        Get In Touch <span aria-hidden="true" className="ml-2">→</span>
                    </Link>
                </div>


                {/* Mobile Menu Toggle Button */}
                <div className="flex lg:hidden w-full justify-center">
                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-gray-800 text-white py-6 px-4 flex flex-col items-center text-center space-y-4 animate-dropdown">
                    <Link href="/" className="button-container py-1 px-3 text-white hover:text-yellow-400">
                        Home
                    </Link>
                    <Link href="/projects" className="button-container py-1 px-3 text-white hover:text-yellow-400">
                        Projects
                    </Link>
                    <Link href="/videoedits" className="button-container py-1 px-3 text-white hover:text-yellow-400">
                        Video Editing
                    </Link>
                    <a
                            href="https://linkedin.com/in/architect894" // Replace with your LinkedIn profile
                            className="button-container py-1 px-3 text-white hover:text-yellow-400"
                            style={{ borderRadius: "5px" }}
                        >
                            Connect on LinkedIn &nbsp; <i className="bi bi-linkedin"></i>
                    </a>
                    <Link
                        href="/"
                        className="button-container py-1 px-3 text-white hover:text-yellow-400"
                    >
                        Get In Touch →
                    </Link>
                </div>
            )}
        </header>
    );
}
