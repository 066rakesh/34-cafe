import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Common/Footer";
import { FooterNavbar } from "../components/Common/FooterNavbar";
import { AuthModal } from "../components/Auth/AuthModal";
import { ProfileModal } from "../components/Auth/ProfileModal";
import { UIProvider } from "../context/UIContext";

const routesWithoutFooter = [
  "/search",
  "/ask-ai",
  "/checkout",
  "/payment",
  "/menu/food",
];

const routesWithoutFooterNavbar = ["/checkout", "/menu/food"];

export const AppLayout = () => {
  const location = useLocation();

  const hideFooter = routesWithoutFooter.some((path) =>
    location.pathname.startsWith(path)
  );

  const hideFooterNavbar = routesWithoutFooterNavbar.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <UIProvider>
      <div>
        <Outlet />

        {!hideFooter && <Footer />}

        <AuthModal />
        <ProfileModal />
        {!hideFooterNavbar && <FooterNavbar />}
      </div>
    </UIProvider>
  );
};
