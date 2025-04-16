"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/styles.module.css"; // Adjust the path if necessary
import "../styles/global.css";

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
                        <h3 className="text-white">Jacob Elliott</h3>
                        <p>Providing Software Solutions and Video Editing Services.</p>
                        <address className="mt-3">
                            <p>
                                <a href="mailto:sendittojelliott@gmail.com" className="text-white text-decoration-none">
                                    sendittojelliott@gmail.com
                                </a>
                            </p>
                            <p>
                                <a href="tel:8706238220" className="text-white text-decoration-none">
                                    (870) 623-8220
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* About Section */}
                    <div className="col-md-4 text-center text-md-start">
                        <h5 className="mb-4">About Me</h5>
                        <p>
                            I&apos;m a dedicated software developer with a passion for creating innovative
                            solutions. Whether you need web development, content management systems,
                            or custom music composition, I&apos;m here to help turn your ideas into reality.
                        </p>
                        <a
                            href="https://linkedin.com/in/architect894"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-warning text-dark text-decoration-none mt-3"
                            style={{ borderRadius: "5px" }}
                        >
                            Connect on LinkedIn &nbsp; <i className="bi bi-linkedin"></i>
                        </a>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="text-center mt-5 pt-3"
                    style={{ borderTop: "1px solid #FFFFFF" }}
                >
                    <small>
                        Designed & Developed by <span className="text-warning">Jacob Elliott</span>. All Rights Reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
}
