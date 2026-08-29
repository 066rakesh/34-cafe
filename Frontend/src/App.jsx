import "./styles/Global.css";
import { AuthProvider } from "./context/AuthContext";
import { AppContent } from "./AppContent";

export const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};
