import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Common/Footer";
import { FooterNavbar } from "../components/Common/FooterNavbar";
import { AuthModal } from "../components/Auth/AuthModal";
import { AuthProvider } from "../context/AuthContext";
import { NetworkStatus } from "../hooks/NetworkStatus";
import { ScrollTop } from "../hooks/scrollTop";

const routesWithFooter = ["/", "/menu"];

const routesWithoutFooterNavbar = ["/menu/food"];

export const AppLayout = () => {
  const location = useLocation();

  const showFooter = routesWithFooter.includes(location.pathname);

  const hideFooterNavbar = routesWithoutFooterNavbar.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <AuthProvider>
      <div>
        <ScrollTop />
        <Outlet />

        {showFooter && <Footer />}

        <AuthModal />
        {!hideFooterNavbar && <FooterNavbar />}
        <NetworkStatus />
      </div>
    </AuthProvider>
  );
};
