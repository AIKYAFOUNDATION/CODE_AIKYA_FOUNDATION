import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PageShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="site-shell">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
