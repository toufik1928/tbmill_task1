import React, { useContext } from "react";
import Welcome from "../components/Welcome";
import AuthForm from "../components/AuthForm";
import { AuthContext, AuthProvider } from "../Context/AuthContext";

function AppContent() {
  const { user, login, logout } = useContext(AuthContext);

  if (user) {
    return <Welcome user={user} onLogout={logout} />;
  }

  return <AuthForm onAuthSuccess={login} />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
