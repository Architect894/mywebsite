import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css'; // Adjust path to your global CSS file
import ContactUs from "@/components/contactus";
import DropMenu from "@/components/dropMenu";
import Footer from "@/components/footer";

export const metadata = {
  title: "Jacob Elliott",
  description: "My portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <head>
        {/* Bootstrap Icons CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </head>
        <body className="custom-layout"> {/* Add the custom class */}
          <DropMenu />
          {children}
          <ContactUs />
          <Footer />
        </body>
    </html>
  );
}
