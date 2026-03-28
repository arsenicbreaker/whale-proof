import { Link } from "react-router-dom";
import { PageLayout } from "../../layout";
import { isSupabaseConfigured } from "../../../lib/supabaseClient";

export function AuthShell({
  title,
  description,
  asideTitle,
  asideCopy,
  footerPrompt,
  footerLinkLabel,
  footerLinkTo,
  showAside = true,
  compact = false,
  children,
}) {
  const pageClassName = compact ? "wp-auth-page wp-auth-page--compact" : "wp-auth-page";
  const shellClassName = compact ? "wp-auth-shell wp-auth-shell--compact" : "wp-auth-shell";
  const cardClassName = compact ? "wp-auth-card wp-auth-card--compact" : "wp-auth-card";

  return (
    <PageLayout
      bodyClass="index_ico whaleproof-app-body"
      title={`${title} - WhaleProof`}
      templateScripts={false}
    >
      <section className={pageClassName}>
        <div className="container">
          <div className={shellClassName}>
            {showAside ? (
              <aside className="wp-auth-panel">
                <div className="wp-auth-panel__content">
                  <p className="wp-auth-panel__eyebrow">WhaleProof Access Layer</p>
                  <h1>{asideTitle}</h1>
                  <p className="wp-auth-panel__copy">{asideCopy}</p>
                </div>

                <ul className="wp-auth-panel__list">
                  <li>
                    <strong>Identity sync</strong>
                    <span>Profiles stay tied to the Supabase auth user id.</span>
                  </li>
                  <li>
                    <strong>Progress tracking</strong>
                    <span>Phase completion updates <code>user_progress</code> and score data.</span>
                  </li>
                  <li>
                    <strong>Protected journal</strong>
                    <span>The Shield journal stays behind authenticated routes and RLS rules.</span>
                  </li>
                </ul>

                <div className="wp-auth-panel__footer">
                  <div className="wp-auth-panel__pill">Dark-mode training environment</div>
                  <div className="wp-auth-panel__signal">
                    <span className="wp-auth-panel__signal-label">System posture</span>
                    <strong>Secured for active learning</strong>
                  </div>
                </div>
              </aside>
            ) : null}

            <div className={cardClassName}>
              <div className="wp-auth-card__header">
                <p className="wp-auth-card__eyebrow">{title}</p>
                <h2>{title}</h2>
                <p className="wp-auth-card__description">{description}</p>
              </div>
              {!isSupabaseConfigured ? (
                <div className="wp-alert wp-alert--error">
                  Supabase environment variables are missing. Create `.env` from
                  `.env.example` before testing auth.
                </div>
              ) : null}
              {children}
              <p className="wp-auth-card__copy">
                {footerPrompt}{" "}
                <Link className="wp-auth-link" to={footerLinkTo}>
                  {footerLinkLabel}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
