import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  HomePage,
  BlogPage,
  BlogDetailsPage,
  ContactPage,
  SignInPage,
  SignUpPage,
} from "../components/sections/auth";
import { DashboardPage, JournalPage } from "../components/sections/dashboard";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { PublicOnlyRoute } from "../components/auth/PublicOnlyRoute";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/index" element={<Navigate replace to="/" />} />
        <Route path="/index_ico" element={<HomePage />} />
        <Route path="/index_memecoin" element={<HomePage />} />
        <Route path="/index_pepecoin" element={<HomePage />} />

        {/* Blog routes */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog_details" element={<BlogDetailsPage />} />

        {/* Contact route */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Auth routes */}
        <Route element={<PublicOnlyRoute />}>
          <Route path="/sign_in" element={<SignInPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
        </Route>

        {/* Protected learning routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/modules" element={<DashboardPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Route>

        {/* Legacy redirects */}
        <Route path="/index.html" element={<Navigate replace to="/" />} />
        <Route
          path="/index_ico.html"
          element={<Navigate replace to="/index_ico" />}
        />
        <Route
          path="/index_memecoin.html"
          element={<Navigate replace to="/index_memecoin" />}
        />
        <Route
          path="/index_pepecoin.html"
          element={<Navigate replace to="/index_pepecoin" />}
        />
        <Route path="/blog.html" element={<Navigate replace to="/blog" />} />
        <Route
          path="/blog_details.html"
          element={<Navigate replace to="/blog_details" />}
        />
        <Route
          path="/contact.html"
          element={<Navigate replace to="/contact" />}
        />
        <Route
          path="/sign_in.html"
          element={<Navigate replace to="/sign_in" />}
        />
        <Route
          path="/sign_up.html"
          element={<Navigate replace to="/sign_up" />}
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
