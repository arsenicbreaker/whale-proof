import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthShell } from "./AuthShell";
import { useAuth } from "../../../context/AuthContext";

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (formState.password !== formState.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);

    try {
      const authData = await signUp({
        username: formState.username.trim(),
        email: formState.email,
        password: formState.password,
      });

      if (authData.session) {
        navigate("/dashboard", { replace: true });
        return;
      }

      navigate("/sign_in", {
        replace: true,
        state: {
          message:
            "Account created. Check your inbox if email confirmation is enabled, then sign in.",
        },
      });
    } catch (signUpError) {
      console.error("Sign up failed.", signUpError);
      setError(signUpError.message || "Unable to create your account.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthShell
      title="Create Account"
      description="Create your WhaleProof account to access the learning dashboard."
      footerPrompt="Already have an account?"
      footerLinkLabel="Sign in"
      footerLinkTo="/sign_in"
      showAside={false}
      compact
    >
      {error ? <div className="wp-alert wp-alert--error">{error}</div> : null}

      <form className="wp-form" onSubmit={handleSubmit}>
        <label className="wp-field">
          <span>Username</span>
          <input
            name="username"
            type="text"
            value={formState.username}
            onChange={handleChange}
            placeholder="WhaleSlayer"
            autoComplete="nickname"
            minLength={3}
            required
          />
        </label>

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
            placeholder="Minimum 6 characters"
            autoComplete="new-password"
            minLength={6}
            required
          />
        </label>

        <label className="wp-field">
          <span>Confirm password</span>
          <input
            name="confirmPassword"
            type="password"
            value={formState.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat your password"
            autoComplete="new-password"
            minLength={6}
            required
          />
        </label>

        <div className="wp-form__footer">
          <button className="wp-button wp-button--full" type="submit" disabled={submitting}>
            {submitting ? "Creating account..." : "Create account"}
          </button>
        </div>
      </form>
    </AuthShell>
  );
};
