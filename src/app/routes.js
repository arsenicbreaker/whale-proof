import blogDetailsHtml from '../pages/templates/blog_details.body.html?raw';
import blogHtml from '../pages/templates/blog.body.html?raw';
import contactHtml from '../pages/templates/contact.body.html?raw';
import homeHtml from '../pages/templates/index.body.html?raw';
import signInHtml from '../pages/templates/sign_in.body.html?raw';
import signUpHtml from '../pages/templates/sign_up.body.html?raw';

export const appPages = [
  { path: '/', title: 'WhaleProof - The Financial Literacy Protocol for Retail Traders', bodyClass: 'index_ico', html: homeHtml },
  { path: '/index', title: 'WhaleProof - The Financial Literacy Protocol for Retail Traders', bodyClass: 'index_ico', html: homeHtml },
  { path: '/index_ico', title: 'WhaleProof - The Financial Literacy Protocol for Retail Traders', bodyClass: 'index_ico', html: homeHtml },
  { path: '/index_memecoin', title: 'WhaleProof - The Financial Literacy Protocol for Retail Traders', bodyClass: 'index_ico', html: homeHtml },
  { path: '/index_pepecoin', title: 'WhaleProof - The Financial Literacy Protocol for Retail Traders', bodyClass: 'index_ico', html: homeHtml },
  { path: '/blog', title: 'Blogs - WhaleProof', bodyClass: 'index_ico', html: blogHtml },
  { path: '/blog_details', title: 'Blogs Details - WhaleProof', bodyClass: 'index_ico', html: blogDetailsHtml },
  { path: '/contact', title: 'Contact - WhaleProof', bodyClass: 'index_ico', html: contactHtml },
  { path: '/sign_in', title: 'Login - WhaleProof', bodyClass: 'index_ico', html: signInHtml },
  { path: '/sign_up', title: 'Create Account - WhaleProof', bodyClass: 'index_ico', html: signUpHtml },
];

export const legacyRedirects = [
  { from: '/index.html', to: '/' },
  { from: '/index_ico.html', to: '/index_ico' },
  { from: '/index_memecoin.html', to: '/index_memecoin' },
  { from: '/index_pepecoin.html', to: '/index_pepecoin' },
  { from: '/blog.html', to: '/blog' },
  { from: '/blog_details.html', to: '/blog_details' },
  { from: '/contact.html', to: '/contact' },
  { from: '/sign_in.html', to: '/sign_in' },
  { from: '/sign_up.html', to: '/sign_up' },
];
