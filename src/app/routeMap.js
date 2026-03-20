export const cleanRouteMap = {
  'index.html': '/',
  'index_ico.html': '/index_ico',
  'index_memecoin.html': '/index_memecoin',
  'index_pepecoin.html': '/index_pepecoin',
  'blog.html': '/blog',
  'blog_details.html': '/blog_details',
  'contact.html': '/contact',
  'sign_in.html': '/sign_in',
  'sign_up.html': '/sign_up',
};

const noopPrefixes = ['#', 'mailto:', 'tel:', 'javascript:'];

export function mapTemplateHrefToRoute(href) {
  if (!href) {
    return null;
  }

  const normalizedHref = href.trim();

  if (!normalizedHref || normalizedHref === '#!' || noopPrefixes.some((prefix) => normalizedHref.startsWith(prefix))) {
    return null;
  }

  const match = normalizedHref.match(/^(?:\.\/)?\/?([^?#]+\.html)(.*)?$/i);

  if (!match) {
    return null;
  }

  const route = cleanRouteMap[match[1]];

  if (!route) {
    return null;
  }

  return `${route}${match[2] ?? ''}`;
}
