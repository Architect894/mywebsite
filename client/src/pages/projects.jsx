"use client";
import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/styles.module.css';
import '../styles/global.css';
import PagesLayout from './pageslayout';

export default function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles['visible']);
                } else {
                    entry.target.classList.remove(styles['visible']);
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <PagesLayout>
            {/* Pest Control Section */}
            <section
                id="pest-control"
                className="position-relative text-white py-5 text-center"
                ref={sectionRef}
                style={{ marginTop: "2%", fontFamily: "Quicksand" }}
            >
                <div className="container position-relative d-flex flex-column justify-content-center align-items-center mb-5"
                    style={{
                        zIndex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '10px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                        padding: '20px',
                        maxWidth: '90%',
                    }}
                >
                    <h2 className="display-3 mb-3">Pest Control Project Demo</h2>
                    <p className="lead">
                        This is a video walkthrough of the pest control site I developed,
                        demonstrating its layout, features, and responsive design. The goal was
                        to create a modern, informative, and user-friendly website.
                    </p>
                </div>

                <div className="container d-flex flex-wrap justify-content-center gap-">
                    {['/pestcontrolweb.mp4'].map((src, index) => (
                        <div key={index} style={{ width: '100%', maxWidth: '1450px' }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                                <video
                                    src={src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="rounded shadow"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Storybook Section */}
            <section
                id="storybook-demo"
                className="position-relative text-white py-2 text-center"
                style={{ marginTop: "0%", fontFamily: "Quicksand" }}
            >
                <div className="container position-relative d-flex flex-column justify-content-center align-items-center mb-5"
                    style={{
                        zIndex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '10px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                        padding: '20px',
                        maxWidth: '90%',
                    }}
                >
                    <h2 className="display-3 mb-3">Storybook UI System Demo</h2>
                    <p className="lead">
                        This video demonstrates my component-driven UI development using Storybook.
                        It showcases how reusable components are structured, tested, and documented 
                        for scalable frontend projects.
                    </p>
                </div>

                <div className="container d-flex flex-wrap justify-content-center gap-4">
                    {['/storybook.mp4'].map((src, index) => (
                        <div key={index} style={{ width: '100%', maxWidth: '1450px' }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                                <video
                                    src={src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="rounded shadow"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </PagesLayout>
    );
}
