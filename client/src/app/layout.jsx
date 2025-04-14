import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css'; // Adjust path to your global CSS file
import ContactUs from "@/components/contactus";
import DropMenu from "@/components/dropMenu";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export const metadata = {
  title: "Jacob Elliott",
  description: "My portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className="custom-layout"> {/* Add the custom class */}
        <DropMenu />
        {children}
        <Contact />
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
