import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function PublicOnlyRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <section className="wp-route-state">
        <div className="wp-route-state__card">
          <p className="wp-route-state__eyebrow">WhaleProof Access</p>
          <h1>Preparing authentication</h1>
          <p>Loading your session before rendering the auth flow.</p>
        </div>
      </section>
    );
  }

  if (isAuthenticated) {
    return <Navigate replace to="/dashboard" />;
  }

  return <Outlet />;
}
