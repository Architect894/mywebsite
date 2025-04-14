"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/styles.module.css";
import "../styles/global.css";


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

        // Opens the user's email client with pre-filled data
        window.location.href = `mailto:architect894@gmail.com?subject=Message from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
    };

    return (
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
                    <p className="lead">
                        I&apos;d love to hear from you! Whether it's a project, a question, or just a hello.
                    </p>
                    <p className="text-light mb-2">Email me directly at:</p>
                    <p>
                        <a href="mailto:architect894@gmail.com" className="text-info fw-bold">
                            architect894@gmail.com
                        </a>
                    </p>
                </div>
            </section>
    );
}
