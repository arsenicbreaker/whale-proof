import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TemplatePage } from './TemplatePage';
import { appPages, legacyRedirects } from './routes';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {appPages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<TemplatePage bodyClass={page.bodyClass} html={page.html} title={page.title} />}
          />
        ))}
        {legacyRedirects.map((route) => (
          <Route key={route.from} path={route.from} element={<Navigate replace to={route.to} />} />
        ))}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
