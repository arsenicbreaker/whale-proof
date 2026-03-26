import React, { useEffect } from "react";

const Layout = ({ children, title, bodyClass, showFooter, className }) => {
  useEffect(() => {
    if (!title) {
      return undefined;
    }

    const previousTitle = document.title;
    document.title = title;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  useEffect(() => {
    if (!bodyClass) {
      return undefined;
    }

    const classes = bodyClass.split(/\s+/).filter(Boolean);
    if (!classes.length) {
      return undefined;
    }

    document.body.classList.add(...classes);

    return () => {
      document.body.classList.remove(...classes);
    };
  }, [bodyClass]);

  const wrapperClassName = [bodyClass, className].filter(Boolean).join(" ");

  return (
    <div className={wrapperClassName || undefined}>
      {children}
      {showFooter && (
        <footer>
          <p>Footer</p>
        </footer>
      )}
    </div>
  );
};

export default Layout;
