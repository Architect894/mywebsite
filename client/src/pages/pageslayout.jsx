// src/pages/pageslayout.jsx
import React from "react";
import DropMenu from "../components/dropMenu";
import Footer from "../components/footer";

export default function PagesLayout({ children }) {
    return (
        <>
            <DropMenu />
            <main>{children}</main>
            <Footer />
        </>
    );
}

