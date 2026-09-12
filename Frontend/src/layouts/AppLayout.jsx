import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Common/Footer";
import { FooterNavbar } from "../components/Common/FooterNavbar";
import { AuthModal } from "../components/Auth/AuthModal";
import { AuthProvider } from "../context/AuthContext";
import { NetworkStatus } from "../components/Common/NetworkStatus";
import { ScrollTop } from "../hooks/scrollTop";

const routesWithFooter = ["/", "/menu"];

const routesWithoutFooterNavbar = ["/checkout", "/menu/food"];

export const AppLayout = () => {
  const location = useLocation();

  const showFooter = routesWithFooter.includes(location.pathname);

  const hideFooterNavbar = routesWithoutFooterNavbar.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <AuthProvider>
      <div>
        <NetworkStatus />
        <ScrollTop />
        <Outlet />

        {showFooter && <Footer />}

        <AuthModal />
        {!hideFooterNavbar && <FooterNavbar />}
      </div>
    </AuthProvider>
  );
};
