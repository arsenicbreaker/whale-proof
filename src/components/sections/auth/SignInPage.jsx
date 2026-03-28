import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthShell } from "./AuthShell";
import { useAuth } from "../../../context/AuthContext";

export const SignInPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const destination = location.state?.from?.pathname || "/dashboard";
  const feedbackMessage = location.state?.message || "";

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await signIn(formState);
      navigate(destination, { replace: true });
    } catch (signInError) {
      console.error("Sign in failed.", signInError);
      setError(signInError.message || "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthShell
      title="Login"
      description="Sign in to continue your WhaleProof learning path."
      footerPrompt="Need an account?"
      footerLinkLabel="Create one"
      footerLinkTo="/sign_up"
      showAside={false}
      compact
    >
      {feedbackMessage ? <div className="wp-alert">{feedbackMessage}</div> : null}
      {error ? <div className="wp-alert wp-alert--error">{error}</div> : null}

      <form className="wp-form" onSubmit={handleSubmit}>
        <label className="wp-field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="trader@whaleproof.io"
            autoComplete="email"
            required
          />
        </label>

        <label className="wp-field">
          <span>Password</span>
          <input
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />
        </label>

        <div className="wp-form__footer">
          <button className="wp-button wp-button--full" type="submit" disabled={submitting}>
            {submitting ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </form>
    </AuthShell>
  );
};
