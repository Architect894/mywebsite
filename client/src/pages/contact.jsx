"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/styles.module.css";
import "../styles/global.css";
import PagesLayout from './pageslayout';
import Head from './logos';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
        window.location.href = `mailto:architect894@gmail.com?subject=Message from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
    };

    return (
        <PagesLayout>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
                />
            </Head>
            <section
                id="contact"
                className="text-white py-5 text-center"
                style={{
                    marginTop: "2%",
                    fontFamily: "Quicksand",
                }}
            >
                <div
                    className="container d-flex flex-column justify-content-center align-items-center mb-5"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "10px",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                        padding: "20px",
                        maxWidth: "90%",
                    }}
                >
                    <h2 className="display-3 mb-3">Get in Touch</h2>
                    <p className="lead" style={{ fontSize: "1.65rem" }}>
                        I&apos;d love to hear from you! Whether it&apos;s a project, a question, or just a hello.
                    </p>
                    <p className="text-light mb-2" style={{ fontSize: "1.50rem" }}>Email me directly at:</p>
                    <p>
                        <a
                            href="mailto:sendittojelliott@gmail.com"
                            className="text-info fw-bold"
                            style={{ fontSize: "1.50rem" }}
                        >
                            sendittojelliott@gmail.com
                        </a>
                    </p>

                    {/* Social Icons */}
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
            </section>
        </PagesLayout>
    );
}
