import parse, { attributesToProps, domToReact } from 'html-react-parser';
import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { refreshTemplateScripts } from './externalScripts';
import { mapTemplateHrefToRoute } from './routeMap';

export function TemplatePage({ bodyClass, html, title }) {
  const location = useLocation();

  const parserOptions = useMemo(() => {
    const options = {
      replace(node) {
        if (node.type !== 'tag' || node.name !== 'a' || !node.attribs?.href) {
          return undefined;
        }

        const route = mapTemplateHrefToRoute(node.attribs.href);

        if (!route) {
          return undefined;
        }

        const props = attributesToProps(node.attribs);
        delete props.href;

        return (
          <Link {...props} to={route}>
            {domToReact(node.children, options)}
          </Link>
        );
      },
    };

    return options;
  }, []);

  useEffect(() => {
    document.body.className = bodyClass;
    document.title = title;

    const syncTemplateBehavior = async () => {
      await refreshTemplateScripts();

      if (location.hash) {
        requestAnimationFrame(() => {
          document.querySelector(location.hash)?.scrollIntoView();
        });
        return;
      }

      window.scrollTo(0, 0);
    };

    syncTemplateBehavior().catch((error) => {
      console.error('Template route refresh failed.', error);
    });
  }, [bodyClass, location.hash, location.pathname, title]);

  return <>{parse(html, parserOptions)}</>;
}
