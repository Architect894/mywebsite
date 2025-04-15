"use client";
import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import styles from "../styles/styles.module.css";
import PagesLayout from "./pageslayout";

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
            src: "https://res.cloudinary.com/dzcsyysgp/video/upload/v1744694453/AltitudeAdMobile_zala3d.mp4",
            title: "Altitude Imaging Ad",
        },
        {
            src: "https://res.cloudinary.com/dzcsyysgp/video/upload/v1744694453/Wrangler_rqblr3.mp4",
            title: "Wrangler Before and After",
        },
        {
            src: "https://res.cloudinary.com/dzcsyysgp/video/upload/v1744694456/Rav4AI_kipy17.mp4",
            title: "Toyota RAV4 w/ Voiceover",
        },
        {
            src: "https://res.cloudinary.com/dzcsyysgp/video/upload/v1744694458/Audi_sreb08.mp4",
            title: "Audi Before and After",
        },
        {
            src: "https://res.cloudinary.com/dzcsyysgp/video/upload/v1744694453/Explorer_pewzfp.mp4",
            title: "Explorer Before and After",
        },
        {
            src: "https://res.cloudinary.com/dzcsyysgp/video/upload/v1744694455/AT4_sjk4oj.mp4",
            title: "Sierra AT4 Before and After",
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
            <section
                className="text-white py-5 text-center"
                style={{ fontFamily: "Quicksand" }}
            >
                <div className="container mb-5">
                    <h2 className="display-4 mb-3">Video Editing Projects</h2>
                    <p className="lead">Showcase of mobile-optimized video edits.</p>
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
                                style={{
                                    width: "100%",
                                    aspectRatio: "9 / 16",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    border: "2px solid #444",
                                    backgroundColor: "#000",
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
                    <h3 className="display-5 mb-3">Landscape Video Edits</h3>
                    <p className="lead">Showcase of Landscape Video Edits.</p>
                </div>

                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {landscapeVideos.map((video, index) => (
                            <div className="col-12 col-md-6 col-lg-5" key={index}>
                                <h5 className="fw-semibold text-white">{video.title}</h5>
                                <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>{video.description}</p>
                                <video
                                    controls
                                    muted={false}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "10px",
                                        border: "2px solid #444",
                                        backgroundColor: "#000",
                                    }}
                                >
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PagesLayout>
    );
}
