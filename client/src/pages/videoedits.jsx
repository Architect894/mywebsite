"use client";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";
import PagesLayout from "./pageslayout";
import Head from "./logos";

export default function VideoEditing() {
    const videoRefs = useRef([]);

    const handlePlay = (index) => {
        videoRefs.current.forEach((video, i) => {
            if (video && i !== index) {
                video.pause();
                video.currentTime = 0;
            }
        });
    };

    const mobileVideos = [
        {
            src: "https://jelliottvideos.b-cdn.net/altitudeadmob.mp4",
            title: "Altitude Imaging Ad",
        },
        {
            src: "https://jelliottvideos.b-cdn.net/GreenGatorAd1.mp4",
            title: "Green Gator Pressure Washing Ad",
        },
        {
            src: "https://jelliottvideos.b-cdn.net/ravaiad.mp4",
            title: "RestorFX Services Ad",
        },
        {
            src: "https://jelliottvideos.b-cdn.net/audibanda.mp4",
            title: "Audi Before and After",
        },
        {
            src: "https://jelliottvideos.b-cdn.net/explorerbanda.mp4",
            title: "Explorer Before and After",
        },
        {
            src: "https://jelliottvideos.b-cdn.net/wranglerbanda.mp4",
            title: "Jeep Wrangler Before and After",
        }
    ];

    const landscapeVideos = [
        {
            src: "https://res.cloudinary.com/dzcsyysgp/video/upload/v1744694458/AltitudeAd1_fbppcz.mp4",
            title: "Altitude Imaging Promo",
        },
        {
            src: "https://res.cloudinary.com/dzcsyysgp/video/upload/v1744694456/AltitudeAd2_xsxcp8.mp4",
            title: "Altitude Imaging Promo",
        }
    ];

    return (
        <PagesLayout>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
                />
            </Head>
            <section
                className="text-white py-5 text-center"
                style={{ fontFamily: "Quicksand" }}
            >
                <div className="container mb-5">
                    <h2 className="display-4 mb-3">Portrait Video Projects</h2>
                    <p className="lead">Want to showcase your business in action? I create engaging, high-quality video edits using CapCut, DaVinci Resolve, and Adobe Premiere—perfect for before-and-after
                        transformations, promos, and small business ads that connect with your audience.</p>
                </div>

                <div
                    className="container-fluid px-5"
                    style={{
                        overflowX: "auto",
                        whiteSpace: "nowrap",
                        display: "flex",
                        gap: "3rem",
                        paddingBottom: "2rem",
                        scrollSnapType: "x mandatory",
                    }}
                >
                    {mobileVideos.map((video, index) => (
                        <div
                            key={index}
                            style={{
                                width: "300px",
                                flex: "0 0 auto",
                                scrollSnapAlign: "center",
                                textAlign: "left",
                            }}
                        >
                            <h5 className="fw-semibold mb-2 text-white">{video.title}</h5>
                            <p className="text-muted mb-3" style={{ fontSize: "0.9rem" }}>{video.description}</p>

                            <video
                                ref={(el) => (videoRefs.current[index] = el)}
                                onPlay={() => handlePlay(index)}
                                controls
                                muted={false}
                                className={styles.videoHoverEffect}
                                style={{
                                    width: "100%",
                                    aspectRatio: "9 / 16",
                                    objectFit: "cover",
                                }}
                            >
                                <source src={video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ))}
                </div>
            </section>

            {/* Landscape Section */}
            <section className="text-white py-5" style={{ fontFamily: "Quicksand" }}>
                <div className="container mb-5 text-center">
                    <h3 className="display-5 mb-3">Landscape Video Projects</h3>
                    <p className="lead">Crafted for a cinematic touch, these landscape videos are designed to showcase your business in a bold, professional
                        light—perfect for connecting with audiences who want to see the full story behind your brand.</p>
                </div>

                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {landscapeVideos.map((video, index) => {
                            const globalIndex = mobileVideos.length + index;
                            return (
                                <div className="col-12 col-md-6 col-lg-5" key={index}>
                                    <h5 className="fw-semibold text-white">{video.title}</h5>
                                    <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>{video.description}</p>
                                    <video
                                        ref={(el) => (videoRefs.current[globalIndex] = el)}
                                        onPlay={() => handlePlay(globalIndex)}
                                        controls
                                        muted={false}
                                        className={styles.videoHoverEffect}
                                        style={{
                                            width: "100%",
                                            objectFit: "cover",
                                        }}
                                    >
                                        <source src={video.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section >
        </PagesLayout >
    );
}
