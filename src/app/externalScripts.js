const vendorScripts = [
  '/assets/js/jquery.min.js',
  '/assets/js/popper.min.js',
  '/assets/js/bootstrap.min.js',
  '/assets/js/bootstrap-dropdown-ml-hack.min.js',
  '/assets/js/cursor.js',
  '/assets/js/gsap.js',
  '/assets/js/gsap-scroll-trigger.js',
  '/assets/js/gsap-split-text.js',
  '/assets/js/smooth-scroll.js',
  '/assets/js/aos.js',
  '/assets/js/countdown.js',
  '/assets/js/swiper-bundle.min.js',
  '/assets/js/magnific-popup.min.js',
  '/assets/js/appear.min.js',
  '/assets/js/odometer.min.js',
];

const mainScriptSrc = '/assets/js/main.js';
let vendorScriptsPromise;

function loadScript(src, attributes = {}) {
  return new Promise((resolve, reject) => {
    const selector = `script[src="${src}"]`;
    const existingScript = document.querySelector(selector);

    if (existingScript?.dataset.loaded === 'true') {
      resolve();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = false;

    Object.entries(attributes).forEach(([key, value]) => {
      if (value !== undefined) {
        script.setAttribute(key, value);
      }
    });

    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function cleanupTemplateBindings() {
  const $ = window.jQuery;

  if (!$) {
    return;
  }

  $(window).off('scroll');
  $(window).off('load');
  $('.scroll').off('click');
  $('.mobile_menu_btn').off('click');
  $('.scrollspy_btn[href^="#"]').off('click');
  $('.ico_roadmap_flexbox .roadmap_block').off('mouseover');
  $('.roadmap_carousel .swiper-slide .roadmap_block').off('mouseover mouseleave');
  $('.copy_btn').off('click');
}

async function ensureVendorScripts() {
  if (!vendorScriptsPromise) {
    vendorScriptsPromise = (async () => {
      for (const scriptSrc of vendorScripts) {
        await loadScript(scriptSrc);
      }
    })();
  }

  await vendorScriptsPromise;
}

async function reloadMainScript() {
  document.querySelector('[data-template-main="true"]')?.remove();

  const versionedSrc = `${mainScriptSrc}?route=${Date.now()}`;
  await loadScript(versionedSrc, { 'data-template-main': 'true' });

  if (document.readyState === 'complete') {
    window.dispatchEvent(new Event('load'));
  }
}

export async function refreshTemplateScripts() {
  cleanupTemplateBindings();
  await ensureVendorScripts();

  if (window.AOS?.refreshHard) {
    window.AOS.refreshHard();
  }

  await reloadMainScript();
}
