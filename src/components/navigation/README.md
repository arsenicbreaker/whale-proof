# React Navigation Components

Komponen navigasi modular yang dikonversi dari HTML ke React dengan pendekatan data-driven.

## 📁 Struktur Folder

```
src/
├── components/
│   └── navigation/
│       ├── Header.jsx          # Komponen wrapper utama
│       ├── Navbar.jsx          # Container menu navigasi
│       ├── NavItem.jsx         # Item menu tunggal
│       ├── NavDropdown.jsx     # Menu dengan dropdown/submenu
│       ├── index.js            # Export barrel file
│       └── ExampleUsage.jsx    # Contoh penggunaan
└── data/
    └── navigationMenu.js       # Data konfigurasi menu (data-driven)
```

## 🎯 Fitur

- ✅ **Modular & Reusable**: Setiap komponen dapat digunakan secara independen
- ✅ **Data-Driven**: Menu dikonfigurasi melalui array of objects, bukan hardcode di JSX
- ✅ **Bootstrap Compatible**: Mempertahankan semua class dan data-attributes Bootstrap
- ✅ **CSS Animation Ready**: Semua `data-text` attributes tetap dipertahankan untuk animasi CSS
- ✅ **Nested Dropdown Support**: Mendukung dropdown bertingkat (multi-level)
- ✅ **Scrollspy Compatible**: Support untuk smooth scrolling ke section
- ✅ **Mobile Responsive**: Includes mobile menu toggle

## 📦 Komponen

### 1. Header
Komponen wrapper utama yang berisi logo, navigasi, dan tombol aksi.

**Props:**
- `logoSrc`: string (default: 'assets/images/site_logo/site_logo_1.svg')
- `logoAlt`: string (default: 'ICO Site Logo')
- `logoLink`: string (default: 'index.html')

**Penggunaan:**
```jsx
import { Header } from './components/navigation';

<Header 
  logoSrc="assets/images/site_logo/site_logo_1.svg"
  logoAlt="ICO Site Logo"
  logoLink="index.html"
/>
```

### 2. Navbar
Container yang merender daftar menu berdasarkan data array.

**Props:**
- `menuItems`: Array of menu objects

**Penggunaan:**
```jsx
import { Navbar } from './components/navigation';
import { navigationMenu } from './data/navigationMenu';

<Navbar menuItems={navigationMenu} />
```

### 3. NavItem
Komponen untuk menu tunggal tanpa dropdown.

**Props:**
- `label`: string - Teks yang ditampilkan
- `href`: string - Link tujuan
- `dataText`: string - Attribute untuk animasi CSS
- `scrollspy`: boolean - Apakah link scrollspy
- `active`: boolean - Status aktif

**Penggunaan:**
```jsx
<NavItem 
  label="About ICO"
  href="#id_ico_about_section"
  dataText="About ICO"
  scrollspy={true}
  active={false}
/>
```

### 4. NavDropdown
Komponen untuk menu dengan submenu/dropdown. Mendukung nested dropdown.

**Props:**
- `label`: string - Teks yang ditampilkan
- `href`: string - Link tujuan
- `dataText`: string - Attribute untuk animasi CSS
- `dropdownId`: string - ID unik untuk Bootstrap dropdown
- `children`: Array - Daftar submenu
- `scrollspy`: boolean - Apakah link scrollspy
- `active`: boolean - Status aktif
- `isNested`: boolean - Apakah nested dropdown

**Penggunaan:**
```jsx
<NavDropdown
  label="Help"
  href="#"
  dataText="Help"
  dropdownId="help_submenu"
  children={[
    { id: 'roadmap', label: 'Roadmap', href: '#roadmap' },
    { id: 'contact', label: 'Contact', href: 'contact.html' }
  ]}
/>
```

## 🔧 Konfigurasi Menu (Data-Driven)

Edit file `src/data/navigationMenu.js` untuk mengubah struktur menu:

```javascript
export const navigationMenu = [
  {
    id: 'home',                    // Unique identifier
    label: 'Home',                 // Display text
    href: '#',                     // Link destination
    dataText: 'Home',              // For CSS animations
    active: true,                  // Active state
    hasDropdown: true,             // Has submenu?
    dropdownId: 'homes_submenu',   // Bootstrap dropdown ID
    scrollspy: false,              // Scrollspy enabled?
    children: [                    // Submenu items
      {
        id: 'home-ico',
        label: 'Coinpay ICO',
        href: 'index_ico.html',
        active: true
      },
      // ... more items
    ]
  },
  // ... more menu items
];
```

### Struktur Data Menu

**Menu Tunggal:**
```javascript
{
  id: 'contact',
  label: 'Contact',
  href: 'contact.html',
  dataText: 'Contact'
}
```

