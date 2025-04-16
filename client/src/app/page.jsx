"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";
import Link from "next/link";
import Connections from "@/components/connections";

export default function Home() {
    const [scrollY, setScrollY] = useState(0); // Track the scroll position

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Calculate gradient stops based on scroll position
    const getGradientPosition = () => {
        const scrollFactor = Math.min(scrollY / (document.body.scrollHeight - window.innerHeight), 1);
        const purpleStop = Math.max(30 - scrollFactor * 30, 0); // Purple dominates the top
        const cyanStop = Math.min(40 + scrollFactor * 40, 100); // Cyan appears earlier
        return `linear-gradient(to bottom, hsl(280, 100%, 50%) ${purpleStop}%, hsl(180, 100%, 50%) ${cyanStop}%)`;
    };

    return (
        <section id="home">
            {/* Header Section */}
            <header
                className="position-relative d-flex align-items-center justify-content-center"
                style={{
                    background: "rgba(0, 0, 0, 0.8)", // Keep a dark overlay for readability
                    height: "100vh",
                    color: "#fff",
                    zIndex: 10,
                    overflow: "hidden",
                }}
            >
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.videoBackground}
                >
                    <source src="https://res.cloudinary.com/dzcsyysgp/video/upload/v1744846590/goldnblack_lettuh.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay content */}
                <div className="text-center position-relative" style={{ zIndex: 2 }}>
                    <h1 className="display-3 mb-4">Hey, I&apos;m Jacob</h1>
                    <p className="lead mb-5">
                        Feel free to have a look around, welcome to my portfolio!<br />
                        I am a software engineer with a passion for video editing and technology.
                    </p>
                    <div className="d-flex justify-content-center gap-3 mb-4">
                        <Link href="/projects" className="btn btn-outline-light btn-lg">
                            View Projects
                        </Link>
                        <Link href="/videoedits" className="btn btn-outline-light btn-lg">
                            View Video Edits
                        </Link>
                    </div>

                    {/* Social Media Icons placed here */}
                    <p className="text-light mb-3" style={{ fontSize: "1.5rem" }}>Connect with me:</p>
                    <div className="d-flex justify-content-center gap-4">
                        {[
                            { href: "https://github.com/Architect894", icon: "github" },
                            { href: "https://linkedin.com/in/architect894", icon: "linkedin" },
                            { href: "https://facebook.com/jacob.a.elliott/", icon: "facebook" },
                            { href: "https://instagram.com/jelliott_tv/", icon: "instagram" },
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white"
                                style={{
                                    fontSize: "2.5rem",
                                    transition: "transform 0.2s ease-in-out",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                <i className={`bi bi-${social.icon}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </header>


        </section>
    );
}
