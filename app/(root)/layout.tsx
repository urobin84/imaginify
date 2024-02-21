// import Mobile Nav component
import MobileNav from "@/components/shared/MobileNav";
// import Sidebar component
import Sidebar from "@/components/shared/Sidebar";
// import Toaster component
import { Toaster } from "@/components/ui/toaster";

// const Layout
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>

      <Toaster />
    </main>
  );
};

export default Layout;