**Menu dengan Dropdown:**
```javascript
{
  id: 'help',
  label: 'Help',
  href: '#',
  dataText: 'Help',
  hasDropdown: true,
  dropdownId: 'help_submenu',
  children: [
    { id: 'roadmap', label: 'Roadmap', href: '#roadmap' },
    { id: 'contact', label: 'Help Center', href: 'contact.html' }
  ]
}
```

**Nested Dropdown (Dropdown di dalam Dropdown):**
```javascript
{
  id: 'help',
  label: 'Help',
  hasDropdown: true,
  dropdownId: 'help_submenu',
  children: [
    {
      id: 'blog',
      label: 'Blog',
      hasDropdown: true,
      dropdownId: 'blog_submenu',
      children: [
        { id: 'blogs', label: 'Blogs', href: 'blog.html' },
        { id: 'blog-details', label: 'Blog Details', href: 'blog_details.html' }
      ]
    }
  ]
}
```

## 🚀 Cara Menggunakan

### 1. Import dan Gunakan di Aplikasi

```jsx
// App.jsx atau component lainnya
import React from 'react';
import { Header } from './components/navigation';

function App() {
  return (
    <div className="page_wrapper">
      <Header />
      
      <main className="page_content">
        {/* Konten halaman Anda */}
      </main>
    </div>
  );
}

export default App;
```

### 2. Custom Logo dan Props

```jsx
<Header 
  logoSrc="path/to/your/logo.svg"
  logoAlt="Your Brand"
  logoLink="/"
/>
```

### 3. Mengubah Menu

Edit `src/data/navigationMenu.js`:

```javascript
export const navigationMenu = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    dataText: 'Home'
  },
  {
    id: 'products',
    label: 'Products',
    href: '#',
    dataText: 'Products',
    hasDropdown: true,
    dropdownId: 'products_submenu',
    children: [
      { id: 'product-1', label: 'Product 1', href: '/products/1' },
      { id: 'product-2', label: 'Product 2', href: '/products/2' }
    ]
  }
];
```

## ⚠️ Catatan Penting

1. **Jangan Ubah CSS Classes**: Semua `className` dan `data-attributes` dipertahankan sesuai HTML asli agar animasi CSS dan Bootstrap JavaScript tetap bekerja.

2. **Bootstrap JavaScript**: Pastikan Bootstrap JavaScript sudah ter-load di aplikasi Anda untuk dropdown functionality:
   ```html
   <script src="/assets/js/bootstrap.bundle.min.js"></script>
   ```

3. **CSS Dependencies**: Komponen ini menggunakan class dari:
   - Bootstrap CSS
   - Custom CSS (style.css)
   - FontAwesome untuk ikon

4. **Scrollspy**: Jika menggunakan scrollspy, pastikan inisialisasi scrollspy JavaScript sudah dijalankan.

## 🎨 Customization

### Mengubah Ikon Dropdown

Edit `NavDropdown.jsx`:
```jsx
<i className={isNested ? "fa-solid fa-angle-right" : "fa-solid fa-angle-down"}></i>
```

### Menambahkan Class Custom

Edit komponen yang sesuai dan tambahkan class:
```jsx
<header className="site_header your-custom-class">
```

### Mengubah Mobile Breakpoint

Class `d-lg-none` mengontrol visibilitas mobile button. Ubah sesuai kebutuhan:
- `d-sm-none` - Hidden on small screens and up
- `d-md-none` - Hidden on medium screens and up
- `d-lg-none` - Hidden on large screens and up

## 📝 Example: Integrasi dengan React Router

```jsx
import { Link } from 'react-router-dom';
import { Header } from './components/navigation';

// Modify NavItem to use Link instead of <a>
const NavItemWithRouter = ({ label, href, dataText, scrollspy, active }) => {
  return (
    <li className={active ? 'active' : ''}>
      <Link className="nav-link" to={href}>
        <span className="nav_link_label" data-text={dataText || label}>
          {label}
        </span>
      </Link>
    </li>
  );
};
```

## 🐛 Troubleshooting

**Dropdown tidak berfungsi:**
- Pastikan Bootstrap JavaScript ter-load
- Cek console browser untuk error
- Pastikan `dropdownId` unik untuk setiap dropdown

**Animasi CSS tidak berjalan:**
- Pastikan attribute `data-text` ada
- Cek apakah CSS animation sudah ter-load
- Periksa file style.css untuk animation definitions

**Mobile menu tidak muncul:**
- Pastikan class Bootstrap sudah benar
- Cek responsive breakpoint (col-lg-*, d-lg-none)
- Pastikan Bootstrap collapse JavaScript bekerja

## 📄 License

Silakan disesuaikan dengan license proyek Anda.

---

**Dibuat dengan ❤️ menggunakan React + Vite + Bootstrap**
