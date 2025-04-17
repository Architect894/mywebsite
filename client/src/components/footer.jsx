"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/styles.module.css"; // Adjust the path if necessary
import "../styles/global.css";
import Connections from "./connections";

export default function Footer() {
    return (
        <footer
            className="text-white py-5"
            style={{
                backgroundColor: "rgb(36, 51, 63)", // Bright blue background color
                fontFamily: "Quicksand",
            }}
        >
            <div className="container">
                <div className="row">
                    {/* Personal Branding Section */}
                    <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
                        <h3 className="text-white font-bold">Jacob Elliott</h3>
                        <p>Providing Software Solutions and Video Editing Services.</p>
                        <address className="mt-3">
                            <p>
                                <a href="mailto:sendittojelliott@gmail.com" className="text-white text-decoration-none">
                                    sendittojelliott@gmail.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:8706238220" className="text-white text-decoration-none font-bold">
                                    (870) 623-8220
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* About Section */}
                    <div className="col-md-4 text-center text-md-start">
                        <h5 className="mb-0 font-bold">About Me</h5>
                        <p>
                            I&apos;m a dedicated software developer with a passion for creating innovative
                            solutions. Whether you need web development, content management systems,
                            or custom music composition, I&apos;m here to help turn your ideas into reality.
                        </p>
                        <p className="text-light mt-4 mb-2" style={{ fontSize: "1.5rem" }}>Connect with me:</p>
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
                                        fontSize: "2.0rem",
                                        transition: "transform 0.2s ease-in-out",
                                        margin: "0 20px",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                >
                                    <i className={`bi bi-${social.icon}`}></i>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="text-center mt-5 pt-3"
                    style={{ borderTop: "1px solid #FFFFFF" }}
                >
                    <small>
                        Designed & Developed by <span className="text-warning">Jacob Elliott</span>
                    </small>
                </div>
            </div>
        </footer>
    );
}
